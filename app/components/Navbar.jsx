import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
export default function Navbar({ isDarkMode, setIsDarkMode }) {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    function openMenu() {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    function closeMenu() {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])
    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='header background' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white/20' : ''} `}>
                <a href="#top">
                    <p className='mr-14 cursor-pointer text-3xl font-sans font-medium'><span className='text-red-700 text-3xl'>My</span>Portfolio<span className='text-red-700 text-3xl'>.</span></p>
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
                    <li><a href="#top " className='Ovo'>Home</a></li>
                    <li><a href="#about " className='Ovo'>About me</a></li>
                    <li><a href="#work " className='Ovo'>My Projects</a></li>
                    <li><a href="#contact " className='Ovo'>Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='moon icon' className='w-6 cursor-pointer' />
                    </button>
                    <a href="#contact" className='Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt='icon image' /> </a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='menu icon' className='w-6 cursor-pointer' />
                    </button>
                </div>
                <ul ref={sideMenuRef} className=' dark:bg-[#2a004a] flex md:hidden  flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    <div className='absolute right-6 top-6 ' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='close icon' className='w-5 cursor-pointer' />
                    </div>
                    <li><a href="#top " className='Ovo' onClick={closeMenu}>Home</a></li>
                    <li><a href="#about " className='Ovo' onClick={closeMenu}>About me</a></li>
                    <li><a href="#work " className='Ovo' onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact " className='Ovo' onClick={closeMenu}>Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}
