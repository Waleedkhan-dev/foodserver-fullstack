import { Router } from 'express';
import {
  AddToCart,
  decreaseQuantity,
  increateQuantity,
  removeItem,
} from '../controllers/cart.Controller';

const router = Router();

router.post('/add-to-cart', AddToCart);
router.put('/increase-quantity', increateQuantity);
router.put('/decrease-quantity', decreaseQuantity);
router.delete('/', removeItem);

export default router;
