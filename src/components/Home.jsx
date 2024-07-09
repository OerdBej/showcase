import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]' name='home'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
        <p className='text-pink-500'>Hi my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold-text text-[#ccd6f6]'>
          Oerd Bej
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold-text text-[#8892b0] '>
          Fullstack Developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Fullstack Developer with more than 2.5 years of experience
          specializing in the JavaScript ecosystem, with a strong
          emphasis on React and Typescript. Dedicated to lifelong
          learning, I embody a growth mindset and excel in creative
          problem-solving. My expertise is further enhanced by proven
          leadership abilities and exceptional communication skills.
        </p>
        {/* button */}
        <div>
          <Link to='work' smooth={true} offset={50} duration={500}>
            <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-300  '>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-7' />
              </span>
            </button>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
