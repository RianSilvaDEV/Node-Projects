const Product = require('../db/models');
const _asyncWrapper = require('../middlewares/async')
const { _createCustomError } = require('../errors/custom-error');

const getAllProducts = _asyncWrapper(async (req, res) => {
    
}); 
 
const getProduct = async (req, res) => {
    
}

const createProduct = async (req, res) => {
    
}

const updateProduct = async (req, res) => {
    
}

const deleteProduct = async (req, res) => {
    
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};