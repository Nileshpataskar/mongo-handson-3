const { addProduct, fetchProducts } = require("../controller/product")

const product_route=require("express").Router()

product_route.post('/addprod',addProduct)
product_route.get('/showprod',fetchProducts)

module.exports = product_route