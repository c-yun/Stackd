const express = require('express');
const router = express.Router();
const Article = require("../models/article")
const User = require('../models/user');
require('dotenv').config();



// POST an article that the user bookmarked 

router.post("profile/:userId/articles", (req, res) => {
   Article.create({
      Title: req.body.name,  
      Author: req.body.Author,
      url: req.body.url,
      userId: req.body.userId
   }, (err, article) =>{
      User.findById(req.body.userId, function(err, user){
         err ? res.send(err) :
         user.article.push(article._id)
         user.save();
         res.sendStatus(200)
      })
   })
})



// GET all the articles that the user bookmarked 




// GET ONE of the articles that the user bookmarked 




// Delete an article that the user bookmarked 




module.exports = router; 