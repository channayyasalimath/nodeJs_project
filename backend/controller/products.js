

const backend = require('../backend/products')({})
module.exports = (props) =>{
    return{
        getProducts,
        getProductById,
        getProductByCategoryId,
        saveProduct,
        updateProduct,
        deleteProduct
    }
}

function getProducts(req, res){
    
    const user = req.user;
    if(user.user_type == 'admin'){
        debugger
        backend.getProducts({}, function(response){

        
            res.send(response);
    });
    } else {
        res.send({message:'Access Forbidden'})
    }
}

function getProductById(req, res){
    let requestPayload= req.body
    let payload= {
        id:requestPayload.id
    }
    backend.getProductById(payload, function(options){
        res.send(options)
    })
}

function getProductByCategoryId(req, res){
    let requestPayload= req.body
    console.log(requestPayload)
    let payload= {
        id:requestPayload.categoryId
    }
    console.log("payload", payload)
    backend.getProductByCategoryId(payload, function(options){
        res.send(options)
    })
}

function saveProduct(req, res){
    let rqPayload=req.body
    let payload= rqPayload
    backend.saveProduct(payload, function(options){
        res.send(options)
    })
}

function updateProduct(req, res){
    let rqPayload=req.body
    let payload= rqPayload
    backend.updateProduct(payload, function(options){
        res.send(options)
    })
}

function deleteProduct(req, res){
    let rqPayload=req.body
    let payload= rqPayload
    backend.deleteProduct(payload, function(options){
        res.send(options)
    })
}