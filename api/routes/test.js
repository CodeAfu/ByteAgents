
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        request: "GET"
    });
});

router.post('/', (req, res, next) => {
    const object = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        request: "POST",
        createdObject: object
    });
});

module.exports = router;