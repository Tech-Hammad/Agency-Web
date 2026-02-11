import React from 'react'
import assets from '../assets/assets'
import Title from './Title';
import ServicesCard from './ServiceCard';

const Services = () => {
    const servicesData = [
        {
            title: "Advertising",
            description: "we turn your ideas into engaging and effective advertising campaigns that resonate with your target audience.",
            icon: assets.ads_icon
        },
        {
            title: "Content marketing",
            description: "we help you create and distribute valuable, relevant, and consistent content to attract and retain a clearly defined audience.",
            icon: assets.marketing_icon
        },
        {
            title: "Content Writing",
            description: "we help you create high-quality written content that engages your audience and drives results.",
            icon: assets.content_icon
        },
        {
            title: "Social Media",
            description: "we help you create and manage social media campaigns that engage your audience and drive brand awareness.",
            icon: assets.social_icon
        },
    ];
    return (
        <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <img
                src={assets.bgImage2}
                alt=""
                className="absolute top-[110px] left-[-70px] z-[-1] dark:hidden"
            />

            <Title title='How can we help you?'
                desc={'From concept to execution, we offer a range of services to help you achieve your goals.'} />
            <div className='flex flex-col md:grid grid-cols-2'>
                {servicesData.map((service, index) => (
                    <ServicesCard key={index} service={service} 
                    index={index} />
                ))}
            </div>
        </div>
    )
}

export default Services