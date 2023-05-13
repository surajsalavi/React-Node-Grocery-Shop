const express = require('express')
const router = express.Router()
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products_controller')

router.route('/').post(createProduct)
router.route('/').get(getAllProducts)
router.route('/:id').patch(updateProduct)
router.route('/:id').delete(deleteProduct)

module.exports = router
