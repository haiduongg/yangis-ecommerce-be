const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default:
                'https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png',
        },
        reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
        role: {
            type: String,
            emum: ['admin', 'member'],
            default: 'member',
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
