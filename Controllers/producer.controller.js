const createError = require('http-errors');

const Producer = require('../Models/producer.model');

const producerController = {
	getProducer: async (req, res, next) => {
		try {
			const producers = await Producer.find();
			res
				.status(200)
				.json({
					status: '200',
					message: 'Get all producer successfully',
					data: producers,
				});
		} catch (error) {
			next(error);
		}
	},

	createProducer: async (req, res, next) => {
		try {
			const isExist = await Producer.findOne({ name: req.body.name });
			if (isExist) {
				throw createError.Conflict(`${req.body.name} is exist`);
			}

			const newProducer = new Producer(req.body);
			await newProducer.save();

			res.status(200).json({
				statusCode: '201',
				message: 'New producer successfully insert',
			});
		} catch (error) {
			next(error);
		}
	},
};

module.exports = producerController;
