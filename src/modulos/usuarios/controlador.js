<<<<<<< HEAD
const TABLA = 'usuarios';
const auth = require('../auth');

module.exports = function(dbInyectada) {

    let db = dbInyectada;

    if (!db) {
        db = require('../../db/mysql');
    }

    async function agregar(body) {
        // Crea un objeto usuario con los datos proporcionados en el cuerpo de la solicitud
        const usuario = {
            id: body.id,
            nombre: body.nombre,
            nivel: body.nivel
        };

        // Agrega el usuario a la tabla correspondiente en la base de datos
        const respuesta = await db.agregar(TABLA, usuario);

        var insertId = 0;
        if (body.id == 0) {
            insertId = respuesta.insertId;
        } else {
            insertId = body.id;
        }

        var respuesta2 = '';
        if (body.usuario || body.password) {
            // Agrega el usuario a la tabla de autenticación utilizando el módulo 'auth'
            respuesta2 = await auth.agregar({
                id: insertId,
                usuario: body.usuario,
                password: body.password
            });
        }

        return respuesta2;
    }

    return {
        agregar
    }
}
=======
const TABLA ='usuarios';
const auth= require('../auth');

module.exports = function(dbInyectada){

    let db = dbInyectada;

    if(!db){
        db = require('../../DB/mysql');
    }

    function todos(){
        return db.todos(TABLA);
    }
    
    function uno(id){
        return db.uno(TABLA,id);
    }
    
    function eliminar(body){
        return db.eliminar(TABLA,body);
    }
    
    async function agregar(body){

        const usuario={
            id: body.id,
            nombre: body.nombre,
            activo: body.activo
        }
        const respuesta= await db.agregar(TABLA,usuario);

        var insertId = 0;
        if(body.id == 0){
            insertId = respuesta.insertId;
        }else{
            insertId = body.id;
        }

        var respuesta2='';
        if(body.usuario || body.password){
            respuesta2 = await auth.agregar({
                id: insertId,
                usuario: body.usuario,
                password: body.password
            })
        }

        return respuesta2;
    }
    
    return{
        todos,
        uno,
        eliminar,
        agregar
    }

    
}
>>>>>>> c2e7427057ffea9d09b8e5e22ef24f6556e16ed4
