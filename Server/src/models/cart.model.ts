import mongoose from 'mongoose';
import { ProductType } from '../type/product';

export interface ICartItem {
  product: ProductType;
  quantity: number;
}
export interface ICart {
  userId: string;
  items: ICartItem[];
}

const productSchema = new mongoose.Schema<ProductType>({
  id: Number,
  Review: String,
  title: String,
  image: String,
  category: String,
  brand: String,
  flavor: String,
  dietType: String,
  weight: String,
  specialty: String,
  info: String,
  itemForm: String,
  rating: Number,
  oldPrice: Number,
  newPrice: Number,
  badge: String,
  descriptionShort: String,
  colors: [String],
  sizes: [String],
  gallery: [String],
  tags: [String],
  isInStock: Boolean,
  sizesAvailable: [String],
});

const cartShema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    items: [
      {
        product: productSchema,
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<ICart>('Cart', cartShema);
