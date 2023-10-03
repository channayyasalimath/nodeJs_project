const connection= require('../mysqlHandler');
const md5= require("md5");

module.exports= function(props){
    return{
        saveUser,
        getUserByEmail,
        userByCredentials
    }
}

function saveUser(payload, callback){
    // let hashPassword= md5(payload.password);
    let sqlStmt= `INSERT INTO users (full_name,email,password,phone) VALUES("${payload.fullName}","${payload.email}","${md5(payload.password)}","${payload.phone}")`
    connection.query(sqlStmt, function(err, response){
        if(!err){
            let options= {
                status: 200,
                response,
                error:null
            }
            callback(options)
        }else{
            let options= {
                status: 500,
                response: null,
                error: err
            }
            callback(options)
        }
    });
}

function getUserByEmail(payload, callback){
    // let hashPassword= md5(payload.password);
    let sqlStmt= `Select email from users where email= "${payload.email}"`
    connection.query(sqlStmt, function(err, response){
        if(!err){
            let options= {
                status: 200,
                response,
                error:null
            }
            callback(options)
        }else{
            let options= {
                status: 500,
                response: null,
                error: err
            }
            callback(options)
        }
    });
}

function userByCredentials(payload, callback){
    let sqlStmt= `Select id, full_name, email, phone from users where email= "${payload.email}" and password= "${md5(payload.password)}"`;
    connection.query(sqlStmt, function(err, response){
        if(!err){
            let options= {
                status: 200,
                response,
                error:null
            }
            callback(options)
        }else{
            let options= {
                status: 500,
                response: null,
                error: err
            }
            callback(options)
        }
    });
}