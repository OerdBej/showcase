import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div className='w-full h-screen bg-[#0a192f]' name='name'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full border-2 border-red-500'>
                <p className='text-pink-500'>Hi my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold-text text-[#ccd6f6]'>
                    Oerd Bej
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold-text text-[#8892b0] border-2 border-red-500'>
                    Full stack
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora hic nisi assumenda minima autem. Consectetur soluta
                    illum delectus laborum mollitia harum error expedita.
                </p>
                {/* button */}
                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 flex-items-center hover:bg-pink-500 hover:border-pink-300 border-2 border-red-500 '>
                        View Work
                        <span>
                            <HiArrowNarrowRight className='ml-7 ' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
