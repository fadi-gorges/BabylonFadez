"use client";
import React, {useState} from "react";
import Navbar from "@app/Navbar";
import {ParallaxBanner} from "react-scroll-parallax";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {scrollIntoView} from "@components/Utils";

const Header = () => {
    const [scrollProgress, setScrollProgress] = useState(1);

    return (
        <>
            <Navbar scroll={scrollProgress}/>
            <ParallaxBanner id="header" className="h-screen" layers={[
                {
                    children: (
                        <video autoPlay loop muted playsInline
                               className="w-full h-[120%] md:h-full object-cover object-center">
                            <source src="/clip.mp4"/>
                        </video>
                    ),
                    speed: -70,
                    expanded: false,
                    onProgressChange: (progress) => setScrollProgress(progress),
                },
                {
                    children: (
                        <div
                            className="h-full w-full flex justify-center xl:justify-end xl:pr-72 bg-black/80 text-white">
                            <div
                                className="flex flex-col justify-center text-center items-center xl:items-end xl:text-end slideInFirst">
                                <h1 className="text-3xl font-bungee font-semibold">
                                    Quality Cuts. <br/>
                                    <span className="md:text-8xl text-6xl">
                                    Superior <br/>
                                    Fadez.
                                </span>
                                </h1>
                                <button onClick={() => scrollIntoView("about")}
                                        className="btn btn-lg bg-yellow-600 mt-5 lg:mt-3 rounded-full text-white hover:bg-yellow-800
                                    border-none">
                                    About Us
                                    <ChevronDownIcon className="inline h-7"/>
                                </button>
                            </div>
                        </div>
                    )
                }
            ]}
            />
        </>
    );
};

export default Header;