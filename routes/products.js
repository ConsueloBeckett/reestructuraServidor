const express = require('express')
const routes = express.Router()
const productsController = require("../controllers/productsController.js")

//controladores 
routes.get("/", productsController.getAllProducts)
routes.post("/", productsController.createProduct)

module.exports = routes