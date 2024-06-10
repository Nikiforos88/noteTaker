// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


// eslint-disable-next-line react/prop-types
const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
    const isMobile = window.innerWidth < 768;

    return (
        <div className="flex items-center px-4 rounded-md text-darkgray bg-beige" style={{ width: isMobile ? '45%' : '30%'}}>
            <input 
                type="text"
                placeholder="Search Notes..."
                className="text-darkgray w-full text-xs py-[11px] outline-none bg-beige text-darkgray"
                style={{ fontSize: isMobile ? '11px' : '16px' }}
                value={value}
                onChange={onChange}
            />

            {value && (<IoMdClose className="text-xl cursor-pointer hover:text-black" onClick={onClearSearch} />)} 
            <FaMagnifyingGlass className="cursor-pointer hover:text-black" onClick={handleSearch} />

        </div>
    );
};

export default SearchBar