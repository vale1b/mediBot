// Requerimos express.
const express = require("express"); 

// Llamamos a la clase Router de express y la guardamos en una constante.
const router = express.Router();

// Middlewares.
const validationsLoginMiddleware = require('../middlewares/validateLoginMiddleware')
const validationsRegisterMiddleware = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

// Requerimos el controlador.
const userController = require("../controllers/userController");

// Definimos las rutas de users.

// Rutas de registro.
router.get("/register", guestMiddleware,  userController.createView);
router.post("/register",upload.single("imageProfile"), validationsRegisterMiddleware, userController.processCreate);

// Rutas de login
router.get("/login", guestMiddleware, userController.login);
router.post("/login", validationsLoginMiddleware , userController.processLogin);

//rutas de logout
router.get("/logout", userController.logout);


// Rutas de profile
router.get("/profile/:id", authMiddleware, userController.profile);

// Rutas de edit 
router.get("/profile/edit/:id", authMiddleware, userController.upload);
// Rutas de delete
router.delete("/delete/:id", adminMiddleware, userController.deleteUser);