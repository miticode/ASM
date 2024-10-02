
import { Router } from 'express';
import { createCategory, deleteCategory, getAllCategories, updateCategory } from '../controllers/categoryController';

const router = Router();

router.post('/', createCategory);
router.get('/', getAllCategories);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);
export default router;
