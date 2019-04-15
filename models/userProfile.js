const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
   date: Date, 
   articleId: String,
   comments: String,
   profilePic: String,
});

module.exports = mongoose.model('Profile', userProfileSchema);
