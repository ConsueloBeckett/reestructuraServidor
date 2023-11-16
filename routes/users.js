const express = require('express')
const routes = express.Router()
const usersController = require("../controllers/usersController.js")

//controladores 
routes.get("/", usersController.getAllUsers)
routes.post("/", usersController.createUser)

module.exports = routes