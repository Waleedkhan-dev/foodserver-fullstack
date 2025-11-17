import { features, stats } from '@/constant/AboutPageData';
import about from '../../public/imges/cart2.png';
import Image from 'next/image';
import { Fragment } from 'react/jsx-runtime';
import SectionHeader from '@/components/common/Breadcrumb';

const page = () => {
  return (
    <Fragment>
      <SectionHeader title='About Us' routeText='Home - About Us' />

      <div className='w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto px-4 sm:px-0'>
        <div className='mt-10 sm:mt-20 lg:mt-35'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start'>
            <div>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6'>
                About The Carrot
              </h2>
              <div className='space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci repudiandae suscipit quae quas incidunt vitae
                  lobortis placeat ullam sit facilisi euismod neque quid.
                  Tempore magna neque et vulputate magus
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  vitae ipsum quis discrietions integer consequatur incididunt.
                  Ipsum llorem egurate elebifang elit ac eros simpicisis
                  ultricies amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accumsan maxime amet sed mollis eu diam facilisis qus eu
                  molestie etincidunt malesuada class torce lorem maurciat sit
                  lorem. Intesigum elementem lorem.
                </p>
              </div>

              <div className='grid grid-cols-3 bg-gray-200 py-6 sm:py-8 lg:py-10 rounded-md gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12'>
                {stats.map((stat, index) => (
                  <div key={index} className='text-center px-1 sm:px-2'>
                    <div className='mb-1 sm:mb-2'>
                      <span className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-500'>
                        {stat.number}
                      </span>
                      <span className='text-xl sm:text-2xl lg:text-3xl font-bold text-red-500'>
                        {stat.unit}
                      </span>
                      {index < stats.length - 1 && (
                        <span className='text-xl sm:text-2xl lg:text-3xl font-bold text-red-300 ml-1 sm:ml-2'>
                          +
                        </span>
                      )}
                    </div>
                    <p className='text-xs sm:text-sm font-semibold text-gray-700'>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image section - responsive sizing */}
            <div className='relative mt-8 lg:mt-0'>
              <div className='aspect-square w-full mb-8 sm:mb-10 lg:mb-12 flex items-start justify-center h-[300px] sm:h-[400px] lg:h-[480px] bg-linear-to-br rounded-3xl overflow-hidden'>
                <Image
                  src={about}
                  alt='about'
                  fill
                  className='object-cover object-right mb-9 top-0'
                />
              </div>

              {/* Decorative SVG - only show on xl screens */}
              <div className='absolute -left-12 top-1/2 transform -translate-y-1/2 hidden xl:block'>
                <div className='w-24 h-24 opacity-20'>
                  <svg
                    viewBox='0 0 100 100'
                    className='text-orange-400 fill-current'
                  >
                    <path d='M50 10 Q55 15 50 20 Q45 15 50 10 M50 20 L45 90 Q45 95 50 95 Q55 95 55 90 L50 20' />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-12 sm:mt-16 lg:mt-20 mb-12 sm:mb-16'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-gray-50 rounded-2xl p-5 sm:p-6 hover:shadow-md transition-shadow duration-300'
              >
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-sm'>
                  <feature.icon className='text-green-600' size={20} />
                </div>
                <h3 className='text-base sm:text-lg font-bold text-gray-900 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default page;
