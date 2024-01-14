import  express from "express"
import productsController from "../controllers/productsController.js"


const routes = express.Router()
//controladores 
routes.get("/", productsController.getAllProducts)
routes.post("/", productsController.createProduct)

export default routes