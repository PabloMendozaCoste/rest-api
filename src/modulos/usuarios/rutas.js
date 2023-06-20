<<<<<<< HEAD
const express = require('express');
const respuesta = require('../../red/respuestas');
const controlador = require('./index');

const router=express.Router();

router.post('/Registrar',agregar);

async function agregar (req, res, next){
    try{
        const items = await controlador.agregar(req.body);
        if(req.body.id == 0){
            mensaje = 'Usuario guardado con exito';
        }else{
            mensaje = 'Usuario actualizado con exito';
        }
        respuesta.success(req, res, mensaje, 201)
    }catch(err){
        next(err);
    }
};



=======
const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./index');



const router=express.Router();

router.get('/',todos);
router.get('/:id', uno);
router.post('/',agregar);
router.put('/', eliminar); //al final del proyecto cambiar PUT por DELETE

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
            mensaje = 'Item actualizado con exito';
        }
        respuesta.success(req, res, mensaje, 201)
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

>>>>>>> c2e7427057ffea9d09b8e5e22ef24f6556e16ed4
module.exports = router;