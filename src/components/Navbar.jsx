import React from 'react';
import logo from '../assets/oerdbej.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between text-gray-300 items-center px-4 bg-[#414756] border-2 border-red-500'>
            <div className='border-2 border-red-500'>
                <img src={logo} alt='oerd bej' style={{ width: '140px' }} />
            </div>
            {/* list items menu */}
            <div>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
            {/* Hamburger */}
            <div className='hidden'>
                <FaBars />
            </div>
            {/* logo */}
            <div>
                <ul className='hidden'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
