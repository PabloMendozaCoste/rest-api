<<<<<<< HEAD
const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./index');

const router=express.Router();

router.get('/login', login);

async function login (req, res, next){
    try{
        const token = await controlador.login(req.body.usuario, req.body.password); 
        respuesta.success(req, res, token, 200)
    }catch(err){
        next(err);
    }
};

=======
const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./index');

const router=express.Router();

router.get('/login', login);

async function login (req, res, next){
    try{
        const token = await controlador.login(req.body.usuario, req.body.password); 
        respuesta.success(req, res, token, 200)
    }catch(err){
        next(err);
    }
};

>>>>>>> c2e7427057ffea9d09b8e5e22ef24f6556e16ed4
module.exports = router;