const rootRouter = require('express').Router();
const productRoute = require('./product.route');
const categoryRoute = require('./category.route');
const producerRoute = require('./producer.route');

rootRouter.use("/product", productRoute)
rootRouter.use("/category", categoryRoute)
rootRouter.use("/producer", producerRoute)

module.exports = rootRouter