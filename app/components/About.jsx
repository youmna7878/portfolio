import { infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

export default function About({ isDarkMode }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='w-full px-[12%] py-10 scroll-mt-20' id='about'>
                <motion.h4
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='text-center mb-2 text-lg Ovo'>Introduction</motion.h4>
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-center text-5xl Ovo'>About me</motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <p className='my-10 max-w-full Ovo text-center'>Skilled Front-End Developer with expertise in HTML5, CSS3, JavaScript, Bootstrap, Tailwind, Sass, Typescript, jQuery, React and Next.js. Passionate about creating responsive, user-friendly applications and eager to learn new technologies. Strong team player with excellent problem-solving and communication skills.</p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-max-2xl'>
                            {infoList.map(({ icon, iconDark, title, description }, index) => (
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                    key={index} className={isDarkMode ? 'border-[0.5px] dark:border-white dark:hover:bg-[#2a004a]/50 boxShadowWhite rounded-xl p-6 cursor-pointer flex flex-col items-center justify-center duration-500 hover:-translate-y-1' : 'border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer flex flex-col items-center justify-center bg hover:-translate-y-1 duration-500  '}>
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                    <div className='flex flex-col justify-center items-center'>
                        <motion.h4
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.3, delay: 0.5 }}
                            className='my-6 text-gray-700 Ovo dark:text-white/80'>Tools I Use</motion.h4>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.6 }}
                            className='flex items-center gap-3 sm:gap-5'>
                            {toolsData.map((tool, index) => (
                                <motion.li
                                    whileHover={{ scale: 1.1 }}

                                    key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' >
                                    <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                                </motion.li>
                            )
                            )}
                        </motion.ul>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}
