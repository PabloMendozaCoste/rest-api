<<<<<<< HEAD
exports.success = function(req, res, mensaje = '', status = 200) {
    // Envia una respuesta exitosa al cliente con el mensaje y el estado especificados
    res.status(status).send({
        error: false,
        status: status,
        body: mensaje
    });
}

exports.error = function(req, res, mensaje = 'error interno', status = 500) {
    // Envia una respuesta de error al cliente con el mensaje y el estado especificados
    res.status(status).send({
        error: true,
        status: status,
        body: mensaje
    });
}
=======
exports.success= function(req, res, mensaje ='', status=200) {
    res.status(status).send({
        error: false,
        status: status,
        body: mensaje
    })
}

exports.error= function(req, res, mensaje='error interno', status=500) {
    res.status(status).send({
        error: true,
        status: status,
        body: mensaje
    })
}
>>>>>>> c2e7427057ffea9d09b8e5e22ef24f6556e16ed4
