// Requerimos el bcrypt.    
const bcrypt = require('bcryptjs');

// Requerimos el fs.
const fs = require('fs');

// Requerimos path para poder enviar archivos.
const path = require('path');

// Requerimos express-validator
const { validationResult } = require('express-validator');

// Requerimos el modelo de User y la base de datos.
const db = require('../models')
const User = require('../models/User');

// Creamos el objeto controller.
const userController = {

    // Renderizamos la vista del registro.
    createView: (req, res) => {
        res.render('register');
    },

    // Este codigo gestiona el proceso de creacion de un usuario.
    // Valida los datos de entrada.
    // Lo ingresa a la base de datos.
    // Redirige al perfil del usuario recien creado.
    processCreate: async (req, res) => {
        let errors = validationResult(req);

        try {
            if (!errors.isEmpty()) {
                return res.render('register', {
                    errors: errors.mapped(),
                    old: req.body
                });
            }
            const idUserToEdit = await db.User.create({
                first_name: req.body.name,
                last_name: req.body.lastName,
                phone: req.body.phone,
                email: req.body.email,
                birth_date: req.body.birthdate,
                address: req.body.address,
                password: bcrypt.hashSync(req.body.password, 10),
                image_profile: path.parse(req.file.filename).name,
                rol_id: 1
            })
            res.redirect('./profile/' + idUserToEdit.id);
        } catch (error) {
            res.status(400).render('error', { message: error.message });
        }
    },

    login: (req, res) => {
        res.render('login');
    },

    processLogin: async (req, res) => {
        try {
            // Creamos la variable error.
            const error = validationResult(req);
            // Verificamos si hay errores.
            if (!error.isEmpty()) {
                return res.render('login', {
                    errors: error.mapped(),
                    old: req.body
                });
            }
            // Guardamos los datos del usuario que viene en el form en la variable user.
            const userToLogin = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            // Borramos la propiedad password.
            if (userToLogin) {
                delete userToLogin.dataValues.password;
            }
            // Preguntamos que rol tiene el usuario.
            if (userToLogin.rol_id === 2) {
                // Guardamos el usuario en la sesion como admin.
                req.session.userAdmin = userToLogin
            } else if (userToLogin.rol_id === 1) {
                // Guardamos el usuario en la sesion como user.
                req.session.userLogged = userToLogin;
            }
            // Verificamos si vino rememberMe en el form.
            if (req.body.rememberMe) {
                // Recordarme contraseña.
                res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 * 5 }); // Cookie expira en 5 minutos.
            }
            // Si no hay errores.
            res.redirect('/user/profile/' + userToLogin.id);
        } catch (error) {
            // En caso de error, envia el error como respuesta.
            res.status(500).send(error.message);
        }    
    },

    profile: async (req, res) => {
        try {
            const idUserToEdit = await db.User.findByPk(req.params.id, {
                include: [{ association: 'rols' }],
            });

            res.render('profileUser', { idUserToEdit });
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    upload: async (req, res) => {
        try {
            const idUserToEdit = await db.User.findByPk(req.params.id);

            res.render('profileUserEdit', { idUserToEdit });
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
          const user = await db.User.findByPk(req.params.id);
          if (user) {
            await db.User.destroy({
              where: { id: req.params.id },
            });
            res.redirect("/");
          }
        } catch (error) {
          res.status(500).send(error.message);
        }
      },
    
      logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
      },
};    
// Exportamos el objeto controlador
module.exports = userController;

