// Este es middleware redirige a los usuarios autenticados a su perfil y permite el acceso a los invitados(usuarios no autenticados).
function guestMiddleware(req, res, next) {
    if (req.session.userLogged || req.session.userAdmin) {
        let user = req.session.userLogged || req.session.userAdmin;

        return res.redirect('/user/profile/' + user.id);
    }
    next();
}
module.exports = guestMiddleware;