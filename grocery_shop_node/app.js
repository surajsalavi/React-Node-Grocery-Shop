const express = require('express')
const app = express()
const { connect_to_mongodb } = require('./db/connect')
const usersRouter = require('./routers/users_router')
const loginRouter = require('./routers/login_router')
const categoriesRouter = require('./routers/categories_router')
const productsRouter = require('./routers/products_router')

const cors = require('cors')

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use(express.json())
app.use(cors())

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/login', loginRouter)
app.use('/api/v1/categories', categoriesRouter)
app.use('/api/v1/products', productsRouter)

const start = async () => {
  try {
    await connect_to_mongodb()
    app.listen(5000, (success) => {
      console.log('server started on port 5000')
    })
  } catch (err) {
    console.log(err)
  }
}
start()
