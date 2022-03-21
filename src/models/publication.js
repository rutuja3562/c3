const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
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
const Publication = mongoose.model("book", publicationSchema);
module.exports = Publication;
