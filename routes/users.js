import  express from "express"
import  usersController from "../controllers/usersController.js"

const routes = express.Router()

//controladores 
routes.get("/", usersController.getAllUsers)
routes.post("/", usersController.createUser)

export default routes