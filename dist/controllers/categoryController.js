"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.getAllCategories = exports.createCategory = void 0;
const Category_1 = require("../models/Category");
const createCategory = async (req, res) => {
    try {
        const newCategory = new Category_1.Category(req.body);
        const category = await newCategory.save();
        res.status(201).json(category);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        }
        else {
            res.status(400).json({ message: 'Unknown error' });
        }
    }
};
exports.createCategory = createCategory;
const getAllCategories = async (req, res) => {
    try {
        const categories = await Category_1.Category.find();
        res.status(200).json(categories);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        }
        else {
            res.status(500).json({ message: 'Unknown error' });
        }
    }
};
exports.getAllCategories = getAllCategories;
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCategory = await Category_1.Category.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }
        return res.status(200).json({ success: true, data: updatedCategory });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ success: false, message: error.message });
        }
        else {
            return res.status(500).json({ success: false, message: 'Unknown error' });
        }
    }
};
exports.updateCategory = updateCategory;
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category_1.Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }
        return res.status(200).json({ success: true, message: "Category deleted successfully" });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ success: false, message: error.message });
        }
        else {
            return res.status(500).json({ success: false, message: 'Unknown error' });
        }
    }
};
exports.deleteCategory = deleteCategory;
