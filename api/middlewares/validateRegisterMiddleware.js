const express = require('express');
const { body, validationResult } = require('express-validator');
const path = require('path');
const multer = require('multer');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage });

const validateRegisterMiddleware = [
  body("email").notEmpty().withMessage("El email es obligatorio")
    .bail().isEmail().withMessage("El email no es válido"),
  body("password").notEmpty().withMessage("La contraseña es obligatoria")
    .bail().isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/^(?=.*[A-Z])/).withMessage("La contraseña debe tener al menos una mayúscula"),
];

app.use(express.json());

app.post('http://localhost:4000/api/user/register', upload.single('imageProfile'), validateRegisterMiddleware, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ valido: false, errores: errors.array() });
  }
  res.json({ valido: true });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});