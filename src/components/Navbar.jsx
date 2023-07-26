import React from 'react';
import logo from '../assets/oerdbej.png';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react';

const Navbar = () => {
    // toggle
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    };
    return (
        <div className='fixed w-full h-[80px] flex justify-between text-gray-300 items-center px-4 bg-[#414756]  '>
            <div>
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
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#414756] flex flex-col justify-center items-center '
                }>
                <li className='p-6 text-4xl'>Home</li>
                <li className='p-6 text-4xl'>About</li>
                <li className='p-6 text-4xl'>Experience</li>
                <li className='p-6 text-4xl'> Work</li>
                <li className='p-6 text-4xl'>Contact</li>
            </ul>

            {/* social */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/oerdbej/'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/OerdBej'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
