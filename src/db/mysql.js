<<<<<<< HEAD
const mysql = require('mysql');
const config = require('../config');

const dbconfig={
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;

function conMysql(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if(err){
            console.log('Error al conectar a la base de datos:', err);
            setTimeout(conMysql,200)
        }else{
            console.log('Conexión exitosa a la base de datos');
        }
    });

    conexion.on('error', err =>{
        console.log('Error al conectar a la base de datos:', err);
        if(err.code=='PROTOCOL_CONNECTION_LOST'){
            conMysql();
        }else{
            throw err;
        }
    });
}

conMysql();


 function todos(tabla){
    return new Promise( (resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla}`, (error,  result) =>{
            if(error) return reject(error);
            resolve(result);
        })
    });
 }

 function uno(tabla, id){
    return new Promise( (resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`, (error,  result) =>{
            if(error) return reject(error);
            resolve(result);
        })
    });
 }


function agregar(tabla, data){
    return new Promise( (resolve, reject)=>{
        conexion.query(`INSERT INTO ${tabla} SET ? ON DUPLICATE KEY UPDATE ?`, [data,data], (error,  result) =>{
            if(error) return reject(error);
            resolve(result);
        })
    });
 }


 function eliminar(tabla, data){
    return new Promise( (resolve, reject)=>{
        conexion.query(`DELETE FROM ${tabla} WHERE id = ? `, data.id, (error,  result) =>{
            if(error) return reject(error);
            resolve(result);
        })
    });
 }

 function query(tabla, consulta){
    return new Promise( (resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla} WHERE ? `, consulta, (error,  result) =>{
            if(error) return reject(error);
            resolve(result[0]);
        })
    });
 }

module.exports={
    todos,
    uno,
    agregar,
    eliminar,
    query
=======
const mysql = require('mysql');
const config = require('../config');

const dbconfig={
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;

function conMysql(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if(err){
            console.log('Error al conectar a la base de datos:', err);
            setTimeout(conMysql,200)
        }else{
            console.log('Conexión exitosa a la base de datos');
        }
    });

    conexion.on('error', err =>{
        console.log('Error al conectar a la base de datos:', err);
        if(err.code=='PROTOCOL_CONNECTION_LOST'){
            conMysql();
        }else{
            throw err;
        }
    });
}

conMysql();


 function todos(tabla){
    return new Promise( (resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla}`, (error,  result) =>{
            if(error) return reject(error);
            resolve(result);
        })
    });
 }

 function uno(tabla, id){
    return new Promise( (resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`, (error,  result) =>{
            if(error) return reject(error);
            resolve(result);
        })
    });
 }


function agregar(tabla, data){
    return new Promise( (resolve, reject)=>{
        conexion.query(`INSERT INTO ${tabla} SET ? ON DUPLICATE KEY UPDATE ?`, [data,data], (error,  result) =>{
            if(error) return reject(error);
            resolve(result);
        })
    });
 }


 function eliminar(tabla, data){
    return new Promise( (resolve, reject)=>{
        conexion.query(`DELETE FROM ${tabla} WHERE id = ? `, data.id, (error,  result) =>{
            if(error) return reject(error);
            resolve(result);
        })
    });
 }

 function query(tabla, consulta){
    return new Promise( (resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla} WHERE ? `, consulta, (error,  result) =>{
            if(error) return reject(error);
            resolve(result[0]);
        })
    });
 }

module.exports={
    todos,
    uno,
    agregar,
    eliminar,
    query
>>>>>>> c2e7427057ffea9d09b8e5e22ef24f6556e16ed4
}