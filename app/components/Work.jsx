import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

export default function Work({ isDarkMode }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='w-full px-[12%] py-10 scroll-mt-20' id='work'>
                <motion.h4
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='text-center mb-2 text-lg Ovo'>My Portfolio</motion.h4>
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-center text-5xl Ovo'>My Latest Projects</motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='mb-10 mt-5 max-w-2xl mx-auto Ovo text-center'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className='grid md:grid-cols-4 mx-auto my-10 md:gap-5  grid-cols-1  sm:grid-cols-2 w-full gap-10  dark:text-black'>
                    {workData.map((project, index) => (
                        <motion.div

                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            key={index} style={{ backgroundImage: `url(${project.bgImage})` }} className=' bg-cover aspect-square bg-no-repeat  bg-center rounded-lg relative cursor-pointer group'>
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 transition-all group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>

                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <a href={project.link}>
                                        <Image src={assets.send_icon} alt='send icon' className='w-5' />

                                    </a>
                                </div>
                            </div>

                        </motion.div>

                    ))}
                </motion.div>
                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    target='_blank' href="https://github.com/youmna7878 " className={isDarkMode ? 'w-max darkHover flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-14 duration-500  dark:text-white dark:border-white' : 'w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-14 duration-500 bgg '}>
                    Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4' />
                </motion.a>
            </motion.div>
        </>
    )
}
