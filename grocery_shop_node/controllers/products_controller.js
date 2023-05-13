const Product = require('../models/product_model')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    if (products) res.json(products)
  } catch (err) {
    console.log(err)
    res.status(500).send()
  }
}

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    if (product) res.json(product)
  } catch (err) {
    console.log(err)
    res.status(500).send()
  }
}

const updateProduct = async (req, res) => {
  try {
    const result = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    )
    res.json(result)
  } catch (err) {
    res.status(500).send()
  }
}

const deleteProduct = async (req, res) => {
  const product_id = req.params.id
  try {
    const result = await Product.deleteOne({ _id: product_id })
    res.json(result)
  } catch (err) {
    res.status(500).send()
  }
}
module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
}
