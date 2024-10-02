
import { Request, Response } from 'express';
import { Category, ICategory } from '../models/Category';


export const createCategory = async (req: Request, res: Response) => {
  try {
    const newCategory = new Category(req.body);
    const category: ICategory = await newCategory.save();
    res.status(201).json(category);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(400).json({ message: 'Unknown error' });
    }
  }
};


export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories: ICategory[] = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
};

export const updateCategory = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const { id } = req.params;
      const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedCategory) {
        return res.status(404).json({ success: false, message: "Category not found" });
      }
      return res.status(200).json({ success: true, data: updatedCategory });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ success: false, message: error.message });
      } else {
        return res.status(500).json({ success: false, message: 'Unknown error' });
      }
    }
  };
  

  export const deleteCategory = async (req: Request, res: Response): Promise<Response | void> => {
    try {
      const { id } = req.params;
      const deletedCategory = await Category.findByIdAndDelete(id);
      if (!deletedCategory) {
        return res.status(404).json({ success: false, message: "Category not found" });
      }
      return res.status(200).json({ success: true, message: "Category deleted successfully" });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ success: false, message: error.message });
          } else {
            return res.status(500).json({ success: false, message: 'Unknown error' });
          }
    }
  };
