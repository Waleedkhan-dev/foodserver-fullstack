import { ProductType } from '@/constant/products';
import { addToCart } from '@/redux/feature/cartSlice';
// import { RootState } from '@/redux/store';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';
import { PiStarFill } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
const ProductCard = ({ data }: { data: ProductType }) => {
  const dispatch = useDispatch();
  // const cartItems = useSelector((state: RootState) => state.cart.items);
  const handleAddToCart = () => {
    dispatch(addToCart(data));
    toast.success('Product added to cart');
  };

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

  return (
    <div className='border border-gray-50 rounded-2xl p-4   transition-all duration-300 relative bg-white'>
      <span
        className={`${getBadgeColor(
          data?.badge
        )} text-white text-xs font-semibold px-3 py-1 rounded-tl-xl rounded-br-xl absolute top-0 left-0`}
      >
        {data?.badge}
      </span>

      <Link
        href={`/products/${data.id}`}
        className='flex items-center justify-center my-6 mt-8'
      >
        {data.image && (
          <div className='h-[200px] w-[200px]'>
            <Image
              src={data.image}
              width={200}
              height={200}
              alt='product'
              className='w-full h-full object-contain'
            />
          </div>
        )}
      </Link>

      <p className='text-gray-400 text-xs mb-1'>{data.category}</p>

      <h3 className='text-gray-800 font-semibold text-sm mb-2 h-10 line-clamp-2'>
        {data.title}
      </h3>

      <div className='flex items-center gap-1 mb-3'>
        <span>
          <PiStarFill className='text-yellow-400' />
        </span>

        <span className='text-gray-400 text-xs ml-1'>({data.rating})</span>
      </div>

      <p className='text-gray-400 text-xs mb-3'>
        By <span className='text-green-500'>{data.brand}</span>
      </p>

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span className='text-green-500 font-bold text-lg'>
            ${data.newPrice}
          </span>
          <span className='text-gray-400 line-through text-sm'>
            ${data.oldPrice}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className='bg-red-500 cursor-pointer text-white font-semibold rounded-md px-3 py-2 text-sm  flex items-center gap-1 transition-all duration-300'
        >
          <ShoppingCart className='w-4 h-4' />
          Add
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
