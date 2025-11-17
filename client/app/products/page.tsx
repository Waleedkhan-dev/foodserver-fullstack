'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/feature/cartSlice';
import { products, ProductType } from '@/constant/products';
import ProductCategoryFilter from '@/components/Products/ProductCategoryFilter';
// import { IoBagHandleOutline } from 'react-icons/io5';
// import { PiStarFill } from 'react-icons/pi';
import { FaChevronDown } from 'react-icons/fa';
// import Image from 'next/image';
import { toast } from 'react-toastify';
import ProductSingleCard from './ProductSingleCard';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { MdFilterAlt } from 'react-icons/md';
import SectionHeader from '@/components/common/Breadcrumb';

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  colors: string[];
  weights: string[];
  tags: string[];
}

const ProductCard = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 500],
    colors: [],
    weights: [],
    tags: [],
  });

  const filteredProducts = products.filter((product) => {
    const inCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category || '');

    const inPrice =
      (product.newPrice ?? 0) >= filters.priceRange[0] &&
      (product.newPrice ?? 0) <= filters.priceRange[1];

    const inColor =
      filters.colors.length === 0 ||
      (product.colors?.some((color) => filters.colors.includes(color)) ??
        false);

    const inWeight =
      filters.weights.length === 0 ||
      filters.weights.includes(product.weight || '');

    const inTag =
      filters.tags.length === 0 ||
      filters.tags.some((tag) =>
        (product.tags || []).some(
          (pTag) => pTag.toLowerCase() === tag.toLowerCase()
        )
      );

    return inCategory && inPrice && inColor && inWeight && inTag;
  });
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div>
      <SectionHeader title='Shop' routeText='Home - Shop' />
      <div className='max-w-[80%] mx-auto'>
        <div
          className={`grid  ${
            sidebar ? 'grid-cols-[25%_72%] ' : 'grid-cols-1'
          }`}
        >
          <div className=' h-fit sticky top-4'>
            {sidebar && <ProductCategoryFilter onFilterChange={setFilters} />}
          </div>
          <div className='flex flex-col gap-2'>
            <nav className='flex justify-between border p-1  border-gray-50 items-center rounded'>
              <div className='flex items-center justify-center'>
                <span>
                  <MdFilterAlt
                    onClick={handleSidebar}
                    className={` ${sidebar ? 'text-red-500' : 'text-gray-300'}`}
                  />
                </span>
                <span>
                  <BsGrid3X3Gap
                    onClick={() => setSidebar(!sidebar)}
                    className={` ${
                      sidebar ? 'text-black' : 'bg-red-500  text-xl text-white'
                    } cursor-pointer`}
                  />
                </span>
                <p className='text-gray-500 text-sm'>
                  We found {filteredProducts.length} products for you
                </p>
              </div>
              <div className='flex items-center gap-1 rounded border border-gray-50 p-1 text-sm text-gray-600 cursor-pointer'>
                <p>Sort By:</p>
                <span className='flex items-center gap-1 font-medium'>
                  Featured <FaChevronDown className='text-gray-400' />
                </span>
              </div>
            </nav>

            <div
              className={`grid  ${
                sidebar ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
              } grid-cols-1 gap-4 `}
            >
              {filteredProducts.length > 0 ? (
                filteredProducts.map((data) => (
                  <ProductSingleCard product={data} key={data.id} />
                ))
              ) : (
                <p className='text-gray-500 text-sm col-span-full text-center'>
                  No products found matching the filters.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
