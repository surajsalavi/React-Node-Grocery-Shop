const User = require('../models/user_model')

const createUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body, role: 'Customer' })
    return res.status(201).json({ user })
  } catch (err) {
    res.status(500).send('error occured')
  }
  res.send('create user route')
}

module.exports = {
  createUser,
}
