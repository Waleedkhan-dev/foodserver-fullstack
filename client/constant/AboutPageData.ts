import { TfiLayoutLineSolid } from 'react-icons/tfi';

type StatType = {
  number: number;
  unit?: string;
  label: string;
};
type FeatureType = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export const stats: StatType[] = [
  { number: 0.1, unit: 'k', label: 'Venders' },
  { number: 23, unit: 'K', label: 'Customer' },
  { number: 2, unit: 'k', label: 'Products' },
];
export const features: FeatureType[] = [
  {
    icon: TfiLayoutLineSolid,
    title: 'Fast Delivery',
    description:
      'Get your orders delivered quickly and on time with our efficient delivery system.',
  },
  {
    icon: TfiLayoutLineSolid,
    title: 'Eco-Friendly Packaging',
    description:
      'We use 100% recyclable materials to protect the environment and reduce waste.',
  },
  {
    icon: TfiLayoutLineSolid,
    title: '24/7 Customer Support',
    description:
      'Our support team is always available to assist you with any questions or issues.',
  },
  {
    icon: TfiLayoutLineSolid,
    title: 'Secure Payments',
    description:
      'We ensure your transactions are safe and encrypted for maximum security.',
  },
];
