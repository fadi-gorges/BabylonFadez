"use client";
import React, {useState} from "react";
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/20/solid";
import StackDecor from "@components/StackDecor";

interface ContactLocation {
    location: string,
    address: string,
    addressUrl: string,
    phone: string,
    phoneStr: string,
    email: string,
}

const contactLocations: ContactLocation[] = [
    {
        location: "Casula",
        address: "3/54 De Meyrick Ave, Casula NSW 2170",
        addressUrl: "https://goo.gl/maps/whkVu7vtxNpUz9kMA",
        phone: "0281194879",
        phoneStr: "(02) 8119 4879",
        email: "info@babylonfadez.com.au"
    },
    {
        location: "Liverpool",
        address: "183 Elizabeth Dr, Liverpool NSW 2170",
        addressUrl: "https://goo.gl/maps/95ugq7HLFL66bB3n8",
        phone: "0423630891",
        phoneStr: "0423 630 891",
        email: "info@babylonfadez.com.au"
    }
];

const ContactCollapse = ({location, currentLocation}: {
    location: ContactLocation, currentLocation: {
        location: string, setLocation: React.Dispatch<React.SetStateAction<string>>
    }
}) => (
    <div className="collapse bg-base-200 mt-4">
        <input id={`location-${location.location}`} type="checkbox"
               checked={currentLocation.location === location.location}
               onClick={() => currentLocation.setLocation(location.location)}/>
        <div className="collapse-title text-base font-josefin font-extrabold text-gray-700">
            {location.location}
        </div>
        <div className="collapse-content flex flex-col gap-3">
            <a href={location.addressUrl}
               className="flex items-center font-sans text-sm transition hover:text-gray-500">
                <MapPinIcon className="text-yellow-600" width={30}/>
                <p className="ml-4">{location.address}</p>
            </a>
            <a href={`tel:${location.phone}`}
               className="flex items-center font-sans text-sm transition hover:text-gray-500">
                <PhoneIcon className="text-yellow-600" width={30}/>
                <p className="ml-4">{location.phoneStr}</p>
            </a>
            <a href={`mailto:${location.email}`}
               className="flex items-center font-sans text-sm transition hover:text-gray-500">
                <EnvelopeIcon className="text-yellow-600" width={30}/>
                <p className="ml-4">{location.email}</p>
            </a>
        </div>
    </div>
);

const Contact = () => {
    const [currentLocation, setCurrentLocation] = useState(contactLocations[0].location);

    return (
        <div id="contact" className="flex items-center bg-gray-900 scroll-mt-20">
            <div
                className="container mx-auto px-10 md:px-28 py-16 md:py-20">
                <div className="grid grid-cols-12 gap-y-2">
                    <div
                        className="col-span-12 xl:col-span-5 text-black flex flex-col">
                        <div
                            className="flex justify-between items-center text-2xl font-josefin font-extrabold text-yellow-400 slideIn">
                            <h2 className="titleUnderline after:bg-white">Contact Us</h2>
                            <div className="flex gap-3">
                                <a href="https://www.instagram.com/babylonfadezbarbershop">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current 2xl:ml-8 h-9"
                                         viewBox="0 0 448 512">
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/babylonfadez">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         className="fill-current h-9">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.tiktok.com/@babylonfadezbarbershop">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         className="fill-current h-9"
                                         viewBox="0 0 448 512">
                                        <path
                                            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="slideIn xl:delay-100">
                            <p className="text-base mt-5 md:mt-10 font-judson leading-8 text-white">
                                Visit our stores in Casula or Liverpool, or contact us via email or phone for any
                                enquiries.
                            </p>
                            {contactLocations.map(location => (
                                <ContactCollapse key={location.location} location={location} currentLocation={{
                                    location: currentLocation,
                                    setLocation: setCurrentLocation
                                }}/>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-start-7 xl:col-span-6 pt-3 pb-6 flex slideIn xl:delay-200">
                        <div
                            className={`w-full aspect-[6/4] ${currentLocation !== 'Casula' && 'hidden'}`}>
                            <StackDecor>
                                <iframe
                                    className="rounded-3xl w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.947596607476!2d150.90294210000002!3d-33.9424759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129540f249c997%3A0x8805dea672cd2663!2sBabylon%20Fadez%20Barbershop%20Casula!5e0!3m2!1sen!2sau!4v1686737630066!5m2!1sen!2sau"
                                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                            </StackDecor>
                        </div>
                        <div
                            className={`w-full aspect-[6/4] ${currentLocation !== 'Liverpool' && 'hidden'}`}>
                            <StackDecor>
                                <iframe className="rounded-3xl w-full h-full"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.994675076327!2d150.90792871206705!3d-33.91553662137071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12951e9413540f%3A0x99bc738c1bd74b67!2sBabylon%20Fadez%20Barbershop%20Liverpool!5e0!3m2!1sen!2sau!4v1686738215759!5m2!1sen!2sau"
                                        width="600" height="450" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"/>
                            </StackDecor>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;