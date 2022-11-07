const models = require('../db/models');
const _product = models.Products;
const { Router } = require('express');
const router = Router();
const _asyncWrapper = require('../middlewares/async')
const { _createCustomError } = require('../errors/custom-error');

const getAllProducts = _asyncWrapper(async (req, res) => {
    const products = await _product.findAll();
    return res.status(200).json(products);
}); 
 
const getProduct = async (req, res) => {
    return res.json({Msg: "getProduct"})
}

const createProduct = async (req, res) => {
   
    const product = await _product.create(req.body);
    return res.status(200).json(product);
}

const updateProduct = async (req, res) => {
    return res.json({Msg: "updateProduct"})
}

const deleteProduct = async (req, res) => {
    return res.json({Msg: "deleteProduct"})
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};