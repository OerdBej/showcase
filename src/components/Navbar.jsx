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
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* hamburger: medium hide icons*/}
            <div className='md:hidden z-10'>
                <FaBars />
            </div>

            {/* mobile */}
            <ul className='absolute top-0 left-0 w-full h-screen bg-[#414756] flex flex-col justify-center items-center'>
                <li className='p-6 text-4xl'>Home</li>
                <li className='p-6 text-4xl'>About</li>
                <li className='p-6 text-4xl'>Experience</li>
                <li className='p-6 text-4xl'> Work</li>
                <li className='p-6 text-4xl'>Contact</li>
            </ul>

            {/* social */}
            <div className='hidden'></div>
        </div>
    );
};

export default Navbar;
