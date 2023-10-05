"use client"

import React from 'react'
import { CustomBtn } from '.'

const Hero = () => {
    const handleScroll = () => { }

    return (
        <div className=' gap-5 max-w-[1440px] mx-auto '>
            <div className='pt-36 sm:px-16 px-6'>
                <h1 className='font-extrabold 2xl:text-[72px] sm:text-[64px] text-[50px]'>
                    Find, book, or ren a car — quickly and easily
                </h1>
                <p className='text-[27px] font-light mt-5 text-black-100'>
                    Streamline your car rental experience with our effortless booking process.
                </p>

                <CustomBtn
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
        </div>
    )
}

export default Hero