<<<<<<< HEAD
const respuesta = require('./respuestas');

function errors(err, req, res, next){
    console.log('error',err);

    const message= err.message || 'Error interno';
    const status =err.status || 500;

    respuesta.error(req, res, message, status);
}

=======
const respuesta = require('./respuestas');

function errors(err, req, res, next){
    console.log('error',err);

    const message= err.message || 'Error interno';
    const status =err.status || 500;

    respuesta.error(req, res, message, status);
}

>>>>>>> c2e7427057ffea9d09b8e5e22ef24f6556e16ed4
module.exports = errors;