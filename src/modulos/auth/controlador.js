<<<<<<< HEAD
const TABLA ='auth';
const auth = require('../../auth');
const bcrypt = require('bcrypt');

module.exports = function(dbInyectada){

    let db = dbInyectada;

    if(!db){
        db = require('../../db/mysql');
    }
      
    // Función para realizar el inicio de sesión
    async function login(usuario, password){
        const data = await db.query(TABLA, {usuario: usuario});

        return bcrypt.compare(password, data.password)
        .then(resultado =>{
            if(resultado ===true){
                // Si la contraseña coincide, se asigna un token de autenticación
                return auth.asignarToken({...data})
            }else{
                // Si la contraseña no coincide, se lanza un error
                throw new Error('Informacion Invalidad')
            }
        })
    }

    // Función para agregar un nuevo registro de autenticación
    async function agregar(data){

        const authData={
            id: data.id,
        }

        if(data.usuario){
            authData.usuario = data.usuario
        }

        if(data.password){
            // Se utiliza bcrypt para hashear la contraseña antes de almacenarla
            authData.password = await bcrypt.hash( data.password.toString(),5);
        }
        
        return db.agregar(TABLA,authData);
    }
    
    return{
        agregar,
        login
    }

}
=======
const TABLA ='auth';
const auth = require('../../auth');
const bcrypt = require('bcrypt');

module.exports = function(dbInyectada){

    let db = dbInyectada;

    if(!db){
        db = require('../../DB/mysql');
    }
      
    async function login(usuario, password){
        const data = await db.query(TABLA, {usuario: usuario});

        return bcrypt.compare(password, data.password)
        .then(resultado =>{
            if(resultado ===true){

                return auth.asignarToken({...data})

            }else{
                throw new Error('Informacion Invalidad')
            }
        })
    }


    async function agregar(data){

        const authData={
            id: data.id,
        }

        if(data.usuario){
            authData.usuario = data.usuario
        }

        if(data.password){
            authData.password = await bcrypt.hash( data.password.toString(),5);
        }
        
        return db.agregar(TABLA,authData);
    }
    
    return{
        agregar,
        login
    }

    
}
>>>>>>> c2e7427057ffea9d09b8e5e22ef24f6556e16ed4
