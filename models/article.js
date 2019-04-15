const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
   userId: String,
   Title: String, 
   Author: String, 
   url: String, 
});

module.exports = mongoose.model('Article', articleSchema);