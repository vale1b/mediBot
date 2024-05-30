// Este middleware tiene la logica necesaria para redirigir a los usuarios no autenticados a la pagina de inicio de sesion.
// En caso de que el usuario este logeado como usuario normal o administrador se ejecutara la funcion next() para permitir que la solicitud continue a la siguiente ruta o middleware.
const authMiddleware = (req, res, next) => {
    if (!req.session.userLogged && !req.session.userAdmin) {
        return res.redirect(/user/login);
    }
    next(); 
};
module.exports = authMiddleware;