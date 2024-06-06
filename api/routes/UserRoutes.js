const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register
router.post('/register', async (req, res) => {
    const {username, password} = req.body;

    const salt =  bcrypt.genSaltSync(10);

     try {
      await User.sync();
      const user = await User.create({
         username: username,
         password: bcrypt.hashSync(password, salt)
      });
 
      const token = jwt.sign({ userkey: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
 
      res.cookie('token', token, {
       httpOnly: true,
       secure: true, 
       maxAge: 3600000 
     });
 
   
      res.status(200).json('usuario creado correctamente');
     } catch (error) {
      res.status(500).send('Internal server error');
     }
    
});

// login
router.post('/login', async(req, res) => {
    const {username, password } = req.body;

    try {
      const user = await User.findOne({
        where: {
          username
        }
      });

      if (!user) {
        return res.status(401).json('Usuario o contraseña invalido');
      }

      const passOk = await bcrypt.compare(password, user.password);

      if (!passOk) {
        return res.status(401).json('Usuario o contraseña invalido');
      }

      const token = jwt.sign({ user: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });

      res.cookie('token', token, {
        httpOnly: true,
        secure: true, 
        maxAge: 3600000 
      });

      res.status(200).json('has abierto sesion correctamente');
    } catch (error) {
      res.status(500).send('Internal server error');
    }
    
});


// cerrar sesion
router.post('/logout', (req, res) => {
  try {
    res.clearCookie('token').json('Cerraste sesion de manera exitosa');
  } catch (error) {
    res.status(500).send('Error interno en el servidor');
  }
  
});

module.exports = router;