"use client";
import Link from 'next/link'
import Hamburger from './Hamburger';
import './Nav.css'
import { Montserrat } from "next/font/google";
import React, {useState} from 'react';

const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});


interface BoxProps{
    place: number;
    color: string;
}

export default function Nav(props: BoxProps){

    const [LinksClass, setLinksClass] = useState("")
    const [ItemsClass, setItemsClass] = useState("")
    
    const toggleit = () =>{
        if (LinksClass === ""){
            setLinksClass   ("On")
            setItemsClass ("Off")
        } 
        else{
            setLinksClass("")
            setItemsClass ("")
        }
    }

    
    
    return(
        <div className={['Nav',ItemsClass, montserrat.className, props.color].join(' ')}>
            <div className={['Logo'].join(' ')}>
                <a href="/" id='LogoRI'>TJ ATC</a>
                <div id="LogoMID"></div>
                <span onClick={toggleit} className="navbar-toggle" id="js-navbar-toggle">
                   <Hamburger /> 
                </span>
            </div>
            <div className={['Navlinks', LinksClass].join(' ')}>
                <Link href="/about_us" style={props.place===0 ? { borderBottom: "5px solid #453F78"} : {}}>About</Link>
                <Link href="/games" style={props.place===1 ? {borderBottom: "5px solid #453F78"} : {}}>Games</Link>
                {/*<Link href="/books" style={props.place===2 ? { borderBottom: "5px solid #453F78"} : {}}>Books</Link>*/}
                <Link href="/at_connect" style={props.place===5 ? { borderBottom: "5px solid #453F78"} : {}}>ATConnect</Link>
            </div>
        </div>
    )
    
}