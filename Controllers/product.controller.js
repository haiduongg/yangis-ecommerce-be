const createError = require('http-errors');

const Product = require('../Models/product.model');
const Category = require('../Models/category.model');

const productController = {
  getProduct: async (req, res, next) => {
    try {
      const { name, order, sort, content, page } = req.query;

      let products;
      let totalProduct = 0;
      let totalPage = 1;

      // Search by name
      if (name) {
        products = await Product.find({ name: { $regex: name } });
        totalProduct = products.length;

        return res.status(200).json({
          status: 200,
          message: 'Get products by name successfully',
          data: { totalProduct, products },
        });
      }

      // Pagination
      if (page && content) {
        products = await Product.find()
          .limit(content)
          .skip(content * page - content);

        totalProduct = products.length;
        totalPage = Math.round(totalProduct / content) ?? 1;

        return res.status(200).json({
          status: 200,
          message: 'Get products successfully',
          data: { totalProduct, totalPage, products },
        });
      }

      // Sort
      if (order) {
        // Default is ASC
        if (sort !== 'DESC') {
          products = await Product.find().sort(-order);
        } else {
          products = await Product.find().sort(order);
        }
        totalProduct = products.length;

        res.status(200).json({
          status: 200,
          message: 'Get products successfully',
          data: { totalProduct, products },
        });
      }

      products = await Product.find();
      totalProduct = products.length;
      res.status(200).json({
        status: 200,
        message: 'Get all product successfully',
        data: { totalProduct, products },
      });
    } catch (error) {
      next(error);
    }
  },
  getOneProduct: async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json({
        status: 200,
        message: 'Get a product successfully',
        data: product,
      });
    } catch (error) {
      next(error);
    }
  },
  createProduct: async (req, res, next) => {
    try {
      const isExist = await Product.findOne({ name: req.body.name });
      if (isExist) {
        throw createError.Conflict(`${req.body.name} is exist in inventory`);
      }

      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();

      if (req.body.category_id) {
        const category = await Category.findById(req.body.category_id);
        await category.updateOne({ $push: { products: savedProduct._id } });
      }
      res.status(200).json({
        status: 201,
        message: 'New product successfully insert',
      });
    } catch (error) {
      next(error);
    }
  },

  deleteProduct: async (req, res, next) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);

      if (!product) {
        throw createError.NotFound(`Product not found`);
      }

      res.json({ status: 200, message: 'Product successfully delete' });
    } catch (error) {
      next(error);
    }
    ``;
  },

  updateProduct: async (req, res, next) => {
    try {
      const product = await Product.updateOne({ _id: req.params.id }, req.body);

      if (!product) {
        throw createError.NotFound(`Product not found`);
      }

      res.json({ status: 200, message: 'Product successfully updated' });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = productController;
