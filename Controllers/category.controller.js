const createError = require('http-errors');

const Category = require('../Models/category.model');

const categoryController = {
	getCategory: async (req, res, next) => {
		try {
			const categories = await Category.find();
			res
				.status(200)
				.json({
					status: 200,
					message: 'Get all category successfully',
					data: categories,
				});
		} catch (error) {
			next(error);
		}
	},

	createCategory: async (req, res, next) => {
		try {
			const isExist = await Category.findOne({ name: req.body.name });
			if (isExist) {
				throw createError.Conflict(`${req.body.name} is exist`);
			}

			const newCategory = new Category(req.body);
			await newCategory.save();

			res.status(200).json({
				status: 201,
				message: 'New category successfully insert',
			});
		} catch (error) {
			next(error);
		}
	},
};

module.exports = categoryController;
