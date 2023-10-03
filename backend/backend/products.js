const connection= require('../mysqlHandler');
module.exports=(props) =>{
    console.log(props.name)
    return{
        getProducts,
        getProductById,
        getProductByCategoryId,
        saveProduct,
        updateProduct,
        deleteProduct
    }
}

function getProducts(payload, callback){
   
    connection.query('Select * from products', function(err, response){
        console.log("test")
        if(err){
            let options = {
                status: 500,
                response : null,
                error: err
            }
            callback(options) 
        } else {
            let options = {
                status: 200,
                response : response,
                error: null
            }
            callback(options) 
        }
        
    })
}

function getProductById(payload, callback){
    let sqlStmt =`Select * from products where id= "${payload.id}"`
    connection.query(sqlStmt, function(err, response){
        if(!err){
            let options= {status:200, err:null, response:response}
            callback(options)
        }else{
            let options= {status:500, err:err, response:null}
            callback(options)
        }
    })
}

function getProductByCategoryId(payload, callback){
    console.log(payload)
    let sqlStmt =`Select * from products where category_id= "${payload.id}"`
    connection.query(sqlStmt, function(err, response){
        if(!err){
            let options= {status:200, err:null, response:response}
            callback(options)
        }else{
            let options= {status:500, err:err, response:null}
            callback(options)
        }
    })
}

function saveProduct(payload, callback){
    let sqlStmt =`INSERT INTO products(product_name, product_description, quantity, product_price) VALUES("${payload.productName}", "${payload.product_description}", "${payload.quantity}", "${payload.product_price}")`
    connection.query(sqlStmt, function(err, response){
        if(!err){
            let options= {status:200, err:null, response:response}
            callback(options)
        }else{
            let options= {status:500, err:err, response:null}
            callback(options)
        }
    })
}

function updateProduct(payload, callback){
    let sqlStmt =`UPDATE products SET product_name="${payload.product_name}", product_description="${payload.product_description}",  quantity="${payload.quantity}", product_price="${payload.product_price}",updated_at= now() where id= "${payload.id}"`
    console.log(sqlStmt)

    connection.query(sqlStmt, function(err, response){
        if(!err){
            let options= {status:200, err:null, response:response}
            callback(options)
        }else{
            let options= {status:500, err:err, response:null}
            callback(options)
        }
    })
}

function deleteProduct(payload, callback){
    let sqlStmt =`DELETE from products where id= "${payload.id}"`
    console.log(sqlStmt)

    connection.query(sqlStmt, function(err, response){
        if(!err){
            let options= {status:200, err:null, response:response}
            callback(options)
        }else{
            let options= {status:500, err:err, response:null}
            callback(options)
        }
    })
}