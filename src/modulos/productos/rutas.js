const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

//const { agregar } = require('../../DB/mysql');
//const { route } = require('../../app');
//const { eliminar } = require('../../DB/mysql');

const router=express.Router();

router.get('/',todos);
router.get('/:id', uno);
router.post('/add',agregar);
router.post('/update',actualizar);
router.delete('/delete', eliminar);

async function todos (req, res, next){
    try{
        const items = await controlador.todos(); 
        respuesta.success(req, res, items, 200)
    }catch(err){
        next(err);
    }
};

async function uno (req, res, next){
    try{
        const items = await controlador.uno(req.params.id); 
        respuesta.success(req, res, items, 200)
    }catch(err){
        next(err);
    }
};

async function agregar (req, res, next){
    try{
        const items = await controlador.agregar(req.body);
        if(req.body.id == 0){
            mensaje = 'Item guardado con exito';
        }else{
            respuesta.error(req, res, 'item ya existe', 500)
        }
        respuesta.success(req, res, mensaje, 200)
    }catch(err){
        next(err);
    }
};

async function actualizar (req, res, next){
    try{
        const items = await controlador.actualizar(req.body); 
        respuesta.success(req, res, 'items actualizado con exito', 200)
    }catch(err){
        next(err);
    }
};

async function eliminar (req, res, next){
    try{
        const items = await controlador.eliminar(req.body); 
        respuesta.success(req, res, 'Item actualizado con exito', 200)
    }catch(err){
        next(err);
    }
};

module.exports = router;