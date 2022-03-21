const express = require("express");

const app = express();

const connect = require("./configs/db.js")
const userController = require("./controllers/user.controller");
const bookController = require("./controllers/bookcontroller");
const commentController = require("./controllers/commentcontroller");
const { register, login } = require("./controllers/authcontroller");
app.use("/registers",register);
app.use("/login",login);
app.post("/users", userController);
app.post("/comment", commentController);
app.post("/book", bookController);




app.listen(5000, async(res,req)=>{
try{
  await connect();  
  console.log("listening on port 5000")
}
catch(err){
    console.log(err)
}
})