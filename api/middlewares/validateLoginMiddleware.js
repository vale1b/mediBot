const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('./models'); // Ajusta la ruta según la estructura de tu proyecto

const app = express();
const port = 3000;

app.use(express.json()); // Para parsear JSON en el body de las solicitudes

const validationsLoginMiddleware = [
  body('email')
    .notEmpty()
    .withMessage('El email es obligatorio')
    .bail()
    .isEmail()
    .withMessage('El email no es válido')
    .custom(async (value, { req }) => {
      let user = await db.User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        throw new Error('El email no existe');
      } else {
        return true;
      }
    })
    .bail(),
  body('password')
    .notEmpty()
    .withMessage('La contraseña es obligatoria')
    .bail()
    .isLength({ min: 8 })
    .withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/^(?=.*[A-Z])/)
    .withMessage('La contraseña debe tener al menos una mayúscula')
    .custom(async (value, { req }) => {
      try {
        let user = await db.User.findOne({ where: { email: req.body.email } });
        if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
          throw new Error('La contraseña es incorrecta');
        } else {
          return true;
        }
      } catch (error) {
        throw new Error('La contraseña es incorrecta');
      }
    }),
];

app.post('http://localhost:4000/api/user/login', validationsLoginMiddleware, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ valido: false, errores: errors.array() });
  }
  res.json({ valido: true });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
