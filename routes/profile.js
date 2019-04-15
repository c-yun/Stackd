const express = require('express');
const router = express.Router();
const Article = require("../models/article")
const User = require('../models/user');
require('dotenv').config();



// POST an article that the user bookmarked 
router.post("profile/:userId/article", (req, res) => {
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
router.get('profile/:userId/article', (req, res) => {
	Article.find({}, (err, article) => {
		err? res.send(err) : res.json(gardens);
	})
})


// GET ONE of the articles that the user bookmarked 
router.get('profile/:userId/article/:id', (req,res) => {
	Article.findOne({_id: req.params.id})
		.populate('plots')
		.exec( (err, article) => {
		err? console.log(err) : res.json(article)
	})
})


// Delete an article that the user bookmarked 
router.delete('profile/:userId/article/:id', (req, res) => {
	Article.remove({_id: req.params.id}, (err) => {
		err ? res.send(err) : res.sendStatus(200);
	})
})



module.exports = router; 