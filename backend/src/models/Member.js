const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: String,
  lastNames: String,
  idIest: Number,
  email: String,
  gen: Number,
  bachelor: String,
  profilePicture: String,
  attendance: Array,
  //attendance array with name event, attendacnce (yes/no) and points
});

module.exports = mongoose.model('Member', MemberSchema);
