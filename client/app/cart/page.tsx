'use client';

import { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '@/redux/feature/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';
import SectionHeader from '@/components/common/Breadcrumb';
import ProductSingleCard from '../products/ProductSingleCard';
import { products } from '@/constant/products';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const route = useRouter();
  console.log('items', items);

  const dispatch = useDispatch();

  const subtotal = items.reduce((acc, item) => {
    const price = parseFloat(item.newPrice);
    return acc + price * item.quantity;
  }, 0);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
    toast.success('Product removed from cart');
  };

  const handleIncrease = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuantity(id));
  };
  const handleCheckout = () => {
    route.push('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className='min-h-screen bg-white py-12'>
        <div className='container mx-auto px-4'>
          <div className='text-center py-20'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              Your cart is empty
            </h2>
            <Link
              href='/products'
              className='inline-block bg-[#F53E32] text-white px-6 py-3 rounded-md hover:bg-[#d63529] transition'
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white py-8 md:py-12'>
      <SectionHeader title=' Cart' routeText='Home/Cart' />
      <div className='container mx-auto px-4'>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='text-left py-4 px-4 font-semibold text-gray-900 text-sm md:text-base'>
                  Product
                </th>
                <th className='text-left py-4 px-4 font-semibold text-gray-900  text-sm md:text-base'>
                  Price
                </th>
                <th className='text-left py-4 px-4 font-semibold text-gray-900  text-sm md:text-base'>
                  Quantity
                </th>
                <th className='text-left py-4 px-4 font-semibold text-gray-900  text-sm md:text-base'>
                  Total
                </th>
                <th className='text-left py-4 px-4 font-semibold text-gray-900  text-sm md:text-base'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const price = parseFloat(item?.newPrice);
                const total = price * item.quantity;

                return (
                  <tr
                    key={item.id}
                    className=' border-gray-200 hover:bg-gray-50 transition'
                  >
                    <td className='py-4 px-4'>
                      <div className='flex items-center gap-3'>
                        <div className='relative w-12  h-12 md:w-16 md:h-16 shrink-0'>
                          {item?.image && (
                            <Image
                              src={item?.image}
                              alt='product'
                              width={200}
                              height={200}
                              className='object-contain h-full w-full'
                            />
                          )}
                        </div>
                        <span className='text-sm md:text-base text-gray-800 font-medium'>
                          {item?.title}
                        </span>
                      </div>
                    </td>

                    <td className='py-4 px-4'>
                      <span className='text-sm md:text-base text-gray-700'>
                        {item.newPrice}
                      </span>
                    </td>

                    <td className='py-4 px-4'>
                      <div className='flex items-center bg-white gap-2 border border-gray-300 rounded-md w-fit'>
                        <button
                          onClick={() => handleDecrease(item?.id)}
                          className='px-3 py-1 text-gray-600 hover:bg-gray-100 transition text-lg font-medium'
                          aria-label='Decrease quantity'
                        >
                          -
                        </button>
                        <span className='px-3 text-sm md:text-base text-gray-800 font-medium'>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleIncrease(item?.id)}
                          className='px-3 py-1 text-gray-600 hover:bg-gray-100 transition text-lg font-medium'
                          aria-label='Increase quantity'
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className='py-4 px-4'>
                      <span className='text-sm md:text-base text-gray-800 font-semibold'>
                        ${total.toFixed(2)}
                      </span>
                    </td>

                    <td className='py-4 px-4'>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className='text-gray-500 cursor-pointer hover:text-red-600 transition'
                        aria-label='Remove item'
                      >
                        <Trash2 className='w-5 h-5' />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className='mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <Link
            href='/shop'
            className='text-gray-700 hover:text-[#F53E32] transition underline text-sm md:text-base'
          >
            Continue Shopping
          </Link>

          <button
            onClick={handleCheckout}
            className='bg-[#F53E32] text-white px-8 py-3 rounded-md hover:bg-[#d63529] transition font-medium text-sm md:text-base'
          >
            Check Out
          </button>
        </div>

        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='font-semibold text-black text-2xl'>
            Popular Products
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, aliquid voluptate temporibus totam nesciunt laborum
            soluta dolorem magni, eos fuga recusandae? Sunt similique esse,
            facere ducimus accusamus eum repudiandae dolores?
          </p>
          <div className='flex justify-evenly w-full items-center   mt-12'>
            {products.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className='flex justify-evenly gap-24  w-full items-center'
              >
                <ProductSingleCard product={product} key={product.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
