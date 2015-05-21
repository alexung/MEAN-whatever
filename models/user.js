var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

var userSchema = new Schema({
  name: {type: String, required: "Please enter in your name"},
  email: {type: String, required: "Please enter in your email"},
  password: {type: String, required: "Please enter in your password"},
  created: {type: Date, default: Date.now}
});

var User = mongoose.model('User', userSchema);

module.exports = {
  User: User
};
