import React from 'react';
import MiAuriga from '../assets/MiAuriga.jpg';
import LoopStudio from '../assets/LoopStudios-Tailwind.jpg';

const Work = () => {
    return (
        <div
            name='work'
            className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
            {/* container for projects*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-grey-300 border-pink-500'>
                        Work
                    </p>
                    <p className='py-6'>Look at some of my works</p>
                </div>

                {/* grid container */}
                <div
                    style={{ backgroundImage: `url(${LoopStudio})` }}
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* the shadow section */}
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Tailwind Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button>Demo</button>
                                </a>
                                <a href='/'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
