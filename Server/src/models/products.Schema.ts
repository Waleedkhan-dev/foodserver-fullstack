import mongoose, { Schema, model, HydratedDocument } from 'mongoose';

export interface IProduct {
  review: string;
  title: string;
  image?: string;
  category?: string;
  brand?: string;
  flavor?: string;
  dietType?: string;
  weight?: string;
  specialty?: string;
  info?: string;
  itemForm?: string;
  rating?: number;
  oldPrice?: number;
  newPrice?: number;
  badge?: string;
  descriptionShort?: string;
  colors?: string[];
  sizes?: string[];
  gallery?: string[];
  tags?: string[];
  sizesAvailable?: string[];
  isInStock?: boolean;
}
export type ProductDocument = HydratedDocument<IProduct>;

const productsSchema = new Schema<IProduct>(
  {
    review: { type: String, required: true },
    title: { type: String, required: true, index: true },
    image: { type: String },
    category: { type: String },
    brand: { type: String },
    flavor: { type: String },
    dietType: { type: String },
    weight: { type: String },
    specialty: { type: String },
    info: { type: String },
    itemForm: { type: String },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    oldPrice: { type: Number },
    newPrice: { type: Number },
    badge: { type: String },
    descriptionShort: { type: String },
    colors: [{ type: String }],
    sizes: [{ type: String }],
    gallery: [{ type: String }],
    tags: [{ type: String }],
    sizesAvailable: [{ type: String }],
    isInStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform(doc, ret: any) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    toObject: { virtuals: true },
  }
);

productsSchema.index({ title: 'text', category: 1 });

const Product = model<IProduct>('Product', productsSchema);
export default Product;
