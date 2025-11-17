import { StaticImageData } from 'next/image';
import blogImage1 from '../public/hero/blog1.jpg';
import blogImage2 from '../public/hero/blog2.jpg';
import blogImage3 from '../public/hero/blog3.jpg';

interface BlogData {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  imageGallery: StaticImageData[];
  category: string;
  popularTag: string;
  author: string;
  date: string;
  excerpt: string;
}

// Dummy Data
export const blogPosts: BlogData[] = [
  {
    id: 1,
    title: 'Health Benefits of a Slim food',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: blogImage1,
    imageGallery: [blogImage2, blogImage3],
    category: 'Food',
    popularTag: 'Healthy',
    author: 'Admin',
    date: 'Feb 14, 2022',
    excerpt:
      'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Organic Cooking',
    description:
      'Discover the amazing benefits of cooking with organic ingredients and how it can transform your health and wellbeing.',
    image: blogImage1,
    imageGallery: [blogImage2, blogImage3],
    category: 'Recipe',
    popularTag: 'Organic',
    author: 'Chef John',
    date: 'Feb 20, 2022',
    excerpt:
      'Organic cooking brings a whole new dimension to your culinary experience with fresh ingredients.',
  },
];

export const recentPosts = [
  {
    image: blogImage1,
    title: 'How to prepare italian food',
    date: 'June 22, 2024',
  },
  {
    image: blogImage1,
    title: 'Fresh vegetables for your diet',
    date: 'June 20, 2024',
  },
  {
    image: blogImage3,
    title: 'Delicious breakfast recipes',
    date: 'June 18, 2024',
  },
  {
    image: blogImage2,
    title: 'Summer salad ideas',
    date: 'June 15, 2024',
  },
];

export const filterPhotos = [blogImage1, blogImage2, blogImage3];

export const popularTags = [
  'Healthy',
  'Food',
  'Recipe',
  'Organic',
  'Vegetarian',
  'Fast Food',
  'Diet',
  'Nutrition',
];
