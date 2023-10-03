const mysql= require("mysql")

const connection= mysql.createConnection({
    host:'localhost',
    username: 'roo',
    password: '',
    database: 'ecommerce',
    port:'3306'
})

connection.connect()

module.exports= connection;