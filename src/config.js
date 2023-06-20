<<<<<<< HEAD
require('dotenv').config();

module.exports={
    app: {
        port: process.env.PORT || 4000,
    },
    jwt:{
        secret: process.env.JET_SECRET || 'notaSecreta'
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DB || 'tienda',
    }
=======
require('dotenv').config();

module.exports={
    app: {
        port: process.env.PORT || 4000,
    },
    jwt:{
        secret: process.env.JET_SECRET || 'notaSecreta'
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DB || 'tienda',
    }
>>>>>>> c2e7427057ffea9d09b8e5e22ef24f6556e16ed4
}