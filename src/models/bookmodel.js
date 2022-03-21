const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    like:{type:String,default:"0"},
    coverImg:{type:String,require:true},
    content:{type:String,require:true},
    userId:{type:mongoose.Schema.Types.ObjectId,
    ref:"user",
required:true}

},{
    timestamps:true,
    versionKey:false
})
const Book=mongoose.model("book",bookSchema);
module.exports = Book;