import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getProductById,
  gettAllProducts,
  updateProduct,
} from '../controllers/product.controller';

const router = Router();

router.post('/', createProduct);
router.get('/', gettAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.delete('/', deleteProduct);

export default router;
