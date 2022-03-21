const { default: mongoose } = require("mongoose")

const connect = () =>{
    try{
        return mongoose.connect(
          "mongodb+srv://rutuja:rutuja3562@cluster0.orwkt.mongodb.net/evl3?retryWrites=true&w=majority"
        );
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connect;