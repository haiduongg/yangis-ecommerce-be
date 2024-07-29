const router = require('express').Router();
const productController = require('../Controllers/product.controller');

router.get("/", productController.getProduct);
router.get("/:id", productController.getOneProduct);
router.post("/add", productController.createProduct)
router.delete("/:id", productController.deleteProduct)
router.put("/:id", productController.updateProduct)

module.exports = router;