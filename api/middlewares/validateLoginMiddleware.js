const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');

// Traemos la base de datos.
const db = require('../models');

//.notEmpty() verifica que el campo no este vacio.
//.isLength({ min: 5, max: 10 }) verifica la longitud de los datos.
//.isEmail() verifica que sea un email valido.
//.bail() sirve para cortar validacion, se utiliza para que el usuario no reciba todos los errores.

const validationsLoginMiddleware = [
    body("email")
      .notEmpty()
      .withMessage("El email es obligatorio")
      .bail()
      .isEmail()
      .withMessage("El email no es válido")
      .custom(async (value, { req }) => {
        //validamos que el email exista
        //traemos todos los usuarios con try catch
        let user = await db.User.findOne({
          where: {
            email: req.body.email,
          },
        });
        if (!user) {
          throw new Error("El email no existe");
        } else {
          return true;
        }
      })
      .bail(),
    body("password")
      .notEmpty()
      .withMessage("La contraseña es obligatoria")
      .bail()
      .isLength({ min: 8 })
      .withMessage("La contraseña debe tener al menos 8 caracteres")
      .matches(/^(?=.*[A-Z])/)
      .withMessage("La contraseña debe tener al menos una mayúscula")
      .custom(async (value, { req }) => {
        try {
          let user = await db.User.findOne({where: {email: req.body.email,}});
          if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
            throw new Error("La contraseña es incorrecta");
          } else {
            return true;
          }
        } catch (error) {
          throw new Error("La contraseña es incorrecta");
        }
      }),
  ];

  module.exports = validationsLoginMiddleware;
