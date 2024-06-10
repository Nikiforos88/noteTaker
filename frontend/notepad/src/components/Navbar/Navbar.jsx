/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const Navbar = ({userInfo, onSearchNote, handleClearSearch}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const isMobile = window.innerWidth < 768;

    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear();
        navigate("/login")
    };

    const handleSearch = () => {
        if (searchQuery) {
            onSearchNote(searchQuery);
        }
    }

    const onClearSearch = () => {
        setSearchQuery("");
        handleClearSearch();
    }

    return (
        <div className="bg-brown flex items-center justify-between px-6 py-2 drop-shadow">
            <h2 className="text-xl font-medium text-white py-2" style={{ fontSize: isMobile ? '10px' : 'inherit' }}>NoteTaker</h2>

            <SearchBar  
                value={searchQuery}
                onChange={({ target }) => {
                    setSearchQuery(target.value)
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />

            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </div>
    )
}

export default Navbar