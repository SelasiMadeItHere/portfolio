import React from 'react'

import { Card } from '@mui/material'

import { marketplace, eLibrary } from './images.js';

import Hero from '../hero-devices.svg'
import WordPress from '../media/wordpress.png'
import CSS from '../media/tailwindcss.png'
import Nodejs from '../media/nodejs.png'
import IconReact from '../media/react-js.png'
import Mysql from '../media/mysql.png'
import HTML5 from '../media/html.png'
import CSS3 from '../media/css.png'
import Workprop from './workprop'
import Php from '../media/php.png'
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
                            <div className=' flex justify-center p-6'>
                                <div className=' border-2 rounded-full shadow-purple-500 shadow-lg p-3'>
                                    <img src={Nodejs} alt='TailwindIcon' className=' w-24 h-24 text-center hover:animate-spin animate-duration-[100000s] animate-iteration-count-12' />
                                </div>

                            </div>
                            <p className=' text-center text-xl font-extrabold'>Material UI</p>
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
                                <div className=' flex justify-center p-6'>
                                    <div className=' border-2 rounded-full shadow-purple-500 shadow-lg p-3'>
                                        <img src={Nodejs} alt='TailwindIcon' className=' w-24 h-24 ;gv  / hover:animate-spin animate-duration-[100000s] animate-iteration-count-12' />
                                    </div>

                                </div>
                                <p className=' text-center text-xl font-extrabold'>Node.Js</p>
                            </div>
                        </div>


                        <div className=' grid-cols-1 border'>
                            <div className=' grid-cols-1 border'>
                                <div className=' flex justify-center p-6'>
                                    <div className=' border-2 rounded-full shadow-purple-500 shadow-lg p-3'>
                                        <img src={HTML5} alt='TailwindIcon' className=' w-24 h-24 text-center hover:animate-spin animate-duration-[100000s] animate-iteration-count-12' />
                                    </div>

                                </div>
                                <p className=' text-center text-xl font-extrabold'>HTML</p>
                            </div>
                        </div>


                        <div className=' grid-cols-1 border' >
                            <div className=' grid-cols-1 border'>
                                <div className=' flex justify-center p-6'>
                                    <div className=' border-2 rounded-full shadow-purple-500 shadow-lg p-3'>
                                        <img src={CSS3} alt='TailwindIcon' className=' w-24 h-24 text-center hover:animate-spin animate-duration-[100000s] animate-iteration-count-12' />
                                    </div>

                                </div>
                                <p className=' text-center text-xl font-extrabold'>CSS</p>
                            </div>
                        </div>


                        <div className=' grid-cols-1 border' >
                            <div className=' grid-cols-1 border'>
                                <div className=' flex justify-center p-6'>
                                    <div className=' border-2 rounded-full shadow-purple-500 shadow-lg p-3'>
                                        <img src={Php} alt='TailwindIcon' className=' w-24 h-24 text-center hover:animate-spin animate-duration-[100000s] animate-iteration-count-12' />
                                    </div>

                                </div>
                                <p className=' text-center text-xl font-extrabold'>CSS</p>
                            </div>
                        </div>
                    </div>

                </Card>
            </div>

            <div className=' bg-gradient-to-b from-purple-800 to-purple-600 text-center px-60'>

                <div className=' py-24 '>
                    <p className=' text-3xl text-white'><strong>CONTACT</strong></p>

                    <p className=' text-2xl p-12 text-slate-100 '>
                        <ol>
                            <li>Whatsapp: <a href='https://wa.me/+233547084777' style={{ color: 'blue' }}> +233 547 084 777</a></li>
                            <li>LinkedIn: <a href='https://www.linkedin.com/agbesi-precious-selasi-8cb' style={{ color: 'blue' }}> Precious Agbesi Selasi</a></li>
                            <li>Phone: +233 547 084 777</li>
                            <li>Github: <a href="https://github.com/SelasiMadeItHere" style={{ color: 'blue' }}> SelasiMadeItHere</a></li>
                        </ol>
                    </p>
                </div>
            </div>


            <div className=' my-24'>
                <p className=' text-purple-800 text-3xl font-bold text-center'> MY RECENT WORKS</p>

                <div className=' px-12 justify-center'>
                    <div className=' grid grid-cols-3 p-0 m-0 w-[100%]'>
                        <div className=' grid-cols-1 border pb-6'>
                            <Workprop image={require("../media/AIT MAin.png")} name={"AIT Marketplace"} Stack={"React + Nodejs + Tailwind"} images={marketplace}/>
                        </div>

                        <div className=' grid-cols-2 border content-center pb-6'>
                            <Workprop image={require("../media/AIT MAin.png")} name={"AIT Adimssions"} Stack={"WordPress"} images={eLibrary}/>
                        </div>
                        <div className=' grid-cols-2 border content-center pb-6'>
                            <Workprop image={require("../media/AIT Smart School .png")} name={"AIT Smart School"} Stack={"WordPress"} />
                        </div>
                        <div className=' grid-cols-2 border content-center pb-6'>
                            <Workprop image={require("../media/AIT MAin.png")} name={"AIT Adimssions"} Stack={"WordPress"} />
                        </div>

                        <div className=' grid-cols-3 border pt-[4.5cm] content-center pb-6'>
                            <Workprop image={require("../media/IRIC-Logo_New-1.png")} name={"IRIC"} Stack={"WordPress"} />
                        </div>

                        <div className=' grid-cols-1 border content-center pb-6'>
                            <Workprop image={require("../media/AIT MAin.png")} name={"AIT E-Library"} Stack={"WordPress"} />
                        </div>

                        <div className=' grid-cols-3 border content-center pb-6'>
                            <Workprop image={require("../media/AIT MAin.png")} name={"AIT Marketplace"} Stack={"PhP + TailwindCSS + MySQL"} />
                        </div>
                        <div className=' grid-cols-1 border content-center pb-6'>
                            <Workprop image={require("../media/cynthias.jpg")} name={"Cynthia's African Dishes"} Stack={"WordPress"} />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Body