const db = require('../../DB/mysql');

const TABLA ='productos';

function todos(){
    return db.todos(TABLA);
}

module.exports={
    todos,
}