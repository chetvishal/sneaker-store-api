var express = require('express')
var router = express.Router();
const Product = require('../models/products-model.js');

router.route('/')
    .get(async (req, res) => {
        try {
            const products = await Product.find({});
            res.json({ success: true, products })
        } catch (err) {
            console.log("Error: ", err)
            res.status(500).json({ success: false, message: "failed to fetch products" });
        }
    })

module.exports = router;