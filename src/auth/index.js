<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const config = require('../config');

const secret = config.jwt.secret;

function asignarToken(data) {
  return jwt.sign(data, secret);
}

function verificarToken(token) {
  return jwt.verify(token, secret);
}

const chequearToken = {
  confirmarToken: function (req, res, next) {
    try {
      const decodificado = decodificarCabecera(req);
      next();
    } catch (error) {
      res.status(401).json({ error: 'Acceso no autorizado' });
    }
  },
};

function obtenerToken(autorizacion) {
  if (!autorizacion) {
    throw new Error('No viene token');
  }

  if (autorizacion.indexOf('Bearer') === -1) {
    throw new Error('Formato invalido');
  }

  let token = autorizacion.replace('Bearer', '');
  return token;
}

function decodificarCabecera(req) {
  const autorizacion = req.headers.authorization || '';
  const token = obtenerToken(autorizacion);
  const decodificado = verificarToken(token);

  req.user = decodificado;

  return decodificado;
}

module.exports = {
  asignarToken,
  chequearToken,
  confirmarToken: chequearToken.confirmarToken, 
};
=======
const jwt = require('jsonwebtoken');
config = require('../config');

const secret = config.jwt.secret;

function asignarToken(data){
    return jwt.sign(data, secret);
}

module.exports={
    asignarToken
}
>>>>>>> c2e7427057ffea9d09b8e5e22ef24f6556e16ed4
