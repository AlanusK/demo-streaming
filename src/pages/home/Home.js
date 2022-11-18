import React from 'react';
import placeholder from '../../placeholder.png';

const Home = ({ history }) => {

    const handleBtnClick = (id) => {
        history.push(`/${id}`)
    }

    return (
        <div className=''>
            <div className='flex items-center h-16 px-20 bg-neutral-600'>
                <h1 className='text-2xl text-white font-medium'>Popular Titles</h1>
            </div>
            <div className='flex items-center mt-10 px-20'>
                <button className='mr-10' onClick={() => handleBtnClick('series')}>
                    <div className='bg-neutral-700 h-36 w-28  relative flex flex-col '>
                        <h1 className='font-bold text-white absolute top-16 left-8'>SERIES</h1>
                        <img className='absolute top-10' src={placeholder} alt='' />
                    </div>
                    <p className='mt-1 font-light absolute'>Popular Series</p>
                </button>

                <button className='mr-10' onClick={() => handleBtnClick('movies')}>
                    <div className='bg-neutral-700 h-36 w-28  relative flex flex-col '>
                        <h1 className='font-bold text-white absolute top-16 left-6'>MOVIES</h1>
                        <img className='absolute top-10' src={placeholder} alt='' />
                    </div>
                    <p className='mt-1 font-light absolute'>Popular Movies</p>
                </button>

            </div>

        </div>
    )
}

export default Home;