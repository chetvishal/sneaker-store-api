const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://admin:babubhai123@neog-cluster.yuntr.mongodb.net/ecommerce',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => console.log('Successfully connected to mongoDB'))
    .catch(err => console.log("Error connecting to mongoDB: ", err))

const WishlistSchema = new mongoose.Schema({
    _id: { type: String, required: true },
});

module.exports = mongoose.model('Wishlist', WishlistSchema);