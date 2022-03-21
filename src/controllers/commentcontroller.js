const express = require("express");
const router = express.Router();
const Comment = require("../models/comment");

router.post("",async(req,res)=>{
    const comment = await Comment.create(req.body);
    res.send({comment})
})
module.exports = router;