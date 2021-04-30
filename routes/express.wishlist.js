var express = require('express')
var router = express.Router();

var wishlist = []

router.route('/')
    .get((req, res) => {
        res.status(201).json({ success: true, wishlist })
    })
    .post((req, res) => {
        const { _id } = req.body;
        const findItem = wishlist.find(item => item._id === _id);
        if (findItem) {
            return res.status(400).json({ success: false, message: "item already exists" })
        }
        wishlist.push({ _id })
        res.status(201).json({ success: true, item: { _id } });
    })
    .delete((req, res) => {
        const { _id } = req.body;
        const findItem = wishlist.find(item => item._id === _id)
        if (findItem) {
            wishlist = wishlist.filter(item => item._id !== _id);
            return res.status(201).json({ success: true, item: { _id } });
        }
        res.status(404).json({ success: false, message: "item not found" })
    })

module.exports = router;