const router = require('express').Router();
const producerController = require('../Controllers/producer.controller');

router.get("/", producerController.getProducer);
router.post("/add", producerController.createProducer)

module.exports = router;