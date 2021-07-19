const express = require('express')
const router = express.Router();
const Wishlist = require('../models/wishlist-model.js');
const { authVerification } = require('../middlewares/authVerification');

router.use(authVerification)


router.route('/:userId')
    .get(async (req, res) => {
        try {
            const { userId } = req.params;
            const response = await Wishlist.findOne({ userId }).populate("products._id")
            if (response) {
                res.status(200).json({ success: true, wishlist: response })
            }
            else {
                res.status(200).json({ success: true, wishlist: { userId, products: [] } })
            }
        } catch (err) {
            console.log("err: ", err)
            res.status(500).json({ success: false, message: "failed to fetch wishlist" })
        }
    })

router.route('/')
    .post(async (req, res) => {
        try {
            const { _id, userId } = req.body;

            const response = await Wishlist.findOne({ userId })
            if (response) {
                response.products.push({ _id })
                await response.save()
                res.status(201).json({ success: true, message: "successfully updated database" });
            } else {
                const newItem = new Wishlist({
                    userId, products: [{ _id }]
                })
                await newItem.save()
                res.status(201).json({ success: true, message: "successfully updated database" });
            }

        } catch (err) {
            console.log("err: ", err);
            res.status(500).json({ success: false, message: "failed to upload wishlist item" })
        }
    })
    .delete(async (req, res) => {
        
        try {
            const { _id, userId } = req.body;
            const findItem = await Wishlist.findOne({ userId });
            findItem.products.pull({ _id })
            await findItem.save()
            res.status(200).json({ success: true, message: "successfully updated database" })
        } catch (err) {
            res.status(500).json({ success: false, message: "failed to upload data" })
        }
    })

module.exports = router;