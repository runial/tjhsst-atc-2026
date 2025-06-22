// C:/Users/orien/WebstormProjects/tjhsst-atc/src/app/games/Box.tsx
'use client';

import Image from "next/image";
import "./Box.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['200', '400', '500', '600', '700'],
});

interface BoxProps {
    name: string;
    link: string;
    image: string;
    priority?: boolean;
}

export default function Box({ name, link, image, priority = false }: BoxProps) {
    return (
        <a
            href={link}
            className="group relative m-4 block h-[33vh] w-[25vw] min-w-[300px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 Box2"
        >
            <Image
                src={image}
                alt={`Background for ${name}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                quality={90}
                priority={priority}
                placeholder="empty"
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 bgimg"
            />

            <div className="absolute inset-0 radialBg" />

            <h1
                className={`absolute bottom-4 left-4 right-4 z-10 rounded-lg bg-black/50 p-2 text-center text-white Info ${montserrat.className}`}
            >
                {name}
            </h1>
        </a>
    );
}