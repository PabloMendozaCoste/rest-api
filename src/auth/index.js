const jwt = require('jsonwebtoken');
const config = require('../config');

function authenticateToken(req, res, next) {
  // Obtener el token del encabezado de autorización
  const token = req.header('Authorization');

  // Verificar si el token no está presente
  if (!token) {
    return res.status(401).json({ error: 'No se proporcionó ningún token' });
  }

  // Verificar y decodificar el token
  jwt.verify(token, config.jwt.secret, (error, user) => {
    // Verificar si hay un error al verificar el token
    if (error) {
      return res.status(403).json({ error: 'Token inválido' });
    }

    // Almacenar la información del usuario en el objeto de solicitud
    req.user = user;

    // Llamar a la siguiente función en la cadena de middleware
    next();
  });
}

module.exports = {
  authenticateToken,
};