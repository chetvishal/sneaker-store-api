const express = require('express')
const router = express.Router();
const Cart = require('../models/cart-model.js');

router.route('/')
    .get(async (req, res) => {
        try {
            await Cart.find({})
                .then(resp => res.status(202).json({ success: true, cart: resp }))
                .catch(err => res.status(404).json({ success: false, message: "failed to fetch cart items." }))
        } catch (err) {
            res.status(404).json({ success: true, message: "failed to fetch cart items." })
        }
    })
    .post(async (req, res) => {
        const { _id, qty } = req.body;

        try {
            const NewItem = new Cart({ _id, qty })
            await NewItem.save()
                .then(resp => res.status(201).json({ success: true, message: `successfully uploaded data${resp}` }))
                .catch(err => res.status(404).json({ success: false, message: "failed to upload data" }))
        } catch (err) {
            res.status(404).json({ success: false, message: "failed to upload data" })
        }
    })
    .patch(async (req, res) => {
        const { _id, qty } = req.body;

        try {
            const Item = await Cart.findOne({ _id });
            Item.overwrite({ qty });
            await Item.save()
                .then(resp => res.status(201).json({ success: true, message: `successfully updated data ${resp}` }))
                .catch(err => res.status(404).json({ success: false, message: "failed to update data" }))
        } catch (err) {
            res.status(404).json({ success: false, message: "failed to upload data" })
        }
    })
    .delete(async (req, res) => {
        const { _id } = req.body;

        try {
            await Cart.deleteOne({ _id })
                .then(resp => res.status(201).json({ success: true, message: `successfully deleted data ${resp}` }))
                .catch(err => res.status(404).json({ success: false, message: "failed to delete item." }))

        } catch (err) {
            res.status(404).json({ success: false, message: "failed to remove cart item." })
        }
    })

module.exports = router;