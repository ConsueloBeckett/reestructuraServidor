import  express from "express"
import config from "../config.js"
import bodyParser from "body-parser"
const app = express()

const port = 8080
app.use(bodyParser.json())

//routes
import  productsRoutes from "../routes/products.js"
import  usersRoutes from "../routes/users.js"

app.use("/products", productsRoutes)
app.use("/users", usersRoutes)


//const connecion = MONGO_URL

//console.log(config)

app.listen(port, () => {
    console.log(`server runnig on port ${port}`)
})