import { StaticImageData } from 'next/image';
import product1 from '../public/product/product1.png';
import product2 from '../public/product/product2.png';
import product3 from '../public/product/product3.png';
import product4 from '../public/product/product4.png';
import product5 from '../public/product/product5.png';
import product6 from '../public/product/product6.png';
import product7 from '../public/product/product7.png';
import product8 from '../public/product/product8.png';
import product9 from '../public/product/product9.png';

export interface ProductType {
  id?: number;
  title: string;
  image?: StaticImageData;
  category?: string;
  brand?: string;
  flavor?: string;
  dietType?: string;
  weight?: string;
  specialty?: string;
  info?: string;
  itemForm?: string;
  rating?: number | string;
  oldPrice?: number;
  newPrice?: number | undefined;
  badge?: string;
  descriptionShort?: string;
  colors?: string[];
  sizes?: string[];
  gallery?: StaticImageData[];
  tags?: string[];
  categoryFilter?: string;
  sold?: number;
  quantity?: number;
  Review?: string;
  sizesAvailable?: string[];
  description?: string;
  isInStock?: boolean;
}

export const products: ProductType[] = [
  {
    id: 1,
    Review:
      'I recently purchased this product and I’m honestly very impressed with its quality. The packaging was neat, the delivery was on time, and the product itself looks even better than the pictures. The material feels durable and premium, and it performs exactly as described. I’ve been using it for a few weeks now, and it has definitely exceeded my expectations. I highly recommend this to anyone who’s looking for a reliable and affordable option. Will surely buy again!',
    title: 'Crispy Chicken Burger',
    image: product1,
    category: 'Snacks',
    brand: 'EI Paso',
    flavor: 'Spicy',
    dietType: 'Non-Veg',
    weight: '350g',
    specialty: 'Fresh & Crispy',
    info: 'Made fresh with premium chicken',
    itemForm: 'Ready-to-eat',
    rating: 4.7,
    oldPrice: 780,
    newPrice: 640,
    badge: 'Hot',
    descriptionShort: 'Crispy chicken burger with spicy mayo & cheese.',
    colors: ['#D32F2F', '#212121', '#FF9800'],
    sizes: ['Small', 'Regular', 'Large'],
    gallery: [product2, product3, product4],
    tags: ['top-selling', 'trending'],
    sizesAvailable: ['250ml', '500ml', '1L', '2L'],
    isInStock: true,
  },

  {
    id: 2,
    title: 'Fresh Veggie Wrap',
    image: product2,
    category: 'Vegetables',
    brand: 'Green Choice',
    flavor: 'Herb & Mint',
    dietType: 'Veg',
    weight: '300g',
    specialty: 'Low Calories',
    info: 'Fresh vegetables with mint sauce',
    itemForm: 'Ready-to-eat',
    rating: 4.3,
    oldPrice: 550,
    newPrice: 430,
    badge: 'New',
    descriptionShort: 'Healthy veggie wrap with organic greens & mint flavor.',
    colors: ['#4CAF50', '#795548', '#9E9E9E'],
    sizes: ['Regular'],
    gallery: [product1, product3, product4],
    tags: ['recent', 'top-rated'],
    Review:
      'I recently purchased this product and I’m honestly very impressed with its quality. The packaging was neat, the delivery was on time, and the product itself looks even better than the pictures. The material feels durable and premium, and it performs exactly as described. I’ve been using it for a few weeks now, and it has definitely exceeded my expectations. I highly recommend this to anyone who’s looking for a reliable and affordable option. Will surely buy again!',
    sizesAvailable: ['250ml', '500ml', '1L', '2L'],
    isInStock: true,
  },

  {
    id: 3,
    title: 'Premium Cold Coffee',
    image: product3,
    category: 'Coffee',
    brand: 'BrewCo',
    flavor: 'Mocha',
    dietType: 'Veg',
    weight: '500ml',
    specialty: 'Rich Caffeine',
    info: 'Premium cold brew coffee',
    itemForm: 'Liquid',
    rating: 4.9,
    oldPrice: 450,
    newPrice: 380,
    isInStock: true,
    badge: 'Best Sale',
    descriptionShort: 'Rich cold coffee with mocha & milk foam.',
    colors: ['#3E2723', '#795548', '#D7CCC8'],
    sizes: ['250ml', '500ml', '1L'],
    gallery: [product1, product2, product4],
    tags: ['best', 'top-selling'],
    Review:
      'I recently purchased this product and I’m honestly very impressed with its quality. The packaging was neat, the delivery was on time, and the product itself looks even better than the pictures. The material feels durable and premium, and it performs exactly as described. I’ve been using it for a few weeks now, and it has definitely exceeded my expectations. I highly recommend this to anyone who’s looking for a reliable and affordable option. Will surely buy again!',
  },
  {
    id: 4,
    title: 'Crispy Chicken Burger d',
    image: product5,
    category: 'Milks & Dairies',
    brand: 'EI Paso',
    flavor: 'Spicy',
    dietType: 'Non-Veg',
    weight: '350g',
    specialty: 'Fresh & Crispy',
    info: 'Made fresh with premium chicken',
    itemForm: 'Ready-to-eat',
    rating: 4.7,
    oldPrice: 780,
    newPrice: 640,
    badge: 'Hot',
    isInStock: true,
    descriptionShort: 'Crispy chicken burger with spicy mayo & cheese.',
    colors: ['#D32F2F', '#212121', '#FF9800'],
    sizes: ['Small', 'Regular', 'Large'],
    gallery: [product2, product3, product4],
    tags: ['top-selling', 'trending'],
    Review:
      'I recently purchased this product and I’m honestly very impressed with its quality. The packaging was neat, the delivery was on time, and the product itself looks even better than the pictures. The material feels durable and premium, and it performs exactly as described. I’ve been using it for a few weeks now, and it has definitely exceeded my expectations. I highly recommend this to anyone who’s looking for a reliable and affordable option. Will surely buy again!',
    sizesAvailable: ['250ml', '500ml', '1L', '2L'],
  },

  {
    id: 5,
    title: 'Fresh Veggie Wrap',
    image: product9,
    category: 'Vegetables',
    brand: 'Green Choice',
    flavor: 'Herb & Mint',
    dietType: 'Veg',
    weight: '300g',
    specialty: 'Low Calories',
    info: 'Fresh vegetables with mint sauce',
    itemForm: 'Ready-to-eat',
    rating: 4.3,
    oldPrice: 550,
    newPrice: 430,
    isInStock: true,
    badge: 'New',
    descriptionShort: 'Healthy veggie wrap with organic greens & mint flavor.',
    colors: ['#4CAF50', '#795548', '#9E9E9E'],
    sizes: ['Regular'],
    gallery: [product1, product3, product8],
    tags: ['recent', 'top-rated'],
    sizesAvailable: ['250ml', '500ml', '1L', '2L'],
    Review:
      'I recently purchased this product and I’m honestly very impressed with its quality. The packaging was neat, the delivery was on time, and the product itself looks even better than the pictures. The material feels durable and premium, and it performs exactly as described. I’ve been using it for a few weeks now, and it has definitely exceeded my expectations. I highly recommend this to anyone who’s looking for a reliable and affordable option. Will surely buy again!',
  },

  {
    id: 6,
    title: 'Premium Cold Coffee',
    image: product3,
    category: 'Coffee & Teas',
    brand: 'BrewCo',
    flavor: 'Mocha',
    dietType: 'Veg',
    weight: '500ml',
    specialty: 'Rich Caffeine',
    info: 'Premium cold brew coffee',
    itemForm: 'Liquid',
    rating: 4.9,
    oldPrice: 450,
    newPrice: 380,
    isInStock: true,
    badge: 'Best Sale',
    descriptionShort: 'Rich cold coffee with mocha & milk foam.',
    colors: ['#3E2723', '#795548', '#D7CCC8'],
    sizes: ['250ml', '500ml', '1L'],
    gallery: [product1, product2, product4],
    tags: ['best', 'top-selling'],
    sizesAvailable: ['250ml', '500ml', '1L', '2L'],
    Review:
      'I recently purchased this product and I’m honestly very impressed with its quality. The packaging was neat, the delivery was on time, and the product itself looks even better than the pictures. The material feels durable and premium, and it performs exactly as described. I’ve been using it for a few weeks now, and it has definitely exceeded my expectations. I highly recommend this to anyone who’s looking for a reliable and affordable option. Will surely buy again!',
  },
  {
    id: 7,
    title: 'Premium Cold Coffee',
    image: product6,
    category: 'Coffee & Teas',
    brand: 'BrewCo',
    flavor: 'Mocha',
    dietType: 'Veg',
    weight: '500ml',
    specialty: 'Rich Caffeine',
    info: 'Premium cold brew coffee',
    itemForm: 'Liquid',
    rating: 4.9,
    oldPrice: 450,
    newPrice: 380,
    sold: 90 / 120,
    badge: 'Best Sale',
    descriptionShort: 'Rich cold coffee with mocha & milk foam.',
    colors: ['#3E2723', '#795548', '#D7CCC8'],
    sizes: ['250ml', '500ml', '1L'],
    gallery: [product1, product2, product4],
    tags: ['best', 'top-selling'],
    Review:
      'I recently purchased this product and I’m honestly very impressed with its quality. The packaging was neat, the delivery was on time, and the product itself looks even better than the pictures. The material feels durable and premium, and it performs exactly as described. I’ve been using it for a few weeks now, and it has definitely exceeded my expectations. I highly recommend this to anyone who’s looking for a reliable and affordable option. Will surely buy again!',
    sizesAvailable: ['250ml', '500ml', '1L', '2L'],
    isInStock: true,
  },
  // {
  //   id: '8',
  //   title: 'Premium Cold Coffee',
  //   image: product7,
  //   category: 'Coffee & Teas',
  //   brand: 'BrewCo',
  //   flavor: 'Mocha',
  //   dietType: 'Veg',
  //   weight: '500ml',
  //   specialty: 'Rich Caffeine',
  //   info: 'Premium cold brew coffee',
  //   itemForm: 'Liquid',
  //   rating: 4.9,
  //   oldPrice: 450,
  //   newPrice: 380,
  //   sold: 90 / 120,
  //   badge: 'Best Sale',
  //   descriptionShort: 'Rich cold coffee with mocha & milk foam.',
  //   colors: ['#3E2723', '#795548', '#D7CCC8'],
  //   sizes: ['250ml', '500ml', '1L'],
  //   gallery: [product1, product2, product4],
  //   tags: ['best', 'top-selling'],
  // },
  {
    id: 9,
    title: 'Premium Cold Coffee',
    image: product7,
    category: 'Coffee & Teas',
    brand: 'BrewCo',
    flavor: 'Mocha',
    dietType: 'Veg',
    weight: '500ml',
    specialty: 'Rich Caffeine',
    info: 'Premium cold brew coffee',
    itemForm: 'Liquid',
    rating: 4.9,
    oldPrice: 450,
    sold: 90 / 120,
    newPrice: 380,
    badge: 'Best Sale',
    descriptionShort: 'Rich cold coffee with mocha & milk foam.',
    colors: ['#3E2723', '#795548', '#D7CCC8'],
    sizes: ['250ml', '500ml', '1L'],
    gallery: [product1, product2, product4],
    tags: ['best', 'top-selling'],
    sizesAvailable: ['250ml', '500ml', '1L', '2L'],
  },
  {
    id: 10,
    title: 'Premium Cold Coffee',
    image: product9,
    category: 'Coffee & Teas',
    brand: 'BrewCo',
    flavor: 'Mocha',
    dietType: 'Veg',
    weight: '500ml',
    specialty: 'Rich Caffeine',
    info: 'Premium cold brew coffee',
    itemForm: 'Liquid',
    rating: 4.9,
    oldPrice: 450,
    sold: 90 / 120,
    newPrice: 380,
    badge: 'Best Sale',
    isInStock: true,
    descriptionShort: 'Rich cold coffee with mocha & milk foam.',
    colors: ['#3E2723', '#795548', '#D7CCC8'],
    sizes: ['250ml', '500ml', '1L'],
    gallery: [product1, product2, product4],
    tags: ['best', 'top-selling'],
    sizesAvailable: ['250ml', '500ml', '1L', '2L'],
  },
  {
    id: 11,
    title: 'Premium Cold Coffee',
    image: product7,
    sold: 90 / 120,
    category: 'Coffee & Teas',
    brand: 'BrewCo',
    flavor: 'Mocha',
    dietType: 'Veg',
    weight: '500ml',
    specialty: 'Rich Caffeine',
    info: 'Premium cold brew coffee',
    itemForm: 'Liquid',
    rating: 4.9,
    oldPrice: 450,
    newPrice: 380,
    badge: 'Best Sale',
    isInStock: true,
    descriptionShort: 'Rich cold coffee with mocha & milk foam.',
    colors: ['#3E2723', '#795548', '#D7CCC8'],
    sizes: ['250ml', '500ml', '1L'],
    gallery: [product1, product2, product4],
    tags: ['best', 'top-selling'],
    sizesAvailable: ['250ml', '500ml', '1L', '2L'],
  },
];
