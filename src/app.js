const express = require('express');
const config = require('./config');

const clientes = require('./modulos/clientes/rutas.js')

const app= express();
//Configuracion
app.set('port', config.app.port)

//Rutas
app.use('/api/productos',clientes)

module.exports = app;