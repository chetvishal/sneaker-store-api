const express = require('express')
const router = express.Router();
const Cart = require('../models/cart-model.js');
const { authVerification } = require('../middlewares/authVerification');

router.use(authVerification)

router.route('/:userId')
    .get(async (req, res) => {
        try {
            const { userId } = req.params;
            const response = await Cart.findOne({ userId }).populate('products._id')
            if (response) {
                res.status(201).json({ success: true, cart: response })
            }
            else {
                res.status(201).json({ success: true, cart: { userId, products: [] } })
            }
        } catch (err) {
            res.status(500).json({ success: false, message: "failed to fetch cart items." })
        }
    })


router.route('/')

    .post(async (req, res) => {
        try {
            const { userId, _id, quantity } = req.body;
            const response = await Cart.findOne({ userId })
            if (response) {
                response.products.push({ _id, quantity: quantity })
                await response.save()
                res.status(201).json({ success: true, message: "successfully updated database" })
            }
            else {
                const newItem = new Cart({
                    userId, products: [{
                        _id, quantity: 1
                    }]
                })
                await newItem.save()
                res.status(201).json({ success: true, message: "successfully updated database" })
            }
        } catch (err) {
            console.log("error: ", err)
            res.status(500).json({ success: false, message: "failed to uplaod data", err: err });
        }
    })
    .patch(async (req, res) => {

        try {
            const { userId, _id, quantity } = req.body;
            const findItem = await Cart.findOne({ userId });
            for (let item of findItem.products) {
                if (item._id == _id) {
                    item.quantity = quantity
                }
            }
            await findItem.save()
            res.status(200).json({ success: true, item: { _id, quantity } })
        } catch (err) {
            res.status(500).json({ success: false, message: "failed to upload data" })
        }
    })
    .delete(async (req, res) => {
        try {
            const { userId, _id } = req.body;
            const findItem = await Cart.findOne({ userId });

            findItem.products.pull({ _id })
            await findItem.save()
            res.status(200).json({ success: true, message: "resource deleted successfully" })
        } catch (err) {
            res.status(500).json({ success: false, message: "failed to upload data" })
        }
    })

module.exports = router;