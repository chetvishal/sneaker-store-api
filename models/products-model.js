const mongoose = require('mongoose');

// mongoose.connect(
//     'mongodb+srv://admin:babubhai123@neog-cluster.yuntr.mongodb.net/ecommerce',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// )
//     .then(() => console.log('Successfully connected to mongoDB'))
//     .catch(err => console.log("Error connecting to mongoDB: ", err))

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    fastDelivery: { type: Boolean, required: true },
    inStock: { type: Boolean, required: true },
    offer: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);



