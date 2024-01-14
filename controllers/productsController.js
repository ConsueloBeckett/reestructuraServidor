const  products = []

//obtener products 
function getAllProducts(req, res){
    res.json(products)
}

//crear products
function createProduct(req, res){
    const newProducts = req.body
    products.push(newProducts)
    res.status(201).json(newProducts)
}

//exportacion desde routes 
export default {
    getAllProducts,
    createProduct
}