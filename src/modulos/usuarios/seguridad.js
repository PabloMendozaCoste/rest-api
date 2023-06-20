const auth = require('../../auth');

module.exports = function chequearAuth(){

    function middleware(req, res, next){
        // Llamar a la función authenticateToken del módulo auth
        auth.authenticateToken(req, id)
        next;
    }

    return middleware

}