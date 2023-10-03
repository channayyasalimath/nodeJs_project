
const backend = require('../backend/index')({})




function indexController (props){

return {
    indexRender,
    getProducts
};
}

function indexRender(req, res){
    res.send("Hi Channayya...")
}

function getProducts(req, res){
    backend.backendGetProducts({}, function(response){
        res.send(response)
    })
}

module.exports = indexController;