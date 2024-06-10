/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { getInitials } from "../../utils/helper";


// eslint-disable-next-line react/prop-types
const ProfileInfo = ({ userInfo, onLogout}) => { 
    const isMobile = window.innerWidth < 768;

    return (
        <div className="flex items-center gap-3">
             {!isMobile && (
                <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-gray">
                    {getInitials(userInfo?.fullName)}
                </div>
            )}

        <div className="text-center font-medium" style={{ fontSize: isMobile ? '10px' : 'inherit' }}>
            <p className="text-gray font-medium">{userInfo?.fullName}</p>
            <button className="text-white text-slate-700 underline" onClick={onLogout}>
                Logout
            </button>
        </div>
        </div>
    )
}
export default ProfileInfo;