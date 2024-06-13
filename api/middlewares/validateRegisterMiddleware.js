const {body} = require("express-validator");
const path = require("path");

//.notEmpty() verifica que el campo no este vacio.
//.isLength({ min: 5, max: 10 }) verifica la longitud de los datos.
//.isEmail() verifica que sea un email valido.
//.bail() sirve para cortar validacion, se utiliza para que el usuario no reciba todos los errores.

 const validateRegisterMiddleware = [
  body("name").notEmpty()
    .withMessage("El nombre es obligatorio"),
  body("lastName")
    .notEmpty()
    .withMessage("El apellido es obligatorio"),
  body('phone')
    .notEmpty()
    .withMessage('El telefono es obligatorio'),
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .bail()
    .isEmail()
    .withMessage("El email no es válido"),
  body("birthdate")
    .notEmpty()
    .withMessage("La fecha de nacimiento es obligatoria")
    .bail()
    .isISO8601()
    .withMessage("La fecha de nacimiento debe ser una fecha válida"),
  body("address")
    .notEmpty()
    .withMessage("El domicilio es obligatorio"),
  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .bail()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/^(?=.*[A-Z])/)
    .withMessage("La contraseña debe tener al menos una mayúscula"),
  body("imageProfile").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }
    return true;
  }),
]

module.exports = validateRegisterMiddleware