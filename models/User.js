
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  profilePicture: { type: String }, // URL of the profile picture
});
const User = mongoose.model('User', userSchema);
module.exports = User;