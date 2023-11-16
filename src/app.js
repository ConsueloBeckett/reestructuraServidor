const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const port = 8080
app.use(bodyParser.json())

//routes
const productsRoutes = require("../routes/products")
const usersRoutes = require("../routes/users")

app.use("/products", productsRoutes)
app.use("/users", usersRoutes)








app.listen(port, () => {
    console.log(`server runnig on port ${port}`)
})