import React from 'react';

const Header = () => {
    return (
        <div className='flex items-center justify-between h-16 px-20 pr-32 bg-blue-400 fixed top-0 w-full'>
            <h1 className='flex text-4xl text-white font-medium'>DEMO Streaming</h1>
            <div className='flex text-white font-medium'>
                <h1 className='text-white p-2 mr-10'>Login</h1>
                <h1 className='text-white bg-neutral-600 p-2'>Start your free trial</h1>
            </div>
        </div>
    )
}

export default Header;