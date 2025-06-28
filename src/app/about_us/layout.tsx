// import { Suspense } from 'react';
// import Loading from '@/(components)/loading'
// import Nav from '@/(components)/Nav'

import type { Metadata } from "next";
import { ReactNode } from 'react';
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "TJ ATC",
    description: "Website for the Assistive Technology Club at TJHSST.",
};


export default function HomeLayout({ children }:{ children: ReactNode }){
    return (
        <html lang="en" dir="ltr">
        {/*<Nav place = {0} color='Dark'/>*/}
        {/*<Suspense fallback={< Loading />}>*/}
            <body>{children}</body>
        {/*</Suspense>*/}
        </html>
    )
}