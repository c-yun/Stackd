const express = require('express');
const router = express.Router();
const Article = require("../models/article")
const User = require('../models/user');
// import axios from "axios"
require('dotenv').config();

// POST 
router.post("/:userId/articles", (req, res) => {
   User.findById(req.params.userId).then((user, err) => {
      Article.create({
         title: req.body.title,  
         author: req.body.author,
         url: req.body.url,
         userId: req.body.userId
      }, (err,article) => {
         User.findById(req.body.userId, (err, user) => {
            user.articles.push(article);
            user.save((err, user) => {
               res.status(201).json(user);
            })
         })
      });
   })
})

// GET ALL 
router.get("/:userId/articles", (req, res) => {
   console.log("hiting the route for the profile bookmarks")
   User.findById(req.params.userId)
      .populate("articles")
      .exec((err, user) => {
         if (err){
            return res.status(500).send(err);
         } else {
            console.log("========\n",user.articles,"========\n")
            res.json(user.articles);
         }
      })
})

// GET ONE
// router.get("/:userId/articles/:id", (req, res) => {
//    User.findById(req.params.userId)
//    .populate("articles")
//    .exec((err, user) => {
//    err? console.log(err) : res.json(article)
//    })
// })

// GET ONE of the articles that the user bookmarked 
// router.get('profile/:userId/article/:id', (req,res) => {
// 	Article.findOne({_id: req.params.id})
// 		.populate('plots')
// 		.exec( (err, article) => {
// 		err? console.log(err) : res.json(article)
// 	})
// })

// DELETE
router.delete("/:userId/articles/:id", (req, res) => {
   console.log("start of delete rout");
   Article.findOneAndDelete({_id: req.params.id}, (err, article) =>{
      User.findById(req.params.userId, (err, user) => {
         if(err){
            throw err;
         } else {
            console.log("working")
            user.update({ $pull: {articles: {_id: req.params.id} } })
            res.status(200).json({ message: "delete complete. article was deleted" })
         };
      });
   });
});


module.exports = router; 