const express = require("express");
const router = express.Router();

const productRouter = require('./product');

router.get('/', (req, res, next) =>{
    res.json({msg: 'Hello World!'});
});

router.use('/products', productRouter);

module.exports = router;


