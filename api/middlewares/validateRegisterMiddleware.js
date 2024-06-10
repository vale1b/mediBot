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
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
  body("lastName").notEmpty().withMessage("El apellido es obligatorio"),
  body("phone").notEmpty().withMessage("El teléfono es obligatorio"),
  body("email").notEmpty().withMessage("El email es obligatorio")
    .bail().isEmail().withMessage("El email no es válido"),
  body("birthdate").notEmpty().withMessage("La fecha de nacimiento es obligatoria")
    .bail().isISO8601().withMessage("La fecha de nacimiento debe ser una fecha válida"),
  body("address").notEmpty().withMessage("El domicilio es obligatorio"),
  body("password").notEmpty().withMessage("La contraseña es obligatoria")
    .bail().isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/^(?=.*[A-Z])/).withMessage("La contraseña debe tener al menos una mayúscula"),
  body("imageProfile").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
      }
    }
    return true;
  }),
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