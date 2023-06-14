"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/logoTransparent.png";
import {Bars3Icon} from "@heroicons/react/20/solid";
import {scrollIntoView} from "@components/Utils";

const Navbar = ({scroll}: { scroll: number }) => {
    const scrollFactor = -(0.5 - scroll) * 10
    const bgOpacity = scrollFactor <= 1 ? scrollFactor * 85 : 85
    const logoSize = scrollFactor <= 1 ? 100 - scrollFactor * 50 : 50
    const navHeight = scrollFactor <= 1 ? 150 - scrollFactor * 75 : 75

    const NavLink = ({text, to}: { text: string, to: string }) => {
        const fontSize = scrollFactor <= 1 ? 17 - scrollFactor * 2 : 15
        return (
            <button onClick={() => scrollIntoView(to)}
                    className="text-gray-300 hover:text-white duration-500 rounded-md font-libre linkUnderline"
                    style={{fontSize: fontSize}}>
                {text}
            </button>
        );
    };

    const MobileNavLink = ({text, to}: { text: string, to: string }) => (
        <li>
            <button onClick={() => scrollIntoView(to)}>{text}</button>
        </li>
    )

    return (
        <>
            <nav className={`hidden md:block fixed top-0 w-full z-10 ${scrollFactor >= 1 && 'backdrop-blur-md'}`}
                 style={{background: `linear-gradient(180deg, rgba(0,0,0,85%) 0%, rgba(0,0,0,${bgOpacity}%) 100%)`}}>
                <div className="container 2xl:px-72 xl:px-40 lg:px-20 md:px-10 mx-auto flex justify-center"
                     style={{height: navHeight}}>
                    <div className="hidden md:flex w-full justify-around items-center">
                        <NavLink text="Home" to="header"/>
                        <NavLink text="About Us" to="about"/>
                        <NavLink text="The Team" to="the-team"/>
                        <Image className="mx-0 lg:mx-8 w-24 lg:w-32" src={logo} alt="Logo" width={150} height={150}
                               priority quality={100} style={{transform: `scale(${logoSize}%)`}}/>
                        <NavLink text="Services" to="services"/>
                        <NavLink text="Our Work" to="our-work"/>
                        <NavLink text="Contact Us" to="contact"/>
                    </div>
                </div>
            </nav>
            <nav className={`md:hidden fixed top-0 w-full flex justify-between items-center z-10 bg-black/90 px-5
                backdrop-blur-md text-gray-200`}>
                <Image className="" src={logo} alt="Logo" width={70} height={70}
                       priority/>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle btn-md">
                        <Bars3Icon height={30}/>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-lg dropdown-content mt-3 p-2 shadow bg-black/90 rounded-box w-52 font-judson
                            backdrop-blur-md">
                        <MobileNavLink text="Home" to="header"/>
                        <MobileNavLink text="About Us" to="about"/>
                        <MobileNavLink text="The Team" to="the-team"/>
                        <MobileNavLink text="Services" to="services"/>
                        <MobileNavLink text="Our Work" to="our-work"/>
                        <MobileNavLink text="Contact Us" to="contact"/>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;