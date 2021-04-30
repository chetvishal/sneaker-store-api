var express = require('express')
var router = express.Router();

var cart = []

router.route('/')
    .get((req, res) => {
        res.status(201).json({ success: true, cart })
    })
    .post((req, res) => {
        const { _id, qty } = req.body;
        const findItem = cart.find(item => item._id === _id);
        if (_id) {
            if (findItem) {
                return res.status(400).json({ success: false, message: "item already exists" })
            }
            cart.push({ _id, qty })
            return res.status(201).json({ success: true, item: { _id, qty } });
        }
        return res.status(400).json({ success: false, message: "undefined id" });
    })
    .patch((req, res) => {
        const { _id, qty } = req.body;
        const findItem = cart.find(item => item._id === _id)
        if (findItem) {
            cart.map(item => item._id == _id ? item.qty = qty : null);
            return res.status(201).json({ success: true, item: { _id, qty } });
        }
        res.status(404).json({ success: false, message: "item not found" })
    })
    .delete((req, res) => {
        const { _id } = req.body;
        const findItem = cart.find(item => item._id === _id)
        if (findItem) {
            cart = cart.filter(item => item._id !== _id);
            return res.status(201).json({ success: true, item: { _id } });
        }
        res.status(404).json({ success: false, message: "item not found" })
    })

module.exports = router;