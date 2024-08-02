const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		thumbnail: {
			type: String,
			required: true,
		},
		featureImage: [{ type: String }],
		selection: {
			type: Schema.Types.Mixed,
		},
		properties: {
			type: Schema.Types.Mixed,
		},
		price: {
			type: Number,
			required: true,
		},
		discount: {
			type: String,
		},
		category_id: {
			type: Schema.Types.ObjectId,
			ref: 'Category',
		},
		producer_id: {
			type: Schema.Types.ObjectId,
			ref: 'Supplier',
		},
		reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
