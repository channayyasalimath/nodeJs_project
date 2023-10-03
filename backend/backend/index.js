
const connection= require('../mysqlHandler');



module.exports= function(props){
    return{
        backendGetProducts,
    }
}

function backendGetProducts(payload, callback){
    connection.query('SELECT * FROM products', function(err, response){
        if (err) {
            let options= {
                status: 500,
                response: null,
                error: err
            }
            callback(options)

        } else{
            let options= {
                status: 200,
                response: response,
                error: null
            }
            callback(options)
        }
        

    })
}