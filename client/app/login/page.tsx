'use client';

import Image from 'next/image';
import registerImage from '../../public/imges/register.png';
import Input from '@/components/Input';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Fragment } from 'react/jsx-runtime';
import SectionHeader from '@/components/common/Breadcrumb';

const RegisterSchema = z.object({
  password: z
    .string()
    .nonempty('password is required is required')
    .min(6, 'password must be 6 charactur')
    .max(12, 'password is not greater then 12 charcture'),

  email: z.string().email('Please enter a valid email'),
});

type RegisterFormType = z.infer<typeof RegisterSchema>;

const LoginSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data: RegisterFormType) => {
    console.log('Form Submitted ', data);
  };

  return (
    <Fragment>
      <SectionHeader title='Login' routeText='Home - Login' />
      <div className='flex justify-center items-start min-h-screen px-4 sm:px-6 md:px-10 lg:px-10 '>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-white p-6 sm:p-8 md:p-10 border border-gray-50 lg:p-12 rounded-lg  w-full max-w-md sm:max-w-lg md:max-w-xl space-y-3'
        >
          <div className='flex items-center  justify-center '>
            <Image src={registerImage} alt='logo' width={120} height={120} />
            <h1 className='font-foodMatter font-normal text-[24px] leading-[18.2px] tracking-[0.48px] align-middle'>
              frouter
            </h1>
          </div>

          <div className='flex gap-4'>
            <div className='flex-1'>
              <label>Email *</label>
              <Input placeholder='Enter email' {...register('email')} />
              {errors.email && (
                <p className='text-red-500 text-sm'>{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label>password *</label>
            <Input placeholder='Enter address' {...register('password')} />
            {errors.password && (
              <p className='text-red-500 text-sm'>{errors.password?.message}</p>
            )}
          </div>
          <div className='flex text-[#777777] justify-between'>
            <button>remember me</button>
            <Link href={'/forgetpassword'}>forget password</Link>
          </div>
          <div className='flex justify-between'>
            <button
              type='submit'
              className='px-4 cursor-pointer  bg-[#F53E32] text-white py-2 rounded  transition'
            >
              Login
            </button>

            <div className='text-center  pt-2'>
              <Link href='/register' className='text-sm text-[#777777]'>
                SignUp ?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LoginSection;
