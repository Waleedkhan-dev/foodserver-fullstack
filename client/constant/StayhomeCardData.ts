import { Package, Truck, FileText, Headphones, Award, Box } from 'lucide-react';

interface DeliveryDataType {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const DeliveryData: DeliveryDataType[] = [
  {
    icon: Package,
    title: 'Best prices & offers',
    description: 'Orders $50 or more',
  },
  {
    icon: Truck,
    title: 'Free delivery',
    description: '24/7 amazing services',
  },
  {
    icon: FileText,
    title: 'Great daily deal',
    description: 'When you sign up',
  },
  {
    icon: Box,
    title: 'Wide assortment',
    description: 'Mega Discounts',
  },
  {
    icon: Award,
    title: 'Easy returns',
    description: 'Within 30 days',
  },
];
