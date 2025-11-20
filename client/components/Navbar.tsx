'use client';
import { RiMenu2Line } from 'react-icons/ri';
import logo from '../public/imges/logo.png';
import Link from 'next/link';
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import { GrPhone } from 'react-icons/gr';
import Image from 'next/image';
import Input from './Input';
import { IoCloseSharp, IoSearchOutline } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
import { LuShoppingCart } from 'react-icons/lu';
import { CiHeart } from 'react-icons/ci';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/redux/feature/searchSlice';
import { useMutation } from '@tanstack/react-query';
import { logoutUser } from '@/lib/api/auth';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [query, setQuery] = useState<string>('');
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const totalQuantity = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  const totalAddTowishlistQuantity = useSelector((state: RootState) => {
    return state.wishlist.items.length;
  });

  interface MenuItemType {
    name: string;
    link: string;
    category?: string[];
  }

  const menuItems: MenuItemType[] = [
    { name: 'Home', link: '/' },
    {
      name: 'Category',
      link: '/category',
      category: [
        'Snacks',
        'Vegetables',
        'Coffee',
        'Milks & Dairies',
        'Coffee & Teas',
      ],
    },
    {
      name: 'Products',
      link: '/product',
      category: ['All Products', 'New Arrivals', 'Top Selling', 'Best Deals'],
    },
    {
      name: 'Pages',
      link: '/about',
      category: ['About Us', 'Contact', 'FAQ', 'Privacy Policy'],
    },
    {
      name: 'Blog',
      link: '/blog',
      category: ['Latest Posts', 'Tips & Recipes', 'Community Stories'],
    },
    { name: 'Elements', link: '/element' },
  ];

  const categories = [
    'Snacks',
    'Vegetables',
    'Coffee',
    'Milks & Dairies',
    'Coffee & Teas',
  ];

  interface AuthSectionType {
    name: string;
    icon: React.ReactNode;
    link: string;
    quantity?: number;
  }

  const AuthSection: AuthSectionType[] = [
    { name: 'Account', icon: <MdAccountCircle />, link: '/account' },
    {
      name: 'Wishlist',
      icon: <CiHeart />,
      link: '/wishlist',
      quantity: totalAddTowishlistQuantity,
    },
    {
      name: 'Cart',
      icon: <LuShoppingCart />,
      link: '/cart',
      quantity: totalQuantity,
    },
  ];
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Category');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };
  const dispatch = useDispatch();
  const handleSearch = () => {
    if (query.trim() !== '') {
      dispatch(setSearchQuery(query.trim()));
      router.push(`/products?search=${query.trim()}`);

      setQuery('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  const logoutMutation = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: () => {
      localStorage.removeItem('token');
      toast.success('Logout successfully!');
      router.push('/');
    },
    onError: () => {
      toast.error('Logout failed!');
    },
  });
  return (
    <div className='w-[95%] md:w-[90%] lg:w-[80%] mx-auto'>
      <header className='flex justify-between items-center py-3'>
        <button
          className='text-2xl lg:hidden'
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'
        >
          {open ? <IoCloseSharp size={26} /> : <RiMenu2Line size={26} />}
        </button>

        <nav className='hidden lg:block relative'>
          <ul className='flex gap-8 text-[14px] font-medium'>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className='relative group cursor-pointer'
                onClick={() => handleDropdown(item.name)}
              >
                <div className='font-poppins text-[14px] leading-[21px] tracking-[0.48px] flex items-center gap-1 hover:text-[#F53E32] transition'>
                  <Link href={item.link}>{item.name}</Link>
                  {item.category && <IoIosArrowDown size={12} />}
                </div>

                {item.category && activeDropdown === item.name && (
                  <ul className='absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md z-50'>
                    {item.category.map((cat, idx) => {
                      let path = '';

                      if (item.name === 'Pages') {
                        if (cat === 'About Us') path = '/about';
                        else if (cat === 'Contact') path = '/contact';
                        else if (cat === 'FAQ') path = '/faq';
                        else if (cat === 'Privacy Policy') path = '/privacy';
                      } else {
                        path = `${item.link}/${cat
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`;
                      }

                      return (
                        <li key={idx}>
                          <Link
                            href={path}
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-[#F53E32] hover:text-white transition'
                            onClick={() => setActiveDropdown(null)}
                          >
                            {cat}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className='hidden md:flex gap-2 items-center ml-auto lg:ml-0'>
          <GrPhone className='text-gray-700' />
          <p className='font-normal text-sm whitespace-nowrap'>+123 456 789</p>
        </div>
      </header>

      {open && (
        <div className='lg:hidden bg-white shadow-md p-4 rounded-lg space-y-3'>
          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => handleDropdown(item.name)}
                className='flex justify-between items-center py-2 font-medium text-gray-700 hover:text-[#F53E32]'
              >
                <Link
                  className='font-semibold text-gray-900'
                  href={item.link}
                  onClick={() => !item.category && setOpen(false)}
                >
                  {item.name}
                </Link>
                {item.category && <IoIosArrowDown />}
              </div>
              {item.category && activeDropdown === item.name && (
                <div className='ml-4 space-y-2'>
                  {item.category.map((cat, idx) => {
                    let path = '';
                    if (item.name === 'Pages') {
                      if (cat === 'About Us') path = '/about';
                      else if (cat === 'Contact') path = '/contact';
                      else if (cat === 'FAQ') path = '/faq';
                      else if (cat === 'Privacy Policy') path = '/privacy';
                    } else {
                      path = `${item.link}/${cat
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`;
                    }
                    return (
                      <Link
                        key={idx}
                        href={path}
                        className='block text-sm text-gray-600 hover:text-[#F53E32]'
                        onClick={() => {
                          setActiveDropdown(null);
                          setOpen(false);
                        }}
                      >
                        {cat}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 pb-2 relative'>
        <Link href='/' className='flex items-center gap-2'>
          <Image
            src={logo}
            alt='logo'
            width={68}
            height={68}
            className='w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px]'
          />
          <div className='flex flex-col'>
            <h1 className='font-inter font-black text-[20px] sm:text-[22px] md:text-[24px] tracking-[0.48px] text-black'>
              Foodzy
            </h1>
            <p className='font-inter font-semibold text-[9px] md:text-[10px] text-gray-600'>
              A Treasure of Taste
            </p>
          </div>
        </Link>

        <div className='flex items-center justify-between w-full md:w-[80%] md:max-w-md border bg-white border-[#E9E9E9] rounded-lg  relative'>
          <Input
            placeholder='Search for food, dishes...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className='flex-1 border-none focus:ring-0 outline-none text-sm w-full'
          />

          <div className='flex items-center gap-2'>
            <div
              className='flex items-center gap-1 border-l h-full border-[#E9E9E9] cursor-pointer transition relative '
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className='text-xs sm:text-sm pl-1 sm:pl-2 font-medium text-gray-700 truncate max-w-[70px] sm:max-w-[100px]'>
                {selectedCategory}
              </span>
              <IoIosArrowDown className='text-gray-600 shrink-0' size={15} />
            </div>
            <button
              onClick={handleSearch}
              className='bg-[#F53E32] cursor-pointer px-3 sm:px-4 py-[9px] rounded-r flex items-center justify-center hover:opacity-90 transition'
            >
              <IoSearchOutline size={18} className='text-white' />
            </button>
          </div>
          {isOpen && (
            <div className='absolute right-[60px] sm:right-[75px] md:right-[5px] top-12 bg-white shadow-md rounded-md w-40 z-50 max-h-60 overflow-y-auto'>
              {categories.map((cat) => (
                <p
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className='px-3 py-2 text-sm text-gray-700 hover:bg-[#F53E32] hover:text-white cursor-pointer'
                >
                  {cat}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className='flex items-center gap-4 sm:gap-6 justify-end md:justify-start'>
          {AuthSection.map((item) => {
            if (item.name === 'Account') {
              return (
                <div key={item.link} className='relative' ref={dropdownRef}>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className='flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#F53E32] transition'
                  >
                    {item.icon}
                    <span className='hidden md:block font-poppins text-[15px] tracking-[0.48px]'>
                      {item.name}
                    </span>
                  </button>

                  {isProfileOpen && (
                    <div className='absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
                      <Link
                        href='/account'
                        className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={() => logoutMutation.mutate()}
                        className='w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100'
                        disabled={logoutMutation.isPending}
                      >
                        {logoutMutation.isPending ? 'Logging out...' : 'Logout'}
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.link}
                href={item.link}
                className='flex items-center relative gap-1 text-sm font-medium text-gray-700 hover:text-[#F53E32] transition'
              >
                <span className='text-xl md:text-lg'>{item.icon}</span>
                <span className='hidden md:block font-poppins text-[15px] tracking-[0.48px]'>
                  {item.name}
                </span>
                {item.quantity && item.quantity > 0 && (
                  <span className='absolute -top-2 -right-1 md:-top-6 md:right-6 bg-[#F53E32] px-2 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center'>
                    {item.quantity}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
