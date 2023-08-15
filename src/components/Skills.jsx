import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.png';
import React from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import TypeScript from '..//assets/typescript.png';
import Material from '../assets/Material.png';
const Skills = () => {
    return (
        <div
            name='skills'
            className='bg-[#0a192f] w-full h-screen text-gray-300'>
            {/* the div container */}
            <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline  border-b-4 border-pink-600'>
                        Technology
                    </p>
                    <p className='py-4'>
                        These are some of the stacks that I am comfortable
                        working on.
                    </p>
                </div>
                {/* div container for all the icons*/}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-pink hover:scale-110 duration-300'>
                        <img
                            className='w-20 mx-auto'
                            src={HTML}
                            alt='html logo'
                        />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-pink hover:scale-110 duration-300'>
                        <img
                            className='w-20 mx-auto'
                            src={CSS}
                            alt='css logo'
                        />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-pink hover:scale-110 duration-300'>
                        <img
                            className='w-20 mx-auto'
                            src={Tailwind}
                            alt='tailwind logo'
                        />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-pink hover:scale-110 duration-300'>
                        <img
                            className='w-20 mx-auto'
                            src={Material}
                            alt='material ui logo'
                        />
                        <p className='my-4'>Material UI</p>
                    </div>
                    <div className='shadow-md shadow-pink hover:scale-110 duration-300'>
                        <img
                            className='w-20 mx-auto'
                            src={JavaScript}
                            alt='javascript logo'
                        />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-pink hover:scale-110 duration-300'>
                        <img
                            className='w-20 mx-auto'
                            src={TypeScript}
                            alt='html logo'
                        />
                        <p className='my-4'>TypeScript</p>
                    </div>
                    <div className='shadow-md shadow-pink hover:scale-110 duration-300'>
                        <img
                            className='w-20 mx-auto'
                            src={Node}
                            alt='note logo'
                        />
                        <p className='my-4'>Node</p>
                    </div>
                    <div className='shadow-md shadow-pink hover:scale-110 duration-300'>
                        <img
                            className='w-20 mx-auto'
                            src={Mongo}
                            alt='MongoDb logo'
                        />
                        <p className='my-4'>Mongo</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
