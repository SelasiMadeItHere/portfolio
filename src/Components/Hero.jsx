// import { Avatar } from '@mui/material'
import React from 'react'
import ImageAvatar from '../media/silhouette.png'


function Hero() {
    return (
        <>
            <div>
                <div className=' text-center text-5xl text-purple-800 mt-32 font-extrabold'>
                    WordPress & FullStack Web Developer
                </div>

                <div className=' text-center text-2xl p-8'>
                    I design and code beautifully simple things, and I love what I do.
                </div>
            </div>

            <div>
                <div className=' flex justify-center '>
                    <div className=' flex justify-center rounded-full p-3 border-2 border-red-600 shadow-red-400 shadow-2xl'>
                        <img src={ImageAvatar} alt='Avatar' className='rounded-full border-2 shadow-2xl w-64 h-64' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero