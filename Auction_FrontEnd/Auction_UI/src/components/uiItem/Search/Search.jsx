import React from 'react';
import { RiSearchLine } from '@remixicon/react';
import Search from './components/uiItem/Search/Search';

const Search = () => {
  return (
    <form className="hidden xl:flex">
      <div className="flex min-w-[468px] relative 2xl:min-w-[400px]">
        <input
          type="text"
          placeholder="Search your product..."
          className="border border-gray-200/20 rounded-l-md bg-transparent h-12 text-white w-full px-5 outline-none text-sm"
        />
        <button className="px-8 bg-[#01aa85] rounded-r-md border-none overflow-hidden z-10 relative flex items-center justify-center transition duration-500 cursor-pointer hover:after:transform hover:after:skew-x-45 hover:after:scale-x-100 after:absolute after:content-[''] after:block after:left-[15%] after:right-[-20%] after:top-[-4%] after:h-[160%] after:w-[160%] after:bottom-0 after:rounded after:bg-white after:transform after:skew-x-45 after:scale-x-0 after:-z-10 after:transition-all after:duration-500 after:ease-out after:delay-0 hover:fill-black xl:px-6">
          <RiSearchLine size={20} color="#ffffff" className="ri-search" />
        </button>
      </div>
    </form>
  );
};

export default Search;