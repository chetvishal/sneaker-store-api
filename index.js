const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const products = require('./routes/express.products.js');
const cart = require('./routes/express.cart.js');
const wishlist = require('./routes/express.wishlist.js');


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ success: true, message: "KICKS API" });
});

app.use('/products', products);
app.use('/cart', cart);
app.use('/wishlist', wishlist);
app.use((req, res) => {
    res.status(404).json({ success: false, message: "No such route defined" })
})
app.use(((err, req, res, next) => {
    res.status(500).json({ success: false, message: err })
}))

app.listen(PORT, () => {
    console.log('SERVER STARTED');
});