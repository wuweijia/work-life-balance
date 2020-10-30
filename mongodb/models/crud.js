const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
  name: 'string',
  age: { type: Number, min: 18, max: 65 },
});

var UserModel = mongoose.model('User', User);

module.exports = UserModel
