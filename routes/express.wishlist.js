var express = require('express')
var router = express.Router();
const Wishlist = require('../models/wishlist-model.js');

var wishlist = []

router.route('/')
    .get(async (req, res) => {
        try {
            await Wishlist.find({})
                .then(resp => res.status(201).json({success: true, wishlist: resp}))
                .catch(err => res.status(201).json({ success: false, message: "failed to fetch resources" }))
        } catch (err) {
            console.log("err: ", err)
            res.status(404).json({ success: false, message: "failed to fetch wishlist" })
        }
    })
    .post(async (req, res) => {
        try {
            const { _id } = req.body;
            
            const NewItem = new Wishlist({ _id })
            await NewItem.save()
                .then(data => {
                    console.log("data after adding to wishlist: ", data)
                    res.status(201).json({ success: true, item: { _id } })
                })
                .catch(err => {
                    console.log(err)
                    res.status(404).json({ success: false, message: "failed to upload wishlist item" })
                })
        } catch (err) {
            console.log("err: ", err);
            res.status(404).json({ success: false, message: "failed to upload wishlist item" })
        }
    })
    .delete(async (req, res) => {
        try {
            const { _id } = req.body;

            await Wishlist.deleteOne({ _id })
                .then(() => res.status(202).json({ success: true, message: `item: ${_id} successfully deleted.` }))
                .catch(err => res.status(404).json({ success: false, message: "failed in deleting item" }))

        } catch (err) {
            console.log(err);
            res.status(404).json({ success: false, message: "failed to remove item from wishlist" })
        }
    })

module.exports = router;