import Carousel from "@components/Carousel";
import React from "react";

const aboutCarouselImgs = [
    "/team3.png",
    "/team.jpg",
    "/team2.png",
    "/team4.png",
    "/team5.png",
];

const About = () => {
    return (
        <div id="about" className="flex items-center bg-white scroll-mt-20">
            <div
                className="container mx-auto px-10 md:px-28 py-16 md:py-20">
                <div className="grid grid-cols-12 gap-y-8">
                    <div className="col-span-12 xl:col-span-5 text-black flex flex-col justify-center">
                        <h2 className="text-2xl font-bungee font-semibold slideIn titleUnderline after:bg-yellow-600">About
                            Us</h2>
                        <p className="text-base mt-5 md:mt-10 font-judson leading-8 slideIn xl:delay-100">
                            Babylon Fadez serves Casula and Liverpool. We can deal with all your hair style needs,
                            anyplace from your first youngster’s hair style, to the most recent moving styles, right
                            to
                            exemplary senior hair styles. Our Barbers are prepared specialists in a wide scope of
                            men’s
                            hair styles, haircuts, and beard trims.
                            {/*<br/><br/>*/}
                            {/*Our two stores are located at: <br/>*/}
                            {/*<b className="text-yellow-600">*/}
                            {/*    3/54 De Meyrick Avenue, Casula NSW 2170 <br/>*/}
                            {/*    7/187 Elizabeth Dr, Liverpool NSW 2170*/}
                            {/*</b>*/}
                        </p>
                        {/*<button*/}
                        {/*    className="group btn btn-lg mt-7 text-white">*/}
                        {/*    Book an Appointment*/}
                        {/*    <ArrowRightIcon className="inline h-8 ml-3 group-hover:translate-x-2 transition"/>*/}
                        {/*</button>*/}
                    </div>
                    <div className="col-span-12 xl:col-start-7 xl:col-span-6 h-80 lg:h-[500px] slideIn xl:delay-200">
                        <Carousel name="about" srcSet={aboutCarouselImgs} autoScroll/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About