const router = require('express').Router();
const categoryController = require('../Controllers/category.controller');

router.get("/", categoryController.getCategory);
router.post("/add", categoryController.createCategory)

module.exports = router;