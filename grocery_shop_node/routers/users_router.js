const express = require('express')
const router = express.Router()
const { createUser } = require('../controllers/users_controller')

router.route('/').post(createUser)

module.exports = router
