const express = require("express");
const router = express.Router();
const Book = require("../models/comment");

router.post("", async (req, res) => {
  const book = await Book.create(req.body);
  res.send({ Book });
});
module.exports =router