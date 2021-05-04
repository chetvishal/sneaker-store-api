const mongoose = require('mongoose');
const {Schema} = mongoose;

const CartSchema = new mongoose.Schema({
    _id: { type: Schema.Types.ObjectId, ref: "Product" },
    qty: {type : Number, required: true}
});

module.exports = mongoose.model('Cart', CartSchema);