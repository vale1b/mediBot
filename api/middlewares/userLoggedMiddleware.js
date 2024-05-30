// Obtenemos la base de datos.
const db = require('../models');

// Este middleware es una excelente manera de gestionar el estado de autenticacion y rol de los usuarios basandose en cookies y sesiones.
async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    res.locals.isAdmin = false;

    let emailInCookie = req.cookies.userEmail;

    if (emailInCookie) {
        let userCookie = await db.User.findOne({ where: { email: emailInCookie } });
            if (userCookie.rol_id == 2) {
                req.session.userAdmin = userCookie;
            }else{
                req.session.userLogged = userCookie;
            }
    }
    if(req.session.userAdmin) {
        res.locals.isAdmin = true;
        res.locals.userAdmin = req.session.userAdmin;
    }
    if(req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}
module.exports = userLoggedMiddleware;