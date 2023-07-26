import React from 'react';
import MiAuriga from '../assets/MiAuriga.jpg';
import LoopStudio from '../assets/LoopStudios-Tailwind.jpg';
import SmartAdria from '../assets/SmartAdria-project.png';
import WeatherWise from '../assets/Weather-Wise-React.png';
import Contextual from '../assets/Contextual.png';
import JavaScript from '../assets/Photo-Editor.png';

const Work = () => {
    return (
        <div
            name='work'
            className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
            {/* container for projects*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-grey-300 border-pink-500'>
                        Coding Projects
                    </p>
                    <p className='py-6'>Look at some of my works</p>
                </div>

                {/* grid container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* grid items */}
                    <div
                        style={{ backgroundImage: `url(${SmartAdria})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Smart Adria Project
                            </span>
                            {/* Here is the first */}
                            <div className='pt-8 text-center'>
                                <a href='https://smartadria.net/'>
                                    <button className='text-cetner rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-cetner rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* item 2 */}
                    <div
                        style={{ backgroundImage: `url(${MiAuriga})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                miAuriga Project
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://miauriga-frontend-staging.up.railway.app/'>
                                    <button className='text-cetner rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-cetner rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* item 3 */}
                    <div
                        style={{ backgroundImage: `url(${LoopStudio})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Tailwind Project
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://tailwind-frontend-challenges-rc7tstj4j-oerdbej.vercel.app/'>
                                    <button className='text-cetner rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-cetner rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* item 4 */}
                    <div
                        style={{ backgroundImage: `url(${WeatherWise})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather Wise Project
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://weatherwise.netlify.app/'>
                                    <button className='text-cetner rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-cetner rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* item 5 */}
                    <div
                        style={{ backgroundImage: `url(${JavaScript})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Photo Editor Project
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://photo-editor-gamma.vercel.app/'>
                                    <button className='text-cetner rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-cetner rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* item 6 */}
                    <div
                        style={{ backgroundImage: `url(${Contextual})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Contextual Project
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://contextual-todo.vercel.app/'>
                                    <button className='text-cetner rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-cetner rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg'>
                                        Code
                                    </button>
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
