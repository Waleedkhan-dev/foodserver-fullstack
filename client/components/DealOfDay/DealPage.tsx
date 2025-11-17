'use client';
import { products, ProductType } from '@/constant/products';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react/jsx-runtime';
import ProductCategory from './ProductCategory';
import { PiStarFill } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/feature/cartSlice';
import { toast } from 'react-toastify';
const DealPage = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
    toast.success('Product added to cart');
  };
  return (
    <Fragment>
      <div className='w-[90%] mx-auto'>
        <div className='w-full bg-white py-8 px-4'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center mb-6'>
              <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
                Deals Of The Day
              </h1>
              <a
                href='#'
                className='text-green-600 hover:text-green-700 font-medium text-sm md:text-base flex items-center gap-1'
              >
                All Deals
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </a>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
              {products.slice(0, 4).map((product) => (
                <div key={product.id} className='group cursor-pointer'>
                  <div className='relative h-[370px] w-[280px] rounded-2xl  overflow-hidden '>
                    <div className='relative h-80 bg-linear-to-br rounded-2xl bg-gray-50'>
                      {product.image && (
                        <Image
                          src={product.image}
                          alt='product'
                          className='w-full h-full object-contain object-center'
                        />
                      )}

                      <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent'></div>
                    </div>

                    <div className='absolute w-[90%] mx-auto bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 shadow-lg'>
                      <h3 className='text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-10'>
                        {product.title}
                      </h3>

                      <div className='flex items-center gap-1 mb-3'>
                        <PiStarFill className='text-yellow-500' />
                        {product.rating}
                      </div>
                      <p className='text-xs text-gray-500 mb-1'>
                        By{' '}
                        <span className='text-green-400'>{product.brand}</span>
                      </p>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-baseline gap-2'>
                          <span className='text-xl font-bold text-green-500'>
                            ${product.newPrice}
                          </span>
                          <span className='text-sm text-gray-400 line-through'>
                            ${product.oldPrice}
                          </span>
                        </div>

                        <button
                          onClick={() => handleAddToCart(product)}
                          className='bg-[#F53E32] text-white cursor-pointer rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors duration-200 shadow-sm'
                        >
                          <ShoppingCart className='w-4 h-4' />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ProductCategory />
      </div>
    </Fragment>
  );
};

export default DealPage;
