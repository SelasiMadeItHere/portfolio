import React from 'react'
import Hero from '../hero-devices.svg'
import { Card } from '@mui/material'
import WordPress from '../media/wordpress.png'
import CSS from '../media/tailwindcss.png'
import Nodejs from '../media/nodejs.png'
import IconReact from '../media/react-js.png'
import Mysql from '../media/mysql.png'
// import 

function Body() {
    return (
        <>
            <div className=' flex justify-center'>
                <div className=' mx-24 mt-24 w-[60%] h-[60%] '>
                    <img src={Hero} alt='Hero section' />
                </div>
            </div>

            <div className=' bg-gradient-to-b from-purple-800 to-purple-600 text-center px-60'>

                <div className=' py-24 '>
                    <p className=' text-3xl text-white'>Hi, my name's <strong>PRECIOUS AGBESI SELASI</strong>. Nice to meet you</p>

                    <p className=' text-2xl p-12 text-slate-100 '>Since beginning my journey as a freelance designer 12 years ago,
                        I've done remote work for agencies, consulted for startups,
                        and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious,
                        and perpetually working on improving my chops.
                    </p>
                </div>
            </div>

            <div>

                <Card className='  mx-24 border-2 z-10 mt-[-5%] rounded-2xl'>

                    <p className=' text-4xl font-extrabold text-center py-12'>My Stack</p>
                    <div className=' grid grid-cols-3 p-0 m-0 w-[100%]'>



                        <div className=' grid-cols-1 border'>
                            <div className=' flex justify-center p-6'>
                                <div className='border-2 rounded-full shadow-purple-500 shadow-lg p-3'>
                                    <img src={WordPress} alt='ReactIcon' className=' w-24 h-24 text-center hover:animate-spin animate-duration-[100000s] animate-iteration-count-12' />
                                </div>
                            </div>
                            <div>
                                <p className=' text-center text-xl font-extrabold'>WordPress</p>
                            </div>
                        </div>


                        <div className=' grid-cols-1 border'>

                            <div className=' flex justify-center p-6'>
                                <div className='border-2 rounded-full shadow-purple-500 shadow-lg p-3'>
                                    <img src={IconReact} alt='ReactIcon' className=' w-24 h-24 text-center hover:animate-spin animate-duration-[100000s] animate-iteration-count-12' />
                                </div>
                            </div>
                            <p className=' text-center text-xl font-extrabold'>React.Js</p>
                        </div>



                        <div className=' grid-cols-1 border'>
                            <div className=' grid-cols-1 border'>
                                <div className=' flex justify-center p-6'>
                                    <div className=' border-2 rounded-full shadow-purple-500 shadow-lg p-3'>
                                        <img src={Nodejs} alt='TailwindIcon' className=' w-24 h-24 text-center hover:animate-spin animate-duration-[100000s] animate-iteration-count-12' />
                                    </div>

                                </div>
                                <p className=' text-center text-xl font-extrabold'>Node.Js</p>
                            </div>
                        </div>

                        <div className=' grid-cols-1 border'>
                            <div className=' grid-cols-1 border'>
                                <div className=' flex justify-center p-6'>
                                    <div className=' border-2 rounded-full shadow-purple-500 shadow-lg p-3'>
                                        <img src={CSS} alt='TailwindIcon' className=' w-24 h-24 text-center hover:animate-spin animate-duration-[100000s] animate-iteration-count-12' />
                                    </div>

                                </div>
                                <p className=' text-center text-xl font-extrabold'>TailwindCSS</p>
                            </div>
                        </div>

                        <div className=' grid-cols-1 border'>
                            <div className=' grid-cols-1 border'>
                                <div className=' flex justify-center p-6'>
                                    <div className=' border-2 rounded-full shadow-purple-500 shadow-lg p-3'>
                                        <img src={Mysql} alt='TailwindIcon' className=' w-24 h-24 text-center hover:animate-spin animate-duration-[100000s] animate-iteration-count-12' />
                                    </div>

                                </div>
                                <p className=' text-center text-xl font-extrabold'>MySQL</p>
                            </div>
                        </div>

                        <div className=' grid-cols-1 border'>
                            <div className=' grid-cols-1 border'>
                                <div className=' flex justif y-center p-6'>
                                    <div className=' border-2 rounded-full shadow-purple-500 shadow-lg p-3'>
                                        <img src={CSS} alt='TailwindIcon' className=' w-24 h-24 text-center hover:animate-spin animate-duration-[100000s] animate-iteration-count-12' />
                                    </div>

                                </div>
                                <p className=' text-center text-xl font-extrabold'>Node.Js</p>
                            </div>
                        </div>
                    </div>
                </Card>


                blunder404
            </div>
        </>
    )
}
export default Body