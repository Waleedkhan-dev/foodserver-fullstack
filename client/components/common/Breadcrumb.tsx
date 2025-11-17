import React from 'react';

interface SectionHeaderProps {
  title: string; // e.g. "Shop"
  routeText: string; // e.g. "Home / Shop"
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, routeText }) => {
  return (
    <div className='bg-[#F53E32]'>
      <div className='flex w-[80%] mx-auto justify-between items-center py-4 mb-6  border-gray-200'>
        <h1 className='font-manrope font-bold text-[19px] leading-[19px] text-white tracking-[0.48px] align-middle'>
          {title}
        </h1>
        <h2 className='font-manrope font-bold text-[19px] text-white leading-[19px] tracking-[0.48px] align-middle'>
          {routeText}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
