'use client';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../public/imges/logo.png';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { LuInstagram, LuPhone } from 'react-icons/lu';
import { BsSend } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { CiTwitter } from 'react-icons/ci';
import { TfiWorld } from 'react-icons/tfi';

import footerImage1 from '../public/imges/f1.jpg';
import footerImage2 from '../public/imges/f2.jpg';
import footerImage3 from '../public/imges/f3.jpg';
import footerImage4 from '../public/imges/f4.jpg';
import Input from './Input';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Footer = () => {
  const SubscribeValidation = z.object({
    email: z.string().nonempty('email is required').email(),
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
    console.log('Submitted Data:', data);
  };
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Delivery Information', href: '/delivery' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Support Center', href: '/support' },
      ],
    },
    {
      title: 'Category',
      links: [
        { label: 'Bakery & Pastry', href: '/bakery' },
        { label: 'Fruits & Vegetables', href: '/fruits' },
        { label: 'Meat & Seafood', href: '/meat' },
        { label: 'Frozen & Snacks', href: '/frozen' },
        { label: 'Drinks & Beverages', href: '/drinks' },
        { label: 'Household Items', href: '/household' },
      ],
    },
  ];

  const socialIcons = [
    <GrFacebookOption key='fb' />,
    <CiTwitter key='tw' />,
    <TfiWorld key='web' />,
    <LuInstagram key='insta' />,
  ];

  const gallery = [footerImage1, footerImage2, footerImage3, footerImage4];

  return (
    <div className='w-[80%] mt-12 mx-auto'>
      <footer className='bg-white py-12 border-gray-200 border-t'>
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[30%_20%_20%_30%] gap-4'>
          <div className='space-y-4'>
            <div className='flex gap-3 items-center'>
              <Image src={logo} alt='logo' width={60} height={60} />
              <div>
                <h2 className='font-bold text-xl text-gray-800'>Foodzy</h2>
                <p className='text-sm text-gray-500'>A Treasure of Taste</p>
              </div>
            </div>

            <p className='text-sm text-gray-600 leading-6'>
              Foodzy is the biggest market of grocery products. Get your daily
              needs from our store.
            </p>

            <div className='flex items-center gap-2 text-sm text-gray-600'>
              <IoLocationOutline className='text-lg text-[#F53E32]' />
              <p>51 Green St, Huntington NY, USA</p>
            </div>

            <div className='flex items-center gap-2 text-sm text-gray-600 cursor-pointer'>
              <HiOutlineMail className='text-lg text-[#F53E32]' />
              <a
                href='mailto:info@foodzy.com'
                className='hover:text-red-500 transition'
              >
                info@foodzy.com
              </a>
            </div>

            <div className='flex items-center gap-2 text-sm text-gray-600 cursor-pointer'>
              <LuPhone className='text-lg text-[#F53E32]' />
              <a
                href='https://wa.me/1234567890?text=Hi%20Foodzy%20Team,%20I%20need%20support'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-red-500 transition'
              >
                +1 234 567 890
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className='font-bold text-lg mb-3 text-gray-800'>
                {section.title}
              </h3>
              <ul className='space-y-2'>
                {section.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className='text-sm text-gray-600 hover:text-red-500 transition'
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className='font-bold text-lg mb-4 text-gray-800'>
              Subscribe Our Newsletter
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex items-center justify-between border-gray-100 border-2  rounded-md px-3'
            >
              <Input
                type='text'
                {...register('email')}
                placeholder='Enter here...'
                className='w-full py-2 text-sm outline-none'
              />
              <BsSend className='text-gray-600 text-lg cursor-pointer' />
            </form>
            <p className='text-red-500'>{errors.email?.message}</p>
            <div className='flex gap-4 mt-5 text-xl text-gray-500'>
              {socialIcons.map((icon, i) => (
                <div
                  key={i}
                  className='hover:text-red-500 border-gray-100 border-2  text-black rounded-lg p-4 cursor-pointer'
                >
                  {icon}
                </div>
              ))}
            </div>

            <div className='flex flex-wrap gap-2 mt-5'>
              {gallery.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt='gallery'
                  width={70}
                  height={70}
                  className='rounded-md object-cover'
                />
              ))}
            </div>
          </div>
        </div>

        <p className='text-center text-sm text-gray-500 mt-10'>
          © 2025 <span className='text-red-500 font-semibold'>Foodzy</span>. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
