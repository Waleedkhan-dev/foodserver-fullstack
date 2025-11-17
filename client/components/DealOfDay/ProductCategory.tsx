'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import { products } from '@/constant/products';
import { Star } from 'lucide-react';
import Link from 'next/link';

const ProductCategory = () => {
  const [activeTab, setActiveTab] = useState('Top Selling');

  const tabs = [
    'Top Selling',
    'Trending Products',
    'Recently added',
    'Top Rated',
  ];

  return (
    <Fragment>
      <div className='flex justify-between flex-wrap gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 border-b border-gray-200'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 sm:pb-4 text-xs sm:text-sm md:text-base font-medium transition-colors relative whitespace-nowrap ${
              activeTab === tab
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-green-600'></div>
            {tab}
            {activeTab === tab && (
              <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-green-600'></div>
            )}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6'>
        {products.map((product) => (
          <div
            key={product.id}
            className='flex gap-3 items-start  p-2 rounded-lg transition-colors'
          >
            <div className='shrink-0 bg-gray-50 w-20 h-20 sm:w-24 sm:h-24'>
              {product.image && (
                <Image
                  src={product.image}
                  alt='Product Image'
                  width={96}
                  height={96}
                  className='object-contain w-full h-full'
                />
              )}
            </div>

            <div className='flex-1 min-w-0'>
              <h3 className='text-xs sm:text-sm text-gray-900 mb-1 sm:mb-2 line-clamp-2 leading-snug'>
                {product.title}
              </h3>

              {product.rating && (
                <div className='flex items-center gap-1 mb-1 sm:mb-2'>
                  {/* <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${
                          i < Math.floor(product.rating)
                            ? 'text-orange-400 fill-current'
                            : 'text-gray-300 fill-current'
                        }`}
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                      </svg>
                    ))}
                  </div> */}
                  <Star size={14} className='text-yellow-400' />{' '}
                  {product.rating}
                </div>
              )}

              <Link
                href={`/products/${product.id}`}
                className='flex items-center gap-2'
              >
                <span className='text-sm sm:text-base font-semibold text-gray-900'>
                  ${product.newPrice}
                </span>
                {product.oldPrice && (
                  <span className='text-xs text-gray-400 line-through'>
                    ${product.oldPrice}
                  </span>
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductCategory;
