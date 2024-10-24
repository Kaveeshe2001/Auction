import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi';
import React from 'react';

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/profile', // Updated to match the profile route
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'coinItems',
        label: 'Coin',
        path: '/profile/coinItems', // Updated to match nested route
        icon: <HiOutlineShoppingCart />
    },
    {
        key: 'addCoin',
        label: 'Add Coin',
        path: '/profile/addCoin', // Updated to match nested route
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'addCategory',
        label: 'Add Category',
        path: '/profile/addCategory', // Updated to match nested route
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/profile/orders', // Updated to match nested route
        icon: <HiOutlineCube />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/profile/customers', // Updated to match nested route
        icon: <HiOutlineShoppingCart />
    },
    {
        key: 'transactions',
        label: 'Transactions',
        path: '/profile/transactions', // Updated to match nested route
        icon: <HiOutlineDocumentText />
    },
    {
        key: 'messages',
        label: 'Messages',
        path: '/profile/messages', // Updated to match nested route
        icon: <HiOutlineAnnotation />
    }
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/profile/settings', // Updated to match nested route
        icon: <HiOutlineCog />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/profile/support', // Updated to match nested route
        icon: <HiOutlineQuestionMarkCircle />
    }
];