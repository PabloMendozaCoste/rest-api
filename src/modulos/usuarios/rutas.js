const express = require('express');
const respuesta = require('../../red/respuestas');
const controlador = require('./index');

const router=express.Router();


router.post('/Registrar',agregar);



async function agregar (req, res, next){
    try{
        const items = await controlador.agregar(req.body);
        if(req.body.id == 0){
            mensaje = 'Item guardado con exito';
        }else{
            mensaje = 'Item actualizado con exito';
        }
        respuesta.success(req, res, mensaje, 201)
    }catch(err){
        next(err);
    }
};



module.exports = router;