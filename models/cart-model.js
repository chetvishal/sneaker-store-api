const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartItemSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true
    }
})

const CartSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    products: [CartItemSchema]
});

module.exports = mongoose.model('Cart', CartSchema);