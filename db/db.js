const mongoose = require('mongoose');
const mongoPassword = process.env['MONGO_PASSWORD']

async function dbConnect() {

    await mongoose.connect(
        `mongodb+srv://admin:${mongoPassword}@neog-cluster.yuntr.mongodb.net/ecommerce`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
        .then(() => console.log('Successfully connected to mongoDB'))
        .catch(err => console.log("Error connecting to mongoDB: ", err))
}

module.exports = { dbConnect }