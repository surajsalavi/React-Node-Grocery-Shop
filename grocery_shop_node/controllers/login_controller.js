const User = require('../models/user_model')

const loginUser = async (req, res) => {
  //   res.json(req.body)
  const email = req.body.email
  const password = req.body.password
  try {
    const user = await User.findOne({
      email: email,
      password: password,
      isActive: true,
    })
    if (user) res.json(user)
    else res.send('Invalid Credentials')
  } catch (err) {
    console.log(err)
    res.status(500).send()
  }
}

module.exports = { loginUser }
