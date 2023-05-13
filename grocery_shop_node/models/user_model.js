const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'maximum 20 characters allowed'],
  },
  email: {
    type: String,
    required: [true, 'must provide email'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'must provide password'],
    trim: true,
  },
  role: {
    type: String,
    required: [true, 'please provide role'],
    enum: ['Admin', 'Customer'],
    trim: true,
  },
})

module.exports = mongoose.model('Users', UserSchema)
