'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import Input from '@/components/Input';
import SectionHeader from '@/components/common/Breadcrumb';
import registerImage from '../../public/imges/register.png';
import { registerUser, RegisterPayload } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';

const RegisterSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password cannot exceed 12 characters'),
  phone: z.string().min(11, 'Phone number must be 11 characters').max(11),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  postCode: z.string().min(3, 'Post code required'),
  country: z.string().min(2, 'Country is required'),
  state: z.string().min(2, 'State is required'),
});

type RegisterFormType = z.infer<typeof RegisterSchema>;

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: RegisterPayload) => registerUser(data),
    onSuccess: () => {
      toast.success('Registered successfully!');
      router.push('/');
    },
    onError: () => {
      toast.error('Registration failed or user already exists!');
    },
  });

  const onSubmit: SubmitHandler<RegisterFormType> = (data) => {
    mutation.mutate(data);
  };

  return (
    <Fragment>
      <SectionHeader title='Register' routeText='Home - Register' />

      <div className='flex justify-center items-center min-h-screen px-4 sm:px-6 md:px-10 lg:px-10'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-white border border-gray-100 p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl space-y-3'
        >
          <div className='flex items-center justify-center gap-4'>
            <Image src={registerImage} alt='logo' width={120} height={120} />
            <h1 className='font-foodMatter font-normal text-[24px] leading-[18.2px] tracking-[0.48px]'>
              Frouter
            </h1>
          </div>

          <div className='flex gap-4'>
            <div className='flex-1'>
              <label>First Name *</label>
              <Input
                placeholder='Enter first name'
                {...register('firstName')}
              />
              {errors.firstName && (
                <p className='text-red-500 text-sm'>
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className='flex-1'>
              <label>Last Name *</label>
              <Input placeholder='Enter last name' {...register('lastName')} />
              {errors.lastName && (
                <p className='text-red-500 text-sm'>
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex-1'>
              <label>Email *</label>
              <Input placeholder='Enter email' {...register('email')} />
              {errors.email && (
                <p className='text-red-500 text-sm'>{errors.email.message}</p>
              )}
            </div>

            <div className='flex-1'>
              <label>Phone *</label>
              <Input placeholder='Enter phone' {...register('phone')} />
              {errors.phone && (
                <p className='text-red-500 text-sm'>{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label>Address *</label>
            <Input placeholder='Enter address' {...register('address')} />
            {errors.address && (
              <p className='text-red-500 text-sm'>{errors.address.message}</p>
            )}
          </div>

          <div>
            <label>Password *</label>
            <Input
              placeholder='Enter password'
              type='password'
              {...register('password')}
            />
            {errors.password && (
              <p className='text-red-500 text-sm'>{errors.password.message}</p>
            )}
          </div>

          <div className='flex gap-4'>
            <div className='flex-1'>
              <label>City *</label>
              <Input placeholder='Enter city' {...register('city')} />
              {errors.city && (
                <p className='text-red-500 text-sm'>{errors.city.message}</p>
              )}
            </div>

            <div className='flex-1'>
              <label>Post Code *</label>
              <Input placeholder='Enter post code' {...register('postCode')} />
              {errors.postCode && (
                <p className='text-red-500 text-sm'>
                  {errors.postCode.message}
                </p>
              )}
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex-1'>
              <label>Country *</label>
              <Input placeholder='Enter country' {...register('country')} />
              {errors.country && (
                <p className='text-red-500 text-sm'>{errors.country.message}</p>
              )}
            </div>

            <div className='flex-1'>
              <label>Region/State *</label>
              <Input placeholder='Enter state' {...register('state')} />
              {errors.state && (
                <p className='text-red-500 text-sm'>{errors.state.message}</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className='flex justify-between items-center'>
            <button
              type='submit'
              className='px-4 cursor-pointer bg-red-600 text-white py-2 rounded hover:bg-red-700 transition'
              disabled={mutation.isPending}
            >
              {mutation.isPending ? 'Registering...' : 'Sign Up'}
            </button>

            <div className='text-center pt-2'>
              <Link href='/login' className='text-sm text-gray-600'>
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default RegisterPage;
