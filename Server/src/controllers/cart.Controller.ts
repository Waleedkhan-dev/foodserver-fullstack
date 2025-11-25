// import cart from '../models/cart.model';
import { Request, Response } from 'express';
import { ProductType } from '../type/product';
import cartModel from '../models/cart.model';

const AddToCart = async (req: Request, res: Response) => {
  const { userId, product }: { userId: string; product: ProductType } =
    req.body;

  let cart = await cartModel.findOne({ userId });
  if (!cart) {
    cart = new cartModel({ userId, items: [{ product, quantity: 1 }] });
  } else {
    const existingItem = cart.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ product, quantity: 1 });
    }
  }
  await cart.save();
  res.json({ success: true, message: 'Product added to cart successfully' });
};

const increateQuantity = async (req: Request, res: Response) => {
  const { userId, product } = req.body;
  console.log('productId', product);
  console.log('FULL BODY:', req.body);

  const cart = await cartModel.findOne({ userId });
  console.log('cart', cart);

  if (!cart) {
    return res.status(404).json({ message: 'cart Not found' });
  }
  console.log('cart', cart);
  // console.log(items);

  const item = cart.items?.find((item) => item.product.id === product.id);

  if (!item) {
    return res.status(404).json({ message: 'item not found' });
  }

  item.quantity += 1;

  await cart?.save();
  res.json({ success: true, message: 'Product quantity updated successfully' });
};

const decreaseQuantity = async (req: Request, res: Response) => {
  const { userId, product } = req.body;
  const cart = await cartModel.findOne({ userId });
  if (!cart) {
    return res.status(404).json({ message: 'cart Not found' });
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.product.id === product.id
  );
  if (itemIndex === -1) {
    return res.status(404).json({ message: 'item not found' });
  }
  const item = cart.items[itemIndex];
  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    cart.items.splice(itemIndex, 1);
  }
  await cart.save();
  res.json({
    success: true,
    message: 'Product quantity decrease',
  });
};

const removeItem = async (req: Request, res: Response) => {
  const { userId, product } = req.body;
  const cart = await cartModel.findOne({ userId });
  if (!cart) {
    return res.status(404).json({ message: 'cart not found' });
  }
  const itemIndex = cart.items.findIndex(
    (item) => item.product.id === product.id
  );

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'item not found' });
  }
  cart.items.splice(itemIndex, 1);
  await cart.save();
  res.json({
    success: true,
    message: 'Product removed from cart successfully',
  });
};

export { AddToCart, increateQuantity, decreaseQuantity, removeItem };
