const rootRouter = require('express').Router()
const productRoute = require('./product.route')
const categoryRoute = require('./category.route')
const producerRoute = require('./producer.route')
const userRoute = require('./user.route')

rootRouter.use('/product', productRoute)
rootRouter.use('/category', categoryRoute)
rootRouter.use('/producer', producerRoute)

rootRouter.use('/user', userRoute)

module.exports = rootRouter
