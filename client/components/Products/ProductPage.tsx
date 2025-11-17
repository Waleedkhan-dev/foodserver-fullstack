'use client';

import { products } from '@/constant/products';
import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import ProductCard from './ProductCard';

interface ProductPageProps {
  filterSection: string[];
}

const ProductPage = () => {
  const [selected, setSelected] = useState('All');

  const filterSection: ProductPageProps['filterSection'] = [
    'All',
    'Milks & Dairies',
    'Coffes & Teas',
    'Pet Foods',
    'Meats',
    'Vegetables',
    'Fruits',
  ];

  const filteredProducts =
    selected === 'All'
      ? products
      : products.filter((product) => product.category === selected);

  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-8'>
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4'>
        <h1 className='text-2xl sm:text-3xl font-bold text-gray-800'>
          Popular Products
        </h1>

        <div className='flex items-center gap-3 sm:gap-6 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0'>
          {filterSection.map((category) => (
            <button
              onClick={() => setSelected(category)}
              key={category}
              className={`text-sm font-medium transition-all duration-300 relative pb-1 whitespace-nowrap
          ${
            selected === category
              ? 'text-green-500 cursor-pointer'
              : 'text-gray-600 cursor-pointer hover:text-green-500'
          }
        `}
            >
              {category}
              {selected === category && (
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-green-500'></span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        {filteredProducts.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
