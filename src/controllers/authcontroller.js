const User = require("../models/usermodel")

const register = async(req,res)=>{
var user = await User.findOne({userId :req.params.email })
if(user){
res.send({massege:"email already exist"})
}

user = await User.create({email : req.body})
res.send({user})


}

const login =(req,res)=>{
    res.send("login")
}

module.exports ={register,login}