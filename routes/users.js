const mongoose = require("mongoose");
const users = mongoose.model('users', {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})
module.exports = users;
