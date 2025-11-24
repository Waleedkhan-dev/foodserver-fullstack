export interface ProductType {
  id: number;
  Review: string;
  title: string;
  image: string;
  category: string;
  brand: string;
  flavor: string;
  dietType: string;
  weight: string;
  specialty: string;
  info: string;
  itemForm: string;
  rating: number;
  oldPrice: number;
  newPrice: number;
  badge: string;
  descriptionShort: string;
  colors: string[];
  sizes: string[];
  gallery: string[];
  tags: string[];
  sizesAvailable: string[];
  isInStock: boolean;
}
