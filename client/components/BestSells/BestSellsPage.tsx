'use client';

import { Fragment, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { type Swiper as SwiperRef } from 'swiper';
import bgimage from '../../public/product/dbest.png';
import { products } from '@/constant/products';
import BestCard from './BestCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const BestSellsPage = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <Fragment>
      <div className='w-[90%] mx-auto'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3'>
          <h1 className='text-xl sm:text-2xl font-bold'>Daily Best Sells</h1>
          <div className='flex items-center gap-2 sm:gap-3.5 flex-wrap'>
            <button className='text-xs sm:text-sm font-medium hover:text-green-600'>
              Feature
            </button>
            <button className='text-xs sm:text-sm font-medium hover:text-green-600'>
              Popular
            </button>
            <button className='text-xs sm:text-sm font-medium hover:text-green-600'>
              New Added
            </button>
          </div>
        </div>

        <div className='grid gap-4 grid-cols-1 lg:grid-cols-[24%_73%]'>
          <div
            className='relative bg-cover bg-center rounded-2xl bg-[#242424] shadow-xl text-white flex flex-col justify-start p-6'
            style={{
              backgroundImage: `url(${bgimage.src})`,
              height: window.innerWidth >= 1024 ? '480px' : '300px',
            }}
          >
            <div className='relative ml-2 sm:ml-4 z-10 flex flex-col justify-between gap-8 sm:gap-16'>
              <h1 className='font-quicksand font-bold text-xl sm:text-2xl lg:text-[30px] leading-tight sm:leading-12'>
                Bring nature <br /> into your <br /> home
              </h1>
              <Link
                href={'/shop'}
                className='bg-red-500 w-fit sm:w-[60%] text-nowrap flex items-center hover:bg-red-600 cursor-pointer gap-2 transition rounded px-4 sm:px-5 py-2 font-medium text-sm sm:text-base'
              >
                Shop Now <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className='relative flex w-full justify-between'>
            <div className='hidden sm:flex absolute top-44 lg:top-44 z-40 left-0 gap-2'>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className='p-2 cursor-pointer rounded-full bg-gray-200 hover:bg-green-500 hover:text-white transition'
              >
                <FaArrowLeft />
              </button>
            </div>
            <div className='hidden sm:flex absolute top-44 lg:top-44 z-40 right-0 gap-2'>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className='p-2 cursor-pointer rounded-full bg-gray-200 hover:bg-green-500 hover:text-white transition'
              >
                <FaArrowRight />
              </button>
            </div>

            <div className='flex sm:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-40 gap-3'>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className='p-2 cursor-pointer rounded-full bg-gray-200 hover:bg-green-500 hover:text-white transition'
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className='p-2 cursor-pointer rounded-full bg-gray-200 hover:bg-green-500 hover:text-white transition'
              >
                <FaArrowRight />
              </button>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className='py-6'
            >
              {products.map((val) => (
                <SwiperSlide key={val.id}>
                  <BestCard data={val} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BestSellsPage;
