import type { Metadata } from "next";
import { ReactNode } from 'react';
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "TJ ATC - About",
    description: "Learn about the Assistive Technology Club at TJHSST.",
    keywords: ["TJHSST", "TJ", "assistive technology", "ATC", "TJ ATC", "TJHSST ATC", "TJHSST clubs", "eighth period"]
};

export default function HomeLayout({ children }:{ children: ReactNode }){
    return (
        <html lang="en" dir="ltr">
            <body>{children}</body>
        </html>
    )
}