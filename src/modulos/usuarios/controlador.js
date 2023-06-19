const TABLA ='usuarios';
const auth= require('../auth');

module.exports = function(dbInyectada){

    let db = dbInyectada;

    if(!db){
        db = require('../../DB/mysql');
    }

        
    
    async function agregar(body){

        const usuario={
            id: body.id,
            nombre: body.nombre,
            nivel: body.nivel
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
        
        agregar
    }

    
}