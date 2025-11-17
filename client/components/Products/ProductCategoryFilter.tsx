import React, { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/constant/products';

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  colors: string[];
  weights: string[];
  tags: string[];
}

const ProductCategoryFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
  // const [expandedSections, setExpandedSections] = useState({
  //   category: true,
  //   price: true,
  //   color: true,
  //   weight: true,
  //   tags: true,
  // });

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [40, 250],
    colors: [],
    weights: [],
    tags: [],
  });

  const colors = [
    { name: 'Blue', color: '#5B9CFF' },
    { name: 'Yellow', color: '#FFD700' },
    { name: 'Red', color: '#FF6B6B' },
  ];

  const weights = ['5kg Pack', '20kg Pack', '30kg Pack'];

  // const toggleSection = (section: keyof typeof expandedSections) => {
  //   setExpandedSections((prev) => ({
  //     ...prev,
  //     [section]: !prev[section],
  //   }));
  // };

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...new Set([...filters.categories, category])];

    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  const uniqDadata = [...new Set(products.map((item) => item.category))];
  const handleColorChange = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];

    const newFilters = { ...filters, colors: newColors };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleWeightChange = (weight: string) => {
    const newWeights = filters.weights.includes(weight)
      ? filters.weights.filter((w) => w !== weight)
      : [...filters.weights, weight];

    const newFilters = { ...filters, weights: newWeights };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleTagClick = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter((t) => t !== tag)
      : [...filters.tags, tag];

    const newFilters = { ...filters, tags: newTags };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newPriceRange: [number, number] = [...filters.priceRange] as [
      number,
      number
    ];
    newPriceRange[index] = Number(e.target.value);

    const newFilters = { ...filters, priceRange: newPriceRange };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className='w-64 bg-white p-4 rounded-lg shadow-sm border border-gray-100'>
      <div className='mb-6'>
        <h3 className='text-gray-800 font-semibold text-sm mb-4'>
          Product Category
        </h3>
      </div>
      <div className='space-y-3'>
        {uniqDadata.map((cate) => (
          <label
            key={cate.id}
            className='flex items-center justify-between cursor-pointer group'
          >
            <div className='flex items-center'>
              <input
                type='checkbox'
                checked={filters.categories.includes(cate.category ?? '')}
                onChange={() => handleCategoryChange(cate.category ?? '')}
                className='w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500'
              />
              <span className='ml-3 text-gray-600 text-sm group-hover:text-gray-900'>
                {cate.category ?? 'Unknown'}
              </span>
            </div>

            <span className='text-gray-400 text-xs'>
              ({cate.category?.length})
            </span>
          </label>
        ))}
      </div>

      <div className='mb-6'>
        <h3 className='text-gray-800 font-semibold text-sm mb-4'>
          Filter By Price
        </h3>
        <div className='space-y-4'>
          <div className='relative'>
            <input
              type='range'
              min='0'
              max='500'
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500'
              style={{
                background: `linear-gradient(to right, #22c55e ${
                  (filters.priceRange[0] / 500) * 100
                }%, #e5e7eb ${(filters.priceRange[0] / 500) * 100}%)`,
              }}
            />
            <input
              type='range'
              min='0'
              max='500'
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500 -mt-2'
              style={{
                background: `linear-gradient(to right, #e5e7eb ${
                  (filters.priceRange[1] / 500) * 100
                }%, #22c55e ${(filters.priceRange[1] / 500) * 100}%)`,
              }}
            />
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-gray-600 text-sm'>
              Price: ${filters.priceRange[0]} — ${filters.priceRange[1]}
            </span>
          </div>
          <button className='w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors'>
            Filter
          </button>
        </div>
      </div>

      <div className='mb-6'>
        <h3 className='text-gray-800 font-semibold text-sm mb-4'>
          Product Category
        </h3>
        <div className='space-y-3'>
          {colors.map((color) => (
            <label
              key={color.name}
              className='flex items-center cursor-pointer group'
            >
              <input
                type='checkbox'
                checked={filters.colors.includes(color.name)}
                onChange={() => handleColorChange(color.name)}
                className='sr-only'
              />
              <div
                className={`w-5 h-5 rounded border-2 ${
                  filters.colors.includes(color.name)
                    ? 'border-gray-800'
                    : 'border-gray-300'
                }`}
                style={{ backgroundColor: color.color }}
              />
              <span className='ml-3 text-gray-600 text-sm group-hover:text-gray-900'>
                {color.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className='mb-6'>
        <h3 className='text-gray-800 font-semibold text-sm mb-4'>Weight</h3>
        <div className='space-y-3'>
          {weights.map((weight) => (
            <label
              key={weight}
              className='flex items-center cursor-pointer group'
            >
              <input
                type='checkbox'
                checked={filters.weights.includes(weight)}
                onChange={() => handleWeightChange(weight)}
                className='w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500'
              />
              <span className='ml-3 text-gray-600 text-sm group-hover:text-gray-900'>
                {weight}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className='mb-6'>
        <h3 className='text-gray-800 font-semibold text-sm mb-4'>
          Products Tags
        </h3>
        <div className='flex flex-wrap gap-2'>
          {products.map((tag, index) => (
            <button
              key={`${tag}-${index}`}
              onClick={() => handleTagClick(tag.category ?? '')}
              className={`px-3 py-1.5 rounded-md text-xs transition-colors ${
                filters.tags.includes(tag.category ?? '')
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tag.category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryFilter;
