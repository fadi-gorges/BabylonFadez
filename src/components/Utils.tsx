"use client";
import React, {useEffect} from "react";
import {ParallaxProvider} from "react-scroll-parallax";

const Utils = ({children}: { children: React.ReactNode }) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>
                entries.forEach(entry => {
                    if (entry.isIntersecting)
                        entry.target.classList.add("show")
                }),
            {
                threshold: 0.25
            }
        );
        document.querySelectorAll('.slideIn').forEach(element => {
            observer.observe(element)
        })
    }, []);

    return (
        <ParallaxProvider>
            {children}
        </ParallaxProvider>
    );
};

export default Utils;

export const scrollIntoView = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth"
    })
    const elem = document.activeElement;
    if (elem instanceof HTMLElement) {
        elem.blur();
    }
}