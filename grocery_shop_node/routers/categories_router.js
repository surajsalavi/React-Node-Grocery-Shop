const express = require('express')
const router = express.Router()
const {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categories_controller')

router.route('/').post(createCategory)
router.route('/').get(getAllCategories)
router.route('/:id').patch(updateCategory)
router.route('/:id').delete(deleteCategory)

module.exports = router
