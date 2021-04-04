const express = require('express');
const router = express.Router();

const {
    getAllProduct,
    getProductById
} = require('../controller/productController')

// @desc    GET all product from DB
// @route   GET /api/product
// @access  Public
router.get('/',getAllProduct);

// @desc    GET product by id from DB
// @route   GET /api/product/:id
// @access  Public
router.get('/:id',getProductById);

// @desc    Store product to DB
// @route   POST /api/product/store
// @access  Private
router.get('/store',(req,res)=>{

});

module.exports = router;
