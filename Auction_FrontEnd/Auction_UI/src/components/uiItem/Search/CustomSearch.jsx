import React from 'react';
import { RiSearchLine } from '@remixicon/react';

const CustomSearch = () => {
  return (
    <form className="hidden xl:flex">
      <div className="flex min-w-[468px] relative 2xl:min-w-[400px]">
        <input
          type="text"
          placeholder="Search your product..."
          className="border border-gray-200/20 rounded-l-md bg-transparent h-12 text-white w-full px-5 outline-none text-sm"
        />
        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center me-2 mb-2">
          <RiSearchLine size={20} color="#ffffff" className="ri-search" />
        </button>
      </div>
    </form>
  );
};

export default CustomSearch;