const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProducerSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		logo: {
			type: String,
			require: true,
		},
		description: {
			type: String,
		},
		products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Producer', ProducerSchema);
