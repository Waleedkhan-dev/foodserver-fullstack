'use client';

import Image from 'next/image';
import { IoBagHandleOutline } from 'react-icons/io5';
import { PiStarFill } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/feature/cartSlice';
import { toast } from 'react-toastify';
import { ProductType } from '@/constant/products';
import Link from 'next/link';

interface Props {
  product: ProductType;
}

const ProductSingleCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success('Product added to cart');
  };

  return (
    <div className='relative border border-gray-100 rounded p-5 bg-white '>
      <Link
        href={`/products/${product.id}`}
        className='flex items-center cursor-pointer relative justify-center border border-gray-50 rounded h-[180px] mb-4 overflow-hidden'
      >
        {product.image && (
          <Image
            src={product.image}
            alt='product'
            width={200}
            height={200}
            className='object-contain h-[150px] w-[150px] '
          />
        )}

        <div
          className='absolute z-50  -bottom-4 right-1/3 p-2 rounded-full border  border-gray-100 cursor-pointer bg-green-600 hover:bg-gray-100 transition'
          onClick={handleAddToCart}
        >
          <IoBagHandleOutline className='text-gray-700 text-lg' />
        </div>
      </Link>

      <div className='text-center flex flex-col items-center'>
        <p className='text-gray-400 text-xs mb-1 capitalize'>
          {product.category}
        </p>

        <div className='flex items-center gap-1 mb-2'>
          {[...Array(3)].map((_, i) => (
            <PiStarFill key={i} className='text-yellow-400 text-sm' />
          ))}
          <span className='text-gray-500 text-xs'>({product.rating})</span>
        </div>

        <h3 className='text-gray-800 font-semibold text-sm mb-3 h-10 line-clamp-2'>
          {product.title}
        </h3>

        <div className='flex items-center gap-2'>
          <span className='text-red-500 font-bold text-base'>
            ${product.newPrice}
          </span>
          <span className='text-gray-400 line-through text-xs'>
            ${product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductSingleCard;
