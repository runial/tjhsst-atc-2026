import Image from "next/image";
import "./Box3.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['200', '400', '500', '600', '700']
});

interface BoxProps {
    name: string;
    link: string;
    image: string;
}

export default function Box3({ name, link, image }: BoxProps) {
    return (
        <a href={link} className="capitalize Box3">
            <div className="radialBg"></div>
            <Image
                src={image}
                alt={`Background for ${name}`}
                fill
                sizes="100vw"
                quality={90} // Added for better image sharpness
                placeholder="empty" // Added to remove blur effect
                className="object-cover bgimg"
            />
            <h1 className={`text-center p-2 rounded-lg Info ${montserrat.className}`}>
                {name}
            </h1>
        </a>
    );
}