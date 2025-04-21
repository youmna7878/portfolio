import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3fdf555a-7f76-4d8e-b3b2-6200d5d55e9c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none' id='contact' >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mb-2 text-lg Ovo'>Connect with me</motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-center text-5xl Ovo'>Get in touch</motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='mb-10 mt-5 max-w-2xl mx-auto Ovo text-center'>I'd love to hear from you! If you have any question, comments, or feedback, please use the form below.</motion.p>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='max-w-2xl mx-auto' onSubmit={onSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>

            <motion.input
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              name='name' type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#2a004a]/30 dark:border-white/90 ' />
            <motion.input
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              name='email' type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#2a004a]/30 dark:border-white/90' />
          </div>
          <motion.textarea
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            name='message' rows="6" placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-[#2a004a]/30 dark:border-white/90'></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type='submit' className=' cursor-pointer py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-[#2a004a]' >Submit now
            <Image src={assets.right_arrow_white} alt='right arrow icon' className='w-4' />
          </motion.button>
          <p className='mt-4'>{result}</p>
        </motion.form>
      </motion.div>
    </>
  )
}
