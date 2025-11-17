'use client';
import Image from 'next/image';
import pic1 from '../../public/hero/pic1.png';
import pic2 from '../../public/hero/pic2.png';
import pic3 from '../../public/hero/pic3.png';
import pic4 from '../../public/hero/pic4.png';
import mainpic from '../../public/hero/main.png';
import { BsSend } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { IoIosClose } from 'react-icons/io';
import Input from '../Input';

const SubscribeValidation = z.object({
  email: z.string().nonempty('Email is required').email('Enter valid email'),
});
type SubscribeType = z.infer<typeof SubscribeValidation>;

const HeroPage = () => {
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

  const tags = ['Shopping', 'Recipes', 'Kitchen', 'Medical', 'Beauty', 'Baby'];

  return (
    <section className='bg-white w-full min-h-screen lg:h-[120vh] py-10 sm:py-16 lg:py-20 relative overflow-hidden'>
      {/* Decorative Images - Hidden on mobile, visible on tablet+ */}
      <div className='hidden sm:block absolute top-5 left-0 w-[50px] sm:w-[60px] lg:w-[70px]'>
        <Image src={pic1} alt='pic1' />
      </div>

      <div className='hidden sm:block absolute top-0 right-3/6 w-[70px] sm:w-[85px] lg:w-[100px]'>
        <Image src={pic2} alt='pic2' />
      </div>

      <div className='hidden sm:block absolute bottom-2 left-0 w-14 sm:w-16 lg:w-20'>
        <Image src={pic3} alt='pic3' />
      </div>

      <div className='hidden sm:block absolute bottom-12 right-[40%] w-[50px] sm:w-[60px] lg:w-[70px]'>
        <Image src={pic4} alt='pic4' />
      </div>

      <div className='w-full md:w-[45%] flex justify-center absolute top-1/2 md:-right-100 right-0 transform md:-translate-x-1/2 -translate-y-1/2 md:bottom-0'>
        <Image
          src={mainpic}
          alt='main hero'
          className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] object-contain opacity-20 md:opacity-100'
        />
      </div>

      <div className='flex items-center justify-center h-full min-h-[calc(100vh-5rem)] lg:min-h-0'>
        <div className='w-[90%] max-w-[1300px] mx-auto flex flex-wrap justify-between items-start gap-6 sm:gap-8 lg:gap-10'>
          <div className='w-full md:w-[48%] space-y-4 sm:space-y-5 relative z-10'>
            <h3 className='font-poppins font-bold text-[16px] sm:text-[18px] lg:text-[20px] text-[#212529] tracking-[0.48px]'>
              <span className='text-[#F53E32] underline'>100%</span> Organic
              Vegetables
            </h3>

            <h1 className='font-arial font-black text-[32px] sm:text-[42px] lg:text-[55px] leading-[40px] sm:leading-[52px] lg:leading-[68px] tracking-[0.48px] text-[#000000]'>
              The best way to <br /> stuff your wallet.
            </h1>

            <p className='text-gray-600 text-sm sm:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              <br className='hidden sm:block' />
              Amet reiciendis beatae consequuntur.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2 bg-white sm:justify-between rounded-full px-3 sm:px-4 py-2 w-full sm:w-[90%] lg:w-[75%]'
            >
              <div className='flex items-center gap-2 flex-1'>
                <span className='text-gray-600'>
                  <BsSend />
                </span>
                <Input
                  {...register('email')}
                  placeholder='Your email address'
                  className='w-full py-2 text-sm outline-none'
                />
              </div>

              <button
                type='submit'
                className='bg-[#3BB77E] text-white cursor-pointer px-6 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition whitespace-nowrap'
              >
                Subscribe
              </button>
            </form>

            {errors.email && (
              <p className='text-red-500 text-sm pl-2'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div className='w-full md:w-auto md:max-w-[200px] lg:max-w-none'>
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className='inline-flex items-center gap-1 bg-white shadow-md text-gray-800 text-xs sm:text-sm font-medium px-2.5 py-1 rounded-xl'
                >
                  <IoIosClose size={16} className='text-gray-300' />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
