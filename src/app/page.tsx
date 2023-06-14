import React from "react";
import Header from "@app/Header";
import About from "@app/About";
import Footer from "@app/Footer";
import Services from "@app/Services";
import OurWork from "@app/OurWork";
import TheTeam from "@app/TheTeam";
import Contact from "@app/Contact";

export const metadata = {
    title: "Babylon Fadez",
    description: "Babylon Fadez serves Casula and Liverpool. We can deal with all your hair style needs, anyplace from your first youngster’s hair style, to the most recent moving styles, right to exemplary senior hair styles. Our Barbers are prepared specialists in a wide scope of men’s hair styles, haircuts, and beard trims."
};

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <TheTeam/>
            <Services/>
            <OurWork/>
            <Contact/>
            <Footer/>
        </div>
    )
};

export default Home;
