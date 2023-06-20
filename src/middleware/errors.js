<<<<<<< HEAD
function error( message, code){
    let e = new Error(message);

    if(code){
        e.statusCode=code;
    }
    return e;
}

=======
function error( message, code){
    let e = new Error(message);

    if(code){
        e.statusCode=code;
    }
    return e;
}

>>>>>>> c2e7427057ffea9d09b8e5e22ef24f6556e16ed4
module.exports = error;