import "@styles/globals.css";
import Utils from "@components/Utils";
import {Bungee, Josefin_Sans, Judson, Libre_Bodoni} from 'next/font/google';

const libre = Libre_Bodoni({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-libre'
})

const bungee = Bungee({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
    variable: '--font-bungee'
})

const judson = Judson({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
    variable: '--font-judson'
})

const josefin = Josefin_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-josefin'
})

const fontClasses = `${libre.variable} ${bungee.variable} ${judson.variable} ${josefin.variable}`

export const metadata = {
    title: "Babylon Fadez",
    description: "",
};

const RootLayout = ({children}: { children: React.ReactNode }) => {
    return (
        // MOST CLASSES TO HIDE TOOLBAR MOBILE
        <html lang="en" className={`scroll-smooth overflow-hidden sm:overflow-auto w-full ${fontClasses}`}>
        <Utils>
            <body className="bg-white h-full w-full fixed overflow-y-scroll sm:static sm:overflow-auto">
            {children}
            </body>
        </Utils>
        </html>
    );
};

export default RootLayout;
