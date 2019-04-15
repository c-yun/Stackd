const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
   title: String, 
   author: String, 
   url: String, 
   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Article', articleSchema);