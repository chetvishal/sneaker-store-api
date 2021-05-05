const mongoose = require('mongoose');

async function dbConnect() {

    await mongoose.connect(
        process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
        .then(() => console.log('Successfully connected to mongoDB'))
        .catch(err => console.log("Error connecting to mongoDB: ", err))
}

module.exports = { dbConnect }