'use client';
import { Fragment, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import faqImage from '../../public/hero/faq.jpg';
import Image from 'next/image';
import { faqData } from '@/constant/faq';
import SectionHeader from '@/components/common/Breadcrumb';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Fragment>
      <SectionHeader title='FAQ' routeText='Home - FAQ' />
      <div className='w-[80%] mx-auto'>
        <div className='min-h-screen bg-white'>
          <div className='grid lg:grid-cols-2 items-start grid-cols-1'>
            <div className='lg:h-[70vh] mt-4 h-64 lg:sticky lg:top-0'>
              <Image
                src={faqImage}
                alt='Fresh vegetables and fruits'
                className='w-full h-full object-cover'
              />
            </div>

            <div className=' px-8 '>
              <div className='max-w-2xl flex flex-col items-start '>
                {faqData.map((val, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className=' px-2 space-y-2 last:border-b-0'
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className='w-full py-5 border border-gray-100 flex items-start justify-between text-left hover:opacity-70 transition-opacity'
                      >
                        <h4 className='text-base sm:text-lg  font-medium text-gray-800 pr-4 flex-1'>
                          {val.question}
                        </h4>
                        <span
                          className={`shrink-0 mt-1 transition-transform duration-300 ${
                            isOpen ? 'rotate-90' : ''
                          }`}
                        >
                          <ChevronRight className='w-5 h-5 text-gray-500' />
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className='text-sm sm:text-base text-gray-600 border border-gray-100 p-3 pb-5 pr-8 leading-relaxed'>
                          {val.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FaqPage;
