const mongoose = require('mongoose');

async function dbConnect() {

    await mongoose.connect(
        `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@neog-cluster.yuntr.mongodb.net/ecommerce`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
        .then(() => console.log('Successfully connected to mongoDB'))
        .catch(err => console.log("Error connecting to mongoDB: ", err))
}

module.exports = { dbConnect }