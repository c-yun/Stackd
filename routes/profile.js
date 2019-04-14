const express = require('express');
const router = express.Router();
const User = require('../models/user');
require('dotenv').config();


// POST an article that the user bookmarked 

router.post()





// router.post('/:userId/uploads', (req, res) => {
//    User.findById(req.params.userId).then((user, err) => {
//      let newUpload = new Upload({
//        publicId: req.body.publicId,
//        cloudColors: req.body.cloudColors,
//        colorRec: req.body.colorRec,
//        date: req.body.date,
//      });
//      newUpload.save((err, upload) => {
//        user.uploads.push(upload);
//        user.save((err, user) => {
//          res.status(201).json(user);
//        });
//      });
//    });
//  });






// GET all the articles that the user bookmarked 



// GET ONE of the articles that the user bookmarked 



// Delete an article that the user bookmarked 




module.exports = router; 