"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import StackDecor from "@components/StackDecor";

const Carousel = ({name, srcSet, autoScroll = false, hideButtons = false}: {
    name: string,
    srcSet: string[],
    autoScroll?: boolean,
    hideButtons?: boolean
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

    useEffect(() => {
        if (autoScroll)
            setScrollTimeout();
    }, []);

    useEffect(() => {
        if (autoScroll) {
            if (currentTimeout)
                clearTimeout(currentTimeout)
            setScrollTimeout()
        }
    }, [currentIndex]);

    const setScrollTimeout = () => {
        setCurrentTimeout(setTimeout(() => {
                scrollCarousel();
            }, 2000)
        );
    };

    const scrollCarousel = (targetNumber?: number) => {
        if (targetNumber === undefined) {
            setCurrentIndex(prevIndex => {
                targetNumber = prevIndex === srcSet.length - 1 ? 0 : prevIndex + 1;
                const carouselElement = document.getElementById(`${name}-carousel`)!;
                const targetXPixel = (carouselElement.clientWidth * targetNumber) + 1;
                carouselElement.scrollTo(targetXPixel, 0);
                return targetNumber;
            });
            return;
        }

        setCurrentIndex(targetNumber);
        const carouselElement = document.getElementById(`${name}-carousel`)!;
        const targetXPixel = (carouselElement.clientWidth * targetNumber) + 1;
        carouselElement.scrollTo(targetXPixel, 0);
    };

    return (
        <div className="h-full flex flex-col">
            <StackDecor>
                <div id={`${name}-carousel`} className="carousel w-full h-full rounded-3xl touch-none">
                    {srcSet.map((src, index) => (
                        <div id={name + index} key={src} className="carousel-item relative w-full">
                            <Image key={src} src={src} alt="Carousel Image" priority fill sizes="90vw, 60vw"
                                   className="w-full object-cover object-center touch-none"/>
                            {!hideButtons && <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <button onClick={() => scrollCarousel((index === 0 ? srcSet.length - 1 : index - 1))}
                                        className="btn btn-circle">❮
                                </button>
                                <button onClick={() => scrollCarousel((index === srcSet.length - 1 ? 0 : index + 1))}
                                        className="btn btn-circle">❯
                                </button>
                            </div>}
                        </div>
                    ))}
                </div>
            </StackDecor>
            <div className="flex justify-center w-full py-2 mt-4 md:mt-6 gap-2">
                {srcSet.map((src, index) => (
                    <button key={src} onClick={() => scrollCarousel(index)}
                            className={`w-2 h-2 md:w-3 md:h-3 ${index === currentIndex ? "bg-gray-800" : "bg-gray-500"} rounded-full`}>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;