/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import Data from '../../data.json';

const Content = (props) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // check if data exists to control loading and error states
        Data ?  
            setTimeout(() => {
                setLoading(false); 
            }, 3000) 
            :
            setTimeout(() => {
                setLoading(false); 
                setError(true);
            }, 4000)     
    });

    return (
        <div>
            <div className='flex items-center h-16 w-full fixed px-20 bg-neutral-600'>
                <h1 className='text-2xl text-white font-medium'>{props.title}</h1>
            </div>
            { loading ?
                <div className='px-20 pt-24 flex flex-wrap justify-start'>
                    <p>Loading...</p>
                </div>
                :
                !loading && error ? 
                    <div className='px-20 pt-24 flex flex-wrap justify-start'>
                        <p>Opps, something went wrong...</p>
                    </div>
                    :
                    <div className='px-20 pt-20 flex flex-wrap justify-start'>
                        {Data.map((post, index) => {
                            if (post.releaseYear >= 2010 && post.programType === props.programType)
                                return (
                                    <button key={index} className='mr-10 my-3 flex flex-col w-32'>
                                        <div>
                                            <img src={post.images['Poster Art'].url} alt='' />
                                        </div>
                                        <div>
                                            <p className='mb-3 font-light w-32 text-left'>{post.title}</p>
                                        </div>
                                    </button>
                                )
                        })}
                    </div>
            }
        </div>
    )
}

export default Content;