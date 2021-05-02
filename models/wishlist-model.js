const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
    _id: { type: String, required: true },
});

module.exports = mongoose.model('Wishlist', WishlistSchema);