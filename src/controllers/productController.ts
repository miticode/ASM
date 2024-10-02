// src/controllers/productController.ts
import { Request, Response } from 'express';
import { Product, IProduct } from '../models/Product';


export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product(req.body);
    const product: IProduct = await newProduct.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};


export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products: IProduct[] = await Product.find().populate('category');
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};


