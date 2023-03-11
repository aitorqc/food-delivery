import React from 'react'

import Logo from '../assets/img/logo.png';
import {MdShoppingBasket} from 'react-icons/md';

export default function Header() {
    return (
        <div className='fixed z-50 w-screen p-6 px-16'>
            {/* Desktop */}
            <div className='hidden md:flex w-full h-full'>
                <div className="flex items-center gap-2">
                    <img src={Logo} className='w-10 object-cover' alt="logo"/>
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </div>

                <ul className='flex items-center gap-8 ml-auto'>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer'>Home</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer'>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer'>About Us</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer'>Service</li>
                </ul>

                <div className='relative'>
                    <MdShoppingBasket/>
                </div>
            </div>

            {/* Mobile */}
            <div className='flex md:hidden w-full h-full'>

            </div>
        </div>
    )
}
