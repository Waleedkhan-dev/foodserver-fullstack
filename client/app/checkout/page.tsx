'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { RootState } from '@/redux/store';
import payment from '../../public/hero/payment.png';
const checkoutSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  postCode: z.string().min(3, 'Post code is required'),
  country: z.string().min(2, 'Country is required'),
  region: z.string().min(2, 'Region/State is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),

  // Payment Method
  paymentMethod: z.enum(['credit', 'cash', 'paypal'], {
    required_error: 'Please select a payment method',
  }),
});
// const loginValidation = z.object({
//   email: z.string().email('Invalid email address'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
// });
// type checkLoginData = z.infer<typeof loginValidation>;
type CheckoutFormData = z.infer<typeof checkoutSchema>;

const CheckOutPage = () => {
  const router = useRouter();
  const items = useSelector((state: RootState) => state.cart.items);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<CheckoutFormData>({
  //   resolver: zodResolver(checkoutSchema),
  // });

  // Calculate totals
  const subtotal = items.reduce((acc, item) => {
    const price = parseFloat(item?.newPrice);
    return acc + price * item.quantity;
  }, 0);

  const onSubmit = (data: CheckoutFormData) => {
    console.log('Form data:', data);
    toast.success('Order placed successfully!');
    // Handle checkout logic here
  };

  if (items.length === 0) {
    router.push('/cart');
    return null;
  }

  // const loginDataSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div className='w-[80%] mx-auto'>
      <div className='min-h-screen bg-white py-8 md:py-12'>
        <div className='container mx-auto px-4'>
          <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              <div className='lg:col-span-1'>
                <div className='bg-white border border-gray-200 rounded-lg p-6 '>
                  <h2 className='text-xl font-semibold text-gray-900 mb-6'>
                    Summary
                  </h2>
                  <div className='border-t border-gray-200 pt-4 space-y-3'>
                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-600'>Sub-Total:</span>
                      <span className='font-medium text-gray-900'>
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className='flex justify-between text-sm'>
                      <span className='text-gray-600'>Delivery Charges</span>
                      <span className='font-medium text-gray-900'>$5.00</span>
                    </div>
                    <div className='flex justify-between text-base font-semibold border-t border-gray-200 pt-3'>
                      <span className='text-gray-900'>Total Amount:</span>
                      <span className='text-gray-900'>
                        ${(subtotal + 5).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className='space-y-4 mb-6'>
                    {items.map((item) => (
                      <div key={item.id} className='flex gap-3'>
                        <div className='relative w-16 h-16 bg-gray-100 rounded-md shrink-0'>
                          {item.image && (
                            <Image
                              src={item.image}
                              alt='Product Image'
                              width={100}
                              height={100}
                              className='w-full h-full object-contain'
                            />
                          )}
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-sm font-medium text-gray-900 line-clamp-2'>
                            {item.title}
                          </h3>
                          <div className='flex items-center justify-between mt-1'>
                            <span className='text-xs text-gray-500'>
                              Qty: {item.quantity}
                            </span>
                            <span className='text-sm font-semibold text-gray-900'>
                              $
                              {(
                                parseFloat(item.newPrice) * item.quantity
                              ).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='bg-white border  border-gray-200  p-6 rounded-lg'>
                  <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                    Delivery Method
                  </h2>
                  <p className='text-sm text-gray-600 mb-4'>
                    Please select the preferred shipping method to use on this
                    order.
                  </p>
                  <div className=' p-4 rounded-md'>
                    <div className=' flex items-center gap-2'>
                      <label className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='customerType'
                          className='w-4 h-4 text-red-600'
                          defaultChecked
                        />
                        <span className='text-sm text-gray-700'>
                          Rate-$10-$70
                        </span>
                      </label>
                      <label className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='customerType'
                          className='w-4 h-4 text-red-600'
                        />
                        <span className='text-sm text-gray-700'>0.4</span>
                      </label>
                    </div>
                  </div>
                  <p className='text-xs text-gray-500 mt-3'>
                    Add Comments About Your Order
                  </p>
                  <textarea
                    className='w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent'
                    rows={3}
                    placeholder='Notes about your order, e.g. special notes for delivery'
                  ></textarea>
                </div>

                <div className='bg-white p-6 border border-gray-200 rounded-lg'>
                  <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                    Payment Method
                  </h2>
                  <p className='text-sm text-gray-600 mb-4'>
                    Please select the preferred payment method to use on this
                    order.
                  </p>
                  <div className='space-y-3'>
                    <div className='bg-gray-50 p-4 rounded-md'>
                      <label className='flex items-center gap-3 cursor-pointer'>
                        <input
                          {...register('paymentMethod')}
                          type='radio'
                          value='cash'
                          className='w-4 h-4 text-red-600'
                        />
                        <span className='text-sm text-gray-700'>
                          Cash On Delivery
                        </span>
                      </label>
                    </div>
                    <div className='bg-gray-50 p-4 rounded-md'>
                      <label className='flex items-center gap-3 cursor-pointer'>
                        <input
                          {...register('paymentMethod')}
                          type='radio'
                          value='credit'
                          className='w-4 h-4 text-red-600'
                        />
                        <div className='flex items-center gap-2'>
                          <span className='text-sm text-gray-700'>
                            Credit Card
                          </span>
                        </div>
                      </label>
                    </div>

                    <div className='bg-gray-50 p-4 rounded-md'>
                      <label className='flex items-center gap-3 cursor-pointer'>
                        <input
                          {...register('paymentMethod')}
                          type='radio'
                          value='paypal'
                          className='w-4 h-4 text-red-600'
                        />
                        <span className='text-sm text-gray-700'>PayPal</span>
                      </label>
                    </div>
                  </div>
                  {errors.paymentMethod && (
                    <p className='text-red-500 text-xs mt-2'>
                      {errors.paymentMethod.message}
                    </p>
                  )}
                </div>
                <div className='w-full py-12'>
                  <h1>Payement method</h1>
                  <div>
                    <Image src={payment} alt='cart' />
                  </div>
                </div>
              </div>
              <div className='lg:col-span-2 border border-gray-50 space-y-6'>
                <div className='bg-white rounded border border-[#E9E9E9] '>
                  <div className=' p-6 rounded-lg'>
                    <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                      New <br /> Customer
                    </h2>
                    <p className='text-sm text-gray-600 mb-4'>
                      Checkout Options:
                    </p>
                    <div className=' flex items-center gap-2'>
                      <label className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='customerType'
                          className='w-4 h-4 text-red-600'
                          defaultChecked
                        />
                        <span className='text-sm text-gray-700'>
                          Register Account
                        </span>
                      </label>
                      <label className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='customerType'
                          className='w-4 h-4 text-red-600'
                        />
                        <span className='text-sm text-gray-700'>
                          Guest Checkout
                        </span>
                      </label>
                    </div>
                    <p className='text-xs text-gray-500 mt-3'>
                      By creating an account you will be able to shop faster, be
                      up to date on an order s status, and keep track of the
                      orders you have previously made.
                    </p>
                    <button
                      type='button'
                      className='mt-4 bg-[#F53E32] text-white px-6 py-2 rounded-md hover:bg-[#d63529] transition text-sm'
                    >
                      Continue
                    </button>
                  </div>

                  <form
                    onClick={handleSubmit(onSubmit)}
                    className=' p-6 rounded-lg'
                  >
                    <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                      Returning Customer
                    </h2>
                    <p className='text-sm text-gray-600 mb-4'>
                      I am a returning customer
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-1 gap-4 mb-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          E-Mail Address
                        </label>
                        <input
                          {...register('email')}
                          type='email'
                          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent'
                          placeholder='E-Mail Address'
                        />
                        {errors.email && (
                          <p className='text-red-500 text-xs mt-1'>
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          Password
                        </label>
                        <input
                          {...register('password')}
                          type='password'
                          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent'
                          placeholder='Password'
                        />
                        {errors.password && (
                          <p className='text-red-500 text-xs mt-1'>
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='flex items-center justify-start gap-2  black'>
                      <button
                        type='button'
                        className='bg-[#F53E32] text-white px-6 py-2 rounded-md hover:bg-[#d63529] transition text-sm'
                      >
                        Login
                      </button>
                      <a
                        href='#'
                        className='text-sm text-gray-900 underline hover:text-[#F53E32]'
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </form>
                </div>

                <div className='bg-white p-6 border border-gray-200 rounded-lg'>
                  <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                    Billing Details:
                  </h2>
                  <p className='text-sm text-gray-600 mb-4'>
                    Checkout Options:
                  </p>
                  <div className=' flex items-center gap-6 py-6'>
                    <label className='flex items-center gap-2'>
                      <input
                        type='radio'
                        name='customerType'
                        className='w-4 h-4 text-red-600'
                        defaultChecked
                      />
                      <span className='text-sm text-gray-700'>
                        I want to use an existing address
                      </span>
                    </label>
                    <label className='flex items-center gap-2'>
                      <input
                        type='radio'
                        name='customerType'
                        className='w-4 h-4 text-red-600'
                      />
                      <span className='text-sm text-gray-700'>
                        I want to use new address
                      </span>
                    </label>
                  </div>
                  <div className='space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          First Name <span className='text-red-500'>*</span>
                        </label>
                        <input
                          {...register('firstName')}
                          type='text'
                          className='w-full px-4 py-2 border cursor-pointer border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent'
                          placeholder='First Name'
                        />
                        {errors.firstName && (
                          <p className='text-red-500 text-xs mt-1'>
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          Last Name <span className='text-red-500'>*</span>
                        </label>
                        <input
                          {...register('lastName')}
                          type='text'
                          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent'
                          placeholder='Last Name'
                        />
                        {errors.lastName && (
                          <p className='text-red-500 text-xs mt-1'>
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>
                        Address <span className='text-red-500'>*</span>
                      </label>
                      <input
                        {...register('address')}
                        type='text'
                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        placeholder='House number and street name'
                      />
                      {errors.address && (
                        <p className='text-red-500 text-xs mt-1'>
                          {errors.address.message}
                        </p>
                      )}
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {/* City */}
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          City <span className='text-red-500'>*</span>
                        </label>
                        <select
                          {...register('city')}
                          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        >
                          <option value=''>Select City</option>
                          <option value='Lahore'>Lahore</option>
                          <option value='Karachi'>Karachi</option>
                          <option value='Islamabad'>Islamabad</option>
                          <option value='Faisalabad'>Faisalabad</option>
                          <option value='Multan'>Multan</option>
                        </select>
                        {errors.city && (
                          <p className='text-red-500 text-xs mt-1'>
                            {errors.city.message}
                          </p>
                        )}
                      </div>

                      {/* Post Code */}
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          Post Code <span className='text-red-500'>*</span>
                        </label>
                        <select
                          {...register('postCode')}
                          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        >
                          <option value=''>Select Post Code</option>
                          <option value='54000'>54000</option>
                          <option value='75500'>75500</option>
                          <option value='44000'>44000</option>
                          <option value='38000'>38000</option>
                          <option value='60000'>60000</option>
                        </select>
                        {errors.postCode && (
                          <p className='text-red-500 text-xs mt-1'>
                            {errors.postCode.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {/* Country */}
                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          Country <span className='text-red-500'>*</span>
                        </label>
                        <select
                          {...register('country')}
                          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        >
                          <option value=''>Select Country</option>
                          <option value='Pakistan'>Pakistan</option>
                          <option value='India'>India</option>
                          <option value='Bangladesh'>Bangladesh</option>
                          <option value='China'>China</option>
                          <option value='UAE'>UAE</option>
                        </select>
                        {errors.country && (
                          <p className='text-red-500 text-xs mt-1'>
                            {errors.country.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          Region / State <span className='text-red-500'>*</span>
                        </label>
                        <select
                          {...register('region')}
                          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent'
                        >
                          <option value=''>Select Region / State</option>
                          <option value='Punjab'>Punjab</option>
                          <option value='Sindh'>Sindh</option>
                          <option value='KPK'>KPK</option>
                          <option value='Balochistan'>Balochistan</option>
                          <option value='Gilgit Baltistan'>
                            Gilgit Baltistan
                          </option>
                        </select>
                        {errors.region && (
                          <p className='text-red-500 text-xs mt-1'>
                            {errors.region.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex justify-end items-center'>
                  <button
                    onClick={handleSubmit(onSubmit)}
                    type='button'
                    className=' mt-6 bg-[#F53E32] text-white px-6 py-3 rounded-md hover:bg-[#d63529] transition font-medium'
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
