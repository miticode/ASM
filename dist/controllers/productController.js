"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.createProduct = void 0;
const Product_1 = require("../models/Product");
const createProduct = async (req, res) => {
    try {
        const newProduct = new Product_1.Product(req.body);
        const product = await newProduct.save();
        res.status(201).json(product);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.createProduct = createProduct;
const getAllProducts = async (req, res) => {
    try {
        const products = await Product_1.Product.find().populate('category');
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getAllProducts = getAllProducts;
