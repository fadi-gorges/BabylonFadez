import React from 'react'
import StackDecor from "@components/StackDecor";

const servicesList = [
    {
        service: 'Kids Cuts (3 - 12 Yrs)',
        price: 20,
    },
    {
        service: 'Kids Fade (3 - 12 Yrs)',
        price: 25,
    },
    {
        service: 'Standard Cut (13+ Yrs)',
        price: 25,
    },
    {
        service: 'Men Zero Fade',
        price: 30,
    },
    {
        service: 'Men Skin Fade',
        price: 35,
    },
    {
        service: 'Pensioner',
        price: 20,
    },
    {
        service: 'Eyebrows',
        price: 5,
    },
    {
        service: 'Beard Trim & Line Up',
        price: 10,
    },
]

const Services = () => {
    return (
        <div id="services" className="flex items-center bg-gray-800 scroll-mt-20">
            <div
                className="container mx-auto px-10 md:px-28 py-16 md:py-20">
                <div className="grid grid-cols-12 gap-y-8">
                    <div className="col-span-12 xl:col-span-5 text-black flex flex-col justify-center">
                        <h2 className="text-2xl text-gray-400 font-sans font-extrabold titleUnderline after:bg-white slideIn">Services</h2>
                        <p className="text-base text-white  mt-5 md:mt-10 font-judson leading-8 slideIn xl:delay-100">
                            We offer a range of services to help you look and feel your best. Whether you need a
                            haircut, a shave, a beard or eyebrow trim, we have you covered. Check our prices for your
                            next visit.
                        </p>
                    </div>
                    <div className="col-span-12 xl:col-start-7 xl:col-span-6 pb-5 slideIn xl:delay-200">
                        <StackDecor colorOne="bg-gray-700" colorTwo="bg-gray-700">
                            <div className="rounded-2xl overflow-hidden">
                                <table className="table text-white border-separate font-sans
                            text-sm"
                                       cellSpacing={0}>
                                    <tbody>
                                    {servicesList.map(({service, price}) => (
                                        <tr key={service} className="odd:bg-gray-700 even:bg-gray-600">
                                            <td className="px-5 py-4">{service}</td>
                                            <td className="text-amber-300 font-bold">${price}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>

                        </StackDecor>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services