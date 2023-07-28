import React from 'react';

const Contact = () => {
    return (
        <div
            name='contact'
            className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 border-2 border-red-500'>
            <form action='' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 border-2 border-green-400'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-500'>
                        Contact
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Contact;
