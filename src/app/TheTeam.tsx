import React from 'react'
import Image from "next/image";

const teamImgs = [
    "/ourwork.jpg",
    "/ourwork2.jpg",
    "/ourwork3.jpg",
]

const imgDelay = [200, 400, 600]

const TheTeam = () => {
    return (
        <div id="the-team" className="flex items-center bg-gray-900 scroll-mt-20">
            <div
                className="container mx-auto px-10 md:px-28 py-16 md:py-20">
                <div className="grid grid-cols-12 gap-y-6">
                    <div
                        className="row-start-2 xl:row-auto col-span-12 xl:col-span-7 h-80 lg:h-[500px] py-3">
                        <div className='grid grid-cols-3 h-full gap-x-2'>
                            {teamImgs.map((src, index) => (
                                <div key={src} className='col-auto'>
                                    <Image src={src} alt="Haircut" width={400} height={600}
                                           className="rounded-3xl border-2 object-cover slideIn h-full"
                                           style={{transitionDelay: `${imgDelay[index]}ms`}}/>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div
                        className="col-span-12 xl:col-start-9 xl:col-span-4 text-black flex flex-col justify-center
                                xl:items-end xl:text-end slideIn">
                        <h2 className="text-2xl font-bungee font-semibold text-yellow-400 titleUnderlineRight after:bg-white">The
                            Team</h2>
                        <p className="text-base mt-5 md:mt-10 font-judson leading-8 text-white">
                            We are fully devoted to advocating healthy hair and groomed lives with our pampering
                            treatments. Our professional barbers listen closely to the customer, supplying a
                            tailored treatment designed to groom, and shave to perfection.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheTeam