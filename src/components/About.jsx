import React from 'react';

const About = () => {
    return (
        <div
            name='about'
            className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Take a look at a selection of my projects.</p>{' '}
                    </div>
                    <div>
                        <p className='font-medium'>
                            Are you ready to unlock the full potential of your
                            digital world? With my expertise in crafting
                            software solutions, I can turn your vision into a
                            reality. Whether you're an individual, small
                            business, or large enterprise, let's collaborate to
                            create software that exceeds your expectations.
                            Ready to take the leap towards innovation and
                            success?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
