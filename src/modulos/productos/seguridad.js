const auth = require('../../auth');



module.exports = function chequearAuth(){

    function middleware(req, res, next){
        
        auth.authenticateToken(req, id)
        next;
    }

    return middleware

}