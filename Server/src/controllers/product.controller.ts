import { Request, Response } from 'express';
import Product from '../models/products.Schema';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
      message: 'Product created successfully',
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error creating product', error });
  }
};

export const gettAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json({
      success: true,
      status: 200,
      message: 'Products fetched successfully',
      products,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error fetching products', error });
  }
};
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log('product id:', product);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ success: true, product });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error fetching product', error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json({ success: true, product, message: 'Product updated successfully' });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json({ success: true, message: 'Product deleted successfully' });
};
export const deleteAllProducts = async (req: Request, res: Response) => {
  try {
    const deletedProducts = await Product.deleteMany({});
    res.json({ message: 'All products deleted successfully', success: true });
  } catch (error) {}
};
