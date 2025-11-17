import Image, { StaticImageData } from 'next/image';
import cart1 from '../public/imges/cart.png';
import cart2 from '../public/imges/cart1.png';
import cart3 from '../public/imges/cart2.png';

interface CardProps {
  title: string;
  image: StaticImageData;
  color: string;
}

const Card = () => {
  const cardData: CardProps[] = [
    {
      title: 'Everyday Fresh & Clean with Our Products',
      image: cart1,
      color: 'bg-[#FEF3E8]',
    },
    {
      title: 'Make your Breakfast Healthy and Easy',
      image: cart2,
      color: 'bg-[#FFE8F0]',
    },
    {
      title: 'The best Organic Products Online',
      image: cart3,
      color: 'bg-[#E5F3FF]',
    },
  ];

  return (
    <div className='w-[90%] mx-auto py-6'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {cardData.map((val, index) => {
          return (
            <div
              key={index}
              className={`flex items-center justify-between px-6  rounded-lg ${val.color}`}
            >
              <div className='flex flex-col items-start gap-5 flex-1 pr-4'>
                <h1 className='font-semibold text-[15 px] leading-tight text-gray-900'>
                  {val.title}
                </h1>
                <button className='bg-[#FF6B58] text-white px-6 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity'>
                  Shop Now
                </button>
              </div>

              <div className='w-[180px] h-[200px] relative  shrink-0'>
                <Image
                  src={val.image}
                  alt='product'
                  className='w-full h-full object-cover object-right'
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
