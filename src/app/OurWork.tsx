import React from 'react'
import ImageSlider from "@components/ImageSlider";

const ourWorkImgs = [
    "/showcase/1.jpg",
    "/showcase/2.jpg",
    "/showcase/3.jpg",
    "/showcase/4.jpg",
    "/showcase/5.jpg",
    "/showcase/6.jpg",
    "/showcase/7.jpg",
    "/showcase/8.jpg",
    "/showcase/9.jpg",
    "/showcase/10.jpg",
    "/showcase/11.jpg",
    "/showcase/12.jpg",
    "/showcase/13.jpg",
    "/showcase/14.jpg",
    "/showcase/15.jpg",
    "/showcase/16.jpg",
    "/showcase/17.jpg",
    "/showcase/18.jpg",
    "/showcase/19.jpg",
    "/showcase/20.jpg",
    "/showcase/21.jpg",
    "/showcase/22.jpg",
    "/showcase/23.jpg",
]

const OurWork = () => {
    return (
        <div id="our-work" className="bg-white scroll-mt-20 py-10 lg:py-20 w-full">
            <div className="container mx-auto px-10 md:px-28 mb-10 flex xl:justify-end slideIn">
                <h2 className="text-2xl font-bungee font-semibold text-black titleUnderlineRight">
                    Our Work
                </h2>
            </div>
            <div
                className="container mx-auto px-3 lg:px-28 h-full flex items-center justify-center slideIn xl:delay-100">
                <ImageSlider srcSet={ourWorkImgs}/>
            </div>
        </div>
    )
}

export default OurWork