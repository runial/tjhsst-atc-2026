import { Suspense } from 'react';
import Loading from '@/(components)/loading'
import Nav from '@/(components)/Nav'
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "ATConnect 2025",
    description: "Info for the first-ever iteration of ATConnect.",
    keywords: ["TJHSST", "TJ", "assistive technology", "ATC", "TJ ATC", "TJHSST ATC", "TJHSST clubs", "eighth period"]
};

export default function HomeLayout({
    children,
}:{children: React.ReactNode}){
    return (
        <section>
        
        <Suspense fallback={< Loading />}>
        {children}
        </Suspense>
        
        </section>
    )
}