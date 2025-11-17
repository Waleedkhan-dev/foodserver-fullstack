import { DeliveryData } from '@/constant/StayhomeCardData';

const Cards = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {DeliveryData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className='flex items-center gap-4 p-5 bg-gray-50 rounded-lg hover:shadow-md transition-shadow'
            >
              <div className='shrink-0'>
                <Icon className='w-12 h-12 text-green-600' strokeWidth={1.5} />
              </div>
              <div className='flex flex-col'>
                <h3 className='text-sm font-semibold text-gray-800 mb-1'>
                  {item.title}
                </h3>
                <p className='text-xs text-gray-500'>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
