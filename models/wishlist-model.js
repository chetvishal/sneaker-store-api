const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishListItemSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }
})

const WishlistSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: "User Id is required"
    },
    products: [wishListItemSchema]
});

module.exports = mongoose.model('Wishlist', WishlistSchema);