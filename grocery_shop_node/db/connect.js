const mongoose = require('mongoose')
require('dotenv').config()

const connect_to_mongodb = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }) //it returns Promise
}

module.exports = {
  connect_to_mongodb,
}
