const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    fastDelivery: { type: Boolean, required: true },
    inStock: { type: Boolean, required: true },
    offer: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);



