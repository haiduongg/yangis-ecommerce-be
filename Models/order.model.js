const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema(
    {
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
        totalAmount: { type: Number, required: true },
        shippingFee: { type: Number, required: true },
        bonusPoints: {
            type: Number,
        },
        deliveryInformation: {
            fullName: { type: String, required: true },
            address: [
                {
                    provice: { type: String, required: true },
                    district: { type: String, required: true },
                    commune: { type: String, required: true },
                    addressDetail: String,
                },
            ],
            phoneNumber: { type: String, required: true },
            email: { type: String, required: true },
        },
        paymentMethod: {
            enum: ['bank', 'cash'],
            default: 'cash',
        },
        coupon: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' }],
    },
    { timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)
