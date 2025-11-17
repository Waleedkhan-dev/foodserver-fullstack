'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BsSend } from 'react-icons/bs';
import StayHomeBgImage from '../../public/hero/stay.png';
import StayHomeFrontImage from '../../public/hero/stayhome.png';
import Cards from './Cards';

const StayHomePage = () => {
  const SubscribeValidation = z.object({
    email: z.string().nonempty('Email is required').email('Enter valid email'),
  });

  type SubscribeType = z.infer<typeof SubscribeValidation>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscribeType>({
    resolver: zodResolver(SubscribeValidation),
    mode: 'onChange',
  });

  const onSubmit = (data: SubscribeType) => {
    console.log(data);
  };

  return (
    <Fragment>
      <section
        className='relative w-[90%] mx-auto mt-8 sm:mt-12 h-auto sm:h-[50vh] md:h-[55vh] lg:h-[65vh] rounded-2xl sm:rounded-3xl overflow-hidden'
        style={{
          backgroundImage: `url(${StayHomeBgImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-14 lg:py-16 gap-6 lg:gap-0'>
          <div className='flex-1 w-full lg:max-w-[550px] space-y-3 sm:space-y-4 lg:space-y-5 text-center lg:text-left'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug px-2 sm:px-0'>
              Stay home & get your daily needs from our shop
            </h1>
            <p className='text-gray-600 text-sm sm:text-base px-2 sm:px-0'>
              Start your daily shopping with{' '}
              <span className='text-[#3BB77E] font-semibold'>Nest Mart</span>
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-full px-3 sm:px-4 w-full sm:w-[90%] lg:max-w-[400px] mx-auto lg:mx-0 gap-2 sm:gap-0 py-2 sm:py-0'
            >
              <div className='flex items-center w-full gap-2 py-2 sm:py-0'>
                <BsSend className='text-gray-400 text-base sm:text-lg' />
                <input
                  {...register('email')}
                  placeholder='Your email address'
                  className='flex-1 text-xs sm:text-sm text-gray-700 placeholder-gray-400 outline-none'
                />
              </div>

              <button
                type='submit'
                className='bg-[#F53E32] cursor-pointer hover:bg-[#d53429] transition text-white px-4 sm:px-5 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-medium w-full sm:w-auto sm:ml-2'
              >
                Subscribe
              </button>
            </form>

            {errors.email && (
              <p className='text-red-500 text-xs sm:text-sm pt-1 pl-3 text-center lg:text-left'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div className='flex-1 relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] max-w-[400px] lg:max-w-none'>
            <Image
              src={StayHomeFrontImage}
              alt='Stay Home Image'
              fill
              className='object-contain object-center lg:object-right'
              priority
            />
          </div>
        </div>
      </section>
      <div>
        <Cards />
      </div>
    </Fragment>
  );
};

export default StayHomePage;
