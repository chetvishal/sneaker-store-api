const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const { dbConnect } = require('./db/db');
const products = require('./routes/express.products.js');
const cart = require('./routes/express.cart.js');
const wishlist = require('./routes/express.wishlist.js');
const login = require('./routes/express.login.js');
const signup = require('./routes/express.signup.js');
const payments = require('./routes/express.payments.js');

app.use(express.json());
app.use(cors());
dbConnect();

app.get('/', (req, res) => {
    res.json({ success: true, message: "KICKS API" });
});

app.use('/products', products);

app.use('/cart', cart);

app.use('/wishlist', wishlist);

app.use('/login', login);

app.use('/signup', signup);

app.use('/payments', payments)

app.use((req, res) => {
    res.status(404).json({ success: false, message: "No such route defined" })
})

app.use(((err, req, res, next) => {
    res.status(500).json({ success: false, message: err })
}))

// app.listen(PORT, () => {
//     console.log('SERVER STARTED');
// });

module.exports = app;
