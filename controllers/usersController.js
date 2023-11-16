const  users = []

//obtener users 
function getAllUsers(req, res){
    res.json(users)
}

//crear users
function createUser(req, res){
    const newUser = req.body
   users.push(newUsers)
    res.status(201).json(newUser)
}

//exportacion desde routes 
module.exports={
    getAllUsers,
    createUser
}