const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: [true, 'must provide category name'],
    trim: true,
  },
})

module.exports = mongoose.model('Categories', CategorySchema)
