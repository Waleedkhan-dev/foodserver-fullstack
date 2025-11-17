'use client';
import React, { useState } from 'react';
import { Heart, Minus, Plus, Share2, Star, ShoppingCart } from 'lucide-react';
import ProductCategoryFilter from '@/components/Products/ProductCategoryFilter';

import { useParams } from 'next/navigation';
import { products, ProductType } from '@/constant/products';
import Image, { StaticImageData } from 'next/image';
import SectionHeader from '@/components/common/Breadcrumb';

import ProductSingleCard from '../ProductSingleCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/feature/cartSlice';
import { toast } from 'react-toastify';
import { addToWishlist } from '@/redux/feature/wishlistSlice';

const ProductDetailsPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  console.log('prodcuts ', product);

  const [thumbnail, setThumbnail] = useState<string | StaticImageData>(
    product?.gallery?.[0] || ''
  );

  const dispatch = useDispatch();

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
    toast.success('Product added to cart');
  };
  const HandleaddTowishlist = (product: ProductType) => {
    dispatch(addToWishlist(product));
    toast.success('Add is  add to cart sucesssfuly');
  };
  console.log('products data', product);

  return (
    <div className='min-h-screen'>
      <SectionHeader title='Shop' routeText='Home-Shop' />

      <div className='w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-3 sm:px-4 lg:px-0'>
        <div className='flex flex-col lg:flex-row gap-4 sm:gap-6'>
          <div className='hidden lg:block lg:w-1/4'>
            <ProductCategoryFilter onFilterChange={() => {}} />
          </div>

          <div className='flex-1'>
            <div className='bg-white rounded-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8'>
                <div className='space-y-3 sm:space-y-4'>
                  <div className='bg-gray-50 rounded-lg overflow-hidden aspect-square flex items-center justify-center'>
                    {product?.gallery?.[selectedImage] && (
                      <Image
                        src={product?.gallery?.[selectedImage] || 'heiuwhu'}
                        alt='product'
                        className='w-full h-full object-contain'
                      />
                    )}
                  </div>

                  <div className='flex gap-2 sm:gap-3 overflow-x-auto pb-2'>
                    {product?.gallery?.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedImage(index);
                          setThumbnail(img);
                        }}
                        className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index
                            ? 'border-red-500'
                            : 'border-gray-200'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className='w-full h-full object-contain'
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className='space-y-3 sm:space-y-4 lg:space-y-5'>
                  <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>
                    {product?.title}
                  </h1>

                  <p className='text-gray-500 text-xs sm:text-sm leading-relaxed'>
                    {product?.descriptionShort || 'No description available.'}
                  </p>

                  <div className='flex items-center gap-2'>
                    <div className='flex'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`sm:w-[18px] sm:h-[18px] ${
                            i < 4
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-300 text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className='space-y-2 sm:space-y-3 py-3 sm:py-4 border-t border-gray-200'>
                    {product?.brand && (
                      <div className='flex text-xs sm:text-sm'>
                        <span className='w-24 sm:w-32 font-semibold text-gray-900'>
                          Brand:
                        </span>
                        <span className='text-gray-600'>{product.brand}</span>
                      </div>
                    )}
                    {product?.flavor && (
                      <div className='flex text-xs sm:text-sm'>
                        <span className='w-24 sm:w-32 font-semibold text-gray-900'>
                          Flavor:
                        </span>
                        <span className='text-gray-600'>{product.flavor}</span>
                      </div>
                    )}
                    {product?.dietType && (
                      <div className='flex text-xs sm:text-sm'>
                        <span className='w-24 sm:w-32 font-semibold text-gray-900'>
                          Diet Type:
                        </span>
                        <span className='text-gray-600'>
                          {product.dietType}
                        </span>
                      </div>
                    )}
                    {product?.weight && (
                      <div className='flex text-xs sm:text-sm'>
                        <span className='w-24 sm:w-32 font-semibold text-gray-900'>
                          Weight:
                        </span>
                        <span className='text-gray-600'>{product.weight}</span>
                      </div>
                    )}
                    {product?.specialty && (
                      <div className='flex text-xs sm:text-sm'>
                        <span className='w-24 sm:w-32 font-semibold text-gray-900'>
                          Specialty:
                        </span>
                        <span className='text-gray-600'>
                          {product.specialty}
                        </span>
                      </div>
                    )}
                    {product?.itemForm && (
                      <div className='flex text-xs sm:text-sm'>
                        <span className='w-24 sm:w-32 font-semibold text-gray-900'>
                          Items:
                        </span>
                        <span className='text-gray-600'>
                          {product.itemForm}
                        </span>
                      </div>
                    )}
                    {product?.info && (
                      <div className='flex text-xs sm:text-sm'>
                        <span className='w-24 sm:w-32 font-semibold text-gray-900'>
                          Info:
                        </span>
                        <span className='text-gray-600'>{product.info}</span>
                      </div>
                    )}
                  </div>

                  <div className='flex items-center gap-2 sm:gap-3'>
                    <span className='text-2xl sm:text-3xl font-bold text-red-600'>
                      ${product?.newPrice}
                    </span>
                    <span className='text-lg sm:text-xl text-gray-400 line-through'>
                      ${product?.oldPrice}
                    </span>
                  </div>

                  {product?.sizesAvailable &&
                    product.sizesAvailable.length > 0 && (
                      <div>
                        <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3'>
                          <span className='text-xs sm:text-sm font-semibold text-gray-900'>
                            Size / Weight:
                          </span>
                          <div className='flex flex-wrap gap-2'>
                            {product.sizesAvailable.map((size) => (
                              <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                                  selectedSize === size
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  {/* Action buttons - responsive layout */}
                  <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-3 sm:pt-4'>
                    {/* Quantity selector */}
                    <div className='flex items-center border border-gray-300 rounded-lg w-full sm:w-auto'>
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className='p-2 hover:bg-gray-50 transition-colors'
                      >
                        <Minus size={16} />
                      </button>
                      <span className='px-4 py-2 font-semibold min-w-[50px] text-center text-sm sm:text-base'>
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className='p-2 hover:bg-gray-50 transition-colors'
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product?.isInStock}
                      className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-all flex-1 ${
                        product?.isInStock
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart size={18} className='sm:w-5 sm:h-5' />
                      <span className='whitespace-nowrap'>
                        {product?.isInStock ? 'Add To Cart' : 'Out of Stock'}
                      </span>
                    </button>

                    <button
                      onClick={() => HandleaddTowishlist(product)}
                      disabled={!product?.isInStock}
                      className={`hidden sm:flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex-1 lg:flex-initial
    ${
      product?.isInStock
        ? 'bg-linear-to-r from-[#F53E32] to-[#FF6B6B] text-white hover:from-[#e1342a] hover:to-[#ff5252] shadow-md hover:shadow-lg'
        : 'bg-gray-200 text-gray-500 border border-gray-300 cursor-not-allowed opacity-70'
    }`}
                    >
                      <Heart
                        size={18}
                        className={`sm:w-5 sm:h-5 transition-transform duration-300 ${
                          product?.isInStock ? 'hover:scale-110' : 'opacity-50'
                        }`}
                      />
                      <span className='hidden lg:inline'>
                        {product?.isInStock
                          ? 'Add to Wishlist'
                          : 'Out of Stock'}
                      </span>
                    </button>

                    {/* Mobile wishlist button */}
                    <button
                      onClick={() => HandleaddTowishlist(product)}
                      disabled={!product?.isInStock}
                      className={`sm:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all
    ${
      product?.isInStock
        ? 'bg-red-500 text-white hover:bg-red-600'
        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
    }`}
                    >
                      <Heart size={18} />
                      <span>Wishlist</span>
                    </button>

                    {/* Share button */}
                    <button className='p-2.5 border border-gray-300 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors sm:flex-shrink-0'>
                      <Share2 size={18} className='sm:w-5 sm:h-5' />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs section - responsive */}
            <div className='bg-white border border-gray-50 p-2 sm:p-3 rounded-lg overflow-hidden'>
              <div className='flex border-b border-gray-200 overflow-x-auto'>
                {['description', 'information', 'review'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 sm:px-6 py-3 sm:py-4 font-semibold text-nowrap text-xs sm:text-sm capitalize transition-colors relative flex-shrink-0 ${
                      activeTab === tab
                        ? 'text-red-500'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-red-500' />
                    )}
                  </button>
                ))}
              </div>

              <div className='p-4 sm:p-6 text-gray-600 leading-relaxed text-sm sm:text-base'>
                {activeTab === 'description' && (
                  <div>
                    <p className='mb-4'>
                      {product?.description || 'No description available.'}
                    </p>
                  </div>
                )}
                {activeTab === 'information' && (
                  <p>
                    {product?.info || 'No additional information available.'}
                  </p>
                )}
                {activeTab === 'review' && (
                  <p>
                    {product?.Review
                      ? `${product.Review} customer reviews available.`
                      : 'No reviews yet. Be the first to review this product!'}
                  </p>
                )}
              </div>
              <div className='px-4 sm:px-6 pb-4 sm:pb-6'>
                <h1 className='font-manrope py-2 font-bold text-base sm:text-[19px] text-black'>
                  Packing and Delivery
                </h1>
                <hr className='text-gray-200 py-3 sm:py-4' />
                <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores odit aperiam, eum repudiandae, omnis ullam maiores
                  incidunt necessitatibus, dolor asperiores aspernatur! Dolor
                  amet id nostrum non nulla est facere inventore iure,
                  consequatur, quia, cumque eveniet hic labore modi rerum ad
                  soluta. Rerum hic sed neque necessitatibus. Et, autem
                  accusamus aperiam corrupti laudantium cum voluptate a
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular products section - responsive */}
        <div className='flex flex-col justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-12 mb-8 sm:mb-12'>
          <h1 className='text-xl sm:text-2xl font-bold text-center'>
            Popular Products
          </h1>
          <p className='text-xs sm:text-sm text-center text-gray-600 max-w-3xl px-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, aliquid voluptate temporibus totam nesciunt laborum
            soluta dolorem magni, eos fuga recusandae? Sunt similique esse,
            facere ducimus accusamus eum repudiandae dolores?
          </p>
          {/* Product grid - responsive columns */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-12 w-full'>
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className='flex justify-center'>
                <ProductSingleCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
