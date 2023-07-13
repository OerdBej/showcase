import React from 'react';

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
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div>
                        <div>
                            <span></span>
                            <div>
                                <a href='/'>
                                    <button></button>
                                </a>
                                <a href='/'>
                                    <button></button>
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
