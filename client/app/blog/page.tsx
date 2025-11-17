import React, { Fragment } from 'react';
import { Search } from 'lucide-react';
import {
  blogPosts,
  filterPhotos,
  popularTags,
  recentPosts,
} from '@/constant/blog';
import Image from 'next/image';
import SectionHeader from '@/components/common/Breadcrumb';
import { FaRegCommentDots } from 'react-icons/fa';

// Types

const BlogPage = () => {
  const mainPost = blogPosts[0];

  return (
    <Fragment>
      <SectionHeader title='Blog' routeText='Home - Blog' />
      <div className='min-h-screen w-[80%] mx-auto bg-white'>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2'>
              <article className='mb-8'>
                <Image
                  src={mainPost.image}
                  alt="Featured Post's Image"
                  className='w-full h-96 object-cover rounded-lg mb-6'
                />

                <div className='flex items-center gap-4 text-sm text-gray-500 mb-4'>
                  <span className='flex items-center gap-1'>
                    <span className='text-[#F53E32]'>By {mainPost.author}</span>
                    / 7 comment/ {mainPost.date}
                  </span>
                  <span className='flex items-center gap-1'>
                    {mainPost.category}
                  </span>
                </div>

                <h1 className='text-3xl font-bold text-gray-900 mb-4'>
                  {mainPost.title}
                </h1>

                <p className='text-gray-600 leading-relaxed mb-6'>
                  {mainPost.description}
                </p>

                <p className='text-gray-600 leading-relaxed mb-6'>
                  {mainPost.excerpt}
                </p>

                <div className='grid grid-cols-2 gap-4 mb-6'>
                  {mainPost.imageGallery.map((img, idx) => (
                    <div key={idx}>
                      <Image
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        className='w-full h-64 object-cover rounded-lg'
                      />
                      <div>
                        <h1 className='font-semibold'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>

                <p className='text-gray-600 leading-relaxed'>
                  Consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
                <div className='flex items-center justify-between p-4'>
                  <h1 className='text-[#F53E32]'>{mainPost.author}</h1>
                  <span>
                    <FaRegCommentDots size={20} />
                  </span>
                </div>
              </article>

              <div className='flex items-center justify-center gap-2 mt-8'>
                <button className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50'>
                  ←
                </button>
                <button className='w-10 h-10 flex items-center justify-center bg-[#F53E32] text-white rounded'>
                  1
                </button>
                <button className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50'>
                  2
                </button>
                <button className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50'>
                  3
                </button>
                <button className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50'>
                  →
                </button>
              </div>
            </div>

            <aside className='lg:col-span-1'>
              <div className='bg-white border border-gray-200 rounded-lg p-4 mb-6'>
                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Search...'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg pr-10'
                  />
                  <button className='absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#F53E32] rounded flex items-center justify-center'>
                    <Search size={16} className='text-white' />
                  </button>
                </div>

                <div className='bg-white  rounded-lg py-6 mb-6 text-start'>
                  <h3>Category</h3>
                  <div className=' space-y-2.5'>
                    {blogPosts.map((tag, idx) => (
                      <div
                        key={idx}
                        className='flex border border-gray-100 px-4 py-1 justify-between items-center'
                      >
                        <p>{tag.category}</p>
                        <p className='text-gray-600'>({tag.category.length})</p>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className='font-bold text-gray-900 mb-4'>Recent Post</h3>
                <div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
                  <div className='space-y-4'>
                    {recentPosts.slice(0, 1).map((post, idx) => (
                      <div key={idx} className='gap-3'>
                        <Image
                          src={post.image}
                          alt={post.title[0]}
                          className='w-80 h-40 object-cover rounded'
                        />
                        <div className='flex-1'>
                          <p className='text-xs text-center  text-[#F53E32]'>
                            {post.date}
                          </p>
                          <h4 className=' text-center font-semibold text-gray-900 mb-1'>
                            {post.title}
                          </h4>
                          <p className='text-center'>
                            Lorem ipsum dolor sit amet consectetur{' '}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='bg-white  rounded-lg p-6 mb-6'>
                  <h3 className='font-bold text-gray-900 mb-4'>
                    Latest Gallary
                  </h3>
                  <div className='grid grid-cols-3 gap-2'>
                    {filterPhotos.map((photo, idx) => (
                      <Image
                        key={idx}
                        src={photo}
                        alt={`Filter ${idx + 1}`}
                        className='w-full h-20 object-cover rounded cursor-pointer hover:opacity-80'
                      />
                    ))}
                  </div>
                </div>

                <div className='bg-white  p-6'>
                  <h3 className='font-bold text-gray-900 mb-4'>Popular Tags</h3>
                  <div className='flex flex-wrap gap-2'>
                    {popularTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className='px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-[#F53E32] hover:text-white cursor-pointer transition-colors'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPage;
