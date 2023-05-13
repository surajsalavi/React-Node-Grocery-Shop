const Category = require('../models/category_model')

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    if (categories) res.json(categories)
  } catch (err) {
    console.log(err)
    res.status(500).send()
  }
}

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body)
    if (category) res.json(category)
  } catch (err) {
    console.log(err)
    res.status(500).send()
  }
}

const updateCategory = async (req, res) => {
  try {
    const result = await Category.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    )
    res.json(result)
  } catch (err) {
    res.status(500).send()
  }
}

const deleteCategory = async (req, res) => {
  const category_id = req.params.id
  try {
    const result = await Category.deleteOne({ _id: category_id })
    res.json(result)
  } catch (err) {
    res.status(500).send()
  }
}
module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
}
