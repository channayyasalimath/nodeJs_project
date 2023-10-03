const userController = require('../controller/user')({})
const categoryController = require('../controller/category')({})

const indexController = require('../controller/index')({})
const productController = require('../controller/products')({})

module.exports =function(router, expressApp){
    router.get('/', indexController.indexRender)
    router.get('/products', indexController.getProducts)

    router.get('/category/getall', categoryController.getCategories)
    router.post('/category/add', categoryController.saveCategory)
    router.post('/category/delete', categoryController.deleteCategory)
    router.post('/category/update', categoryController.updateCategory)
    
    router.get('/products/getall', userController.aunthenticateUser, productController.getProducts)
    router.post('/products/getbyid', userController.aunthenticateUser, productController.getProductById)
    router.post('/products/getbycid', userController.aunthenticateUser, productController.getProductByCategoryId)
    router.post('/products/save', userController.aunthenticateUser, productController.saveProduct)
    router.post('/products/update', userController.aunthenticateUser, productController.updateProduct)
    router.post('/products/delete', userController.aunthenticateUser, productController.deleteProduct)

    router.post('/users/email/exist', userController.doesEmailExist);    
    router.post('/users/save', userController.saveUser);
    router.post('/users/login', userController.processLogin);



    return router;
}


