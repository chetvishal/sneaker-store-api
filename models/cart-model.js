const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    qty: {type : Number, required: true}
});

module.exports = mongoose.model('Cart', CartSchema);