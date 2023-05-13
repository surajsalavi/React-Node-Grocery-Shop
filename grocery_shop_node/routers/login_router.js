const express = require('express')
const router = express.Router()

const { loginUser } = require('../controllers/login_controller')

router.route('/').post(loginUser)

module.exports = router
