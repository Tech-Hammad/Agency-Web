import React from 'react'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
    return (
        <div>
            <h3 className='font-semibold justify-center text-center py-6'>Trusted by Leading Companies</h3>
            <div className='flex items-center justify-center flex-wrap gap-10 m-4'>
                {company_logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
                        alt={`Company logo ${index + 1}`}
                    />
                ))}

            </div>
        </div>
    )
}

export default TrustedBy