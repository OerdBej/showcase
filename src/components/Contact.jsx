import React from 'react';

const Contact = () => {
    return (
        <div
            name='contact'
            className='w-full h-screen bg-[#0a192f] flex
            justify-center items-center p-4 '>
            <form action='' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8   '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300'>
                        Contact
                    </p>
                    <p className='text-gray-300 py-4'>Contact email</p>
                </div>
                {/* input form */}
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    className='bg-[#ccd6f6] p-2'
                />
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='my-4 p-2 bg-[#ccd6f6]'
                />
                <textarea
                    placeholder='afkl;adfkl;hasdf'
                    name='message'
                    cols='30'
                    rows='10'
                    className='bg-[#ccd6f6] p-2'></textarea>
            </form>
        </div>
    );
};

export default Contact;
