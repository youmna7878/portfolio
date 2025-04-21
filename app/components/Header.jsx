import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
export default function Header() {
    return (
        <>
            <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>

                <motion.h3
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='flex items-end gap-2 text-xl md:text-2xl mb-3 Ovo'>Hi! I'm Youmna Mustafa
                    <Image src={assets.hand_icon} alt='hand-icon' className='w-6' />
                </motion.h3>
                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='text-3xl sm:text-6xl lg:text-[66px] Ovo'>
                    Front-End Web Developer
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className='max-w-2xl mx-auto Ovo'>I Create Engaging , Responsive and User-friendly web experiences with modern technologies and clean code</motion.p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <motion.a
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        href="#contact" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 text-white bg-black dark:bg-transparent'>
                        Contact me
                        <Image src={assets.right_arrow_white} alt='right-arrow' className='w-4' />
                    </motion.a>
                    <motion.a
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black bg-white'>
                        My Resume
                        <Image src={assets.download_icon} alt='download icon' className='w-4' />
                    </motion.a>
                </div>
            </div>
        </>
    )
}
