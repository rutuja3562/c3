const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: true,
    },
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Comment = mongoose.model("book", commentSchema);
module.exports = Comment;
