import React from 'react'
import { company_logos } from '../assets/assets'
import { motion } from 'motion/react'

const TrustedBy = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <motion.h3 className='font-semibold justify-center text-center py-6'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >Trusted by Leading Companies</motion.h3>
            <motion.div className='flex items-center justify-center flex-wrap gap-10 m-4'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ staggerChildren: 0.1}}
                viewport={{ once: true }}
            >
                {company_logos.map((logo, index) => (
                    <motion.img
                        key={index}
                        src={logo}
                        className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
                        alt={`Company logo ${index + 1}`}
                    variants={{
                        hidden: {opacity: 0, y:10},
                        visible: {opacity: 1, y: 0},
                    }}
                    transition= {{ duration: 0.4}}       
                    />
                ))}

            </motion.div>
        </motion.div>
    )
}

export default TrustedBy