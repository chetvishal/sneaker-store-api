const mongoose = require('mongoose');
const {Schema} = mongoose;

const WishlistSchema = new mongoose.Schema({
    _id: { type: Schema.Types.ObjectId, ref: "Product" }
});

module.exports = mongoose.model('Wishlist', WishlistSchema);