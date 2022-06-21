import React from 'react';
import clapperboard from '../../clapperboard.svg';

const Home = () => {

    return (
        <div className=''>
            <div className='flex items-center h-16 px-20 bg-neutral-600'>
                <h1 className='text-2xl text-white font-medium'>Popular Titles</h1>
            </div>
            <div className='flex items-center mt-10 px-20'>
                <button className='mr-10'>
                    <div className='bg-neutral-700 h-36 px-6 relative flex items-center'>
                        <h1 className='font-extrabold text-white absolute bottom-14'>SERIES</h1>
                        <img src={clapperboard} alt='' />
                    </div>
                    <p className='mt-1 font-light'>Popular Series</p>
                </button>

                <button className='mr-10'>
                    <div className='bg-neutral-700 h-36 px-6 relative flex items-center'>
                        <h1 className='font-extrabold text-white absolute bottom-14'>MOVIES</h1>
                        <img src={clapperboard} alt='' />
                    </div>
                    <p className='mt-1 font-light'>Popular Movies</p>
                </button>

            </div>
        </div>
    )
}

export default Home;