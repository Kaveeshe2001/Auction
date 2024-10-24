import React from 'react';
import { FcCurrencyExchange } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../Libs/Const/Navigations';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

function SidebarLink({ item }) {
    const { pathname } = useLocation();
    const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);

    return (
        <Link
            to={item.path}
            className={`${linkClasses} ${isActive ? 'bg-neutral-700 text-white' : 'text-neutral-400'}`}
        >
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    );
}

const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        // Clear authentication
        localStorage.removeItem('token');
        // Navigate to product page
        navigate('/productpage');
    };

    return (
        <div className='flex flex-col bg-neutral-900 w-60 p-3 text-white'>
            {/* Logo and Brand */}
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcCurrencyExchange fontSize={24}/>
                <span className='text-blue-500 text-lg font-semibold'>Coino</span>
            </div>

            {/* Main Navigation Links */}
            <div className='flex-1 py-8 flex flex-col gap-0.5'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>

            {/* Bottom Links */}
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>

            {/* Logout Button */}
            <div
                onClick={handleLogout}
                className={`text-red-500 cursor-pointer ${linkClasses}`}
            >
                <span className='text-xl'><HiOutlineLogout /></span>
                Logout
            </div>
        </div>
    );
};

export default SideBar;