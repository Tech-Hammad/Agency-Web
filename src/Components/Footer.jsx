import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Footer = ({ theme }) => {
    return (
        <motion.div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 pb-10'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            {/* footer top */}
            <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
                <motion.div className='space-y-5 text-sm text-gray-700 dark:text-gray-300'
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}>

                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" />
                    <p>From Strategy to execution, we craft digital solutions that move your business forward.</p>
                    <ul className='flex gap-8'>
                        <li><a href="#hero" className='hover:text-primary'>Home</a></li>
                        <li><a href="#services" className='hover:text-primary'>Services</a></li>
                        <li><a href="#our-work" className='hover:text-primary'>Our Work</a></li>
                        <li><a href="#contact-us" className='hover:text-primary'>Contact Us</a></li>
                    </ul>
                </motion.div>
                <motion.div className='text-gray-600 dark:text-gray-400'
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}>
                    <h3 className='font-semibold'>Subscribe to our newsletter</h3>
                    <p className='text-sm mt-2 mb-6'>The latest news,articles, and resources, sent to your inbox weekly.</p>
                    <div className='flex gap-2 text-sm'>
                        <input type="email" name=""
                            className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500' placeholder='Enter you email' />
                        <button type="submit"
                            className='bg-primary text-white rounded px-6'>Subscribe</button>
                    </div>
                </motion.div>
            </div>
            <hr className='border-gray-300 dark:border-gray-600 my-6' />
            <motion.div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            >
                <p>Copyright 2025 © Hammad Ahmad - All Rights Reserved.</p>
                <div className="flex gap-4">
                    <img src={assets.facebook_icon} alt="facebook" />
                    <img src={assets.twitter_icon} alt="twitter" />
                    <img src={assets.instagram_icon} alt="instagram" />
                    <img src={assets.linkedin_icon} alt="linkedin" />
                </div>
            </motion.div>

        </motion.div>
    )
}

export default Footer