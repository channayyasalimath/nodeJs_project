
const connection= require('../mysqlHandler');



module.exports= function(props){
    return{
        getCategories,
        saveCategory,
        deleteCategory,
        updateCategory
    }
}

function getCategories(payload, callback){
    connection.query('SELECT * FROM category', function(err, response){
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
         return(response)

    })
}

function saveCategory(payload, callback){
    let sqlStmt= `INSERT INTO category (category_name,narration) VALUES("${payload.categoryName}","${payload.narration}")`
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

function deleteCategory(payload, callback){
    let sqlStmt=`DELETE from category where id="${payload.id}"`
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

function updateCategory(payload, callback){
    let sqlStmt=`UPDATE category SET category_name ="${payload.categoryName}", narration ="${payload.narration}" where id="${payload.id}"`
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