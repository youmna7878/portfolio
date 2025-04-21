import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function Footer({ isDarkMode }) {
    return (
        <>
            <div className='mt-20'>
                <div className='text-center'>
                    <p className='mb-2 cursor-pointer text-3xl font-sans font-medium w-36 mx-auto'><span className='text-red-700 text-3xl'>My</span>Portfolio<span className='text-red-700 text-3xl'>.</span></p>
                    <div className='w-max flex items-center gap-2 mx-auto'>
                        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail icon ' className='w-6' />
                        <p> youmnamostafa93@gmail.com</p>
                    </div>
                </div>
                <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                    <p>
                        © 2025 Youmna Mustafa. All Rights Reserved.
                    </p>
                    <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                        <li><a target='_blank' href="https://github.com/youmna7878 ">Github</a></li>
                        <li><a target='_blank' href="https://www.linkedin.com/in/youmna-mustafa-7a5634319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app  ">Linkedin</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
