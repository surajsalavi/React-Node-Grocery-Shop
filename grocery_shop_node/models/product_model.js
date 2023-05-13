const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: [true, 'must provide product name'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'must provide price'],
  },
  category_id: {
    type: String,
    required: [true, 'must provide category id'],
  },
})

module.exports = mongoose.model('Products', ProductSchema)
