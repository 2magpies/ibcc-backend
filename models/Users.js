const mongoose = require('../db/connection');

const UsersSchema = new mongoose.Schema({
  name: String,
  email: String
});

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;
