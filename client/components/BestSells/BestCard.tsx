'use client';
import { ProductType } from '@/constant/products';
import { addToCart } from '@/redux/feature/cartSlice';

import Image from 'next/image';
import Link from 'next/link';
import { PiStarFill } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Fragment } from 'react/jsx-runtime';

const BestCard = ({ data }: { data: ProductType }) => {
  const dispatch = useDispatch();
  const getBadgeColor = (badge: string | undefined) => {
    switch (badge) {
      case 'Sale':
        return 'bg-pink-500';
      case 'Best':
        return 'bg-blue-400';
      case 'Hot':
        return 'bg-red-500';
      case '-14%':
        return 'bg-orange-400';
      default:
        return 'bg-green-500';
    }
  };

  const handleAddToCart = (data: ProductType) => {
    dispatch(addToCart(data));
    toast.success('Product added to cart');
  };
  return (
    <Fragment>
      <div className='border border-gray-50 rounded-2xl p-4   transition-all duration-300 relative bg-white'>
        <span
          className={`${getBadgeColor(
            data?.badge
          )} text-white text-xs font-semibold px-3 py-1 rounded-tl-xl rounded-br-xl absolute top-0 left-0`}
        >
          {data?.badge}
        </span>

        <div className='flex items-center justify-center my-6 mt-8'>
          {data.image && (
            <Link href={`/products/${data.id}`} className='h-[200px] w-[200px]'>
              <Image
                src={data.image}
                width={200}
                height={200}
                alt='product'
                className='w-full h-full object-contain'
              />
            </Link>
          )}
        </div>

        <p className='text-gray-400 text-xs mb-1'>{data.category}</p>

        <h3 className='text-gray-800 font-semibold text-sm mb-2 h-10 line-clamp-2'>
          {data.title}
        </h3>

        <div className='flex items-center gap-1 mb-3'>
          <span>
            <PiStarFill className='text-yellow-400' />
          </span>
          {data.rating}
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span className='text-green-500 font-bold text-lg'>
              ${data.newPrice}
            </span>
            <span className='text-gray-400 line-through text-sm'>
              ${data.oldPrice}
            </span>
          </div>
        </div>
        <p className='text-gray-400 text-xs mb-3'>
          Sold<span className='text-gray-500'>{data.sold}</span>
        </p>
        <div>
          <div className='w-full bg-gray-200 rounded-full h-2 mb-4'>
            <div className='bg-red-500 h-2 rounded-full w-[60%]'></div>
          </div>
        </div>

        <button
          onClick={() => handleAddToCart(data)}
          className='bg-red-500 cursor-pointer items-center w-full text-white font-semibold rounded-md px-3 py-2 text-sm  flex justify-center text-center gap-1 transition-all duration-300'
        >
          Add
        </button>
      </div>
    </Fragment>
  );
};
export default BestCard;
