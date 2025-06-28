import React, { memo, useState, useCallback, useLayoutEffect, useRef, useEffect } from 'react';
import {
  NAVBAR_CLUB_NAME,
  NAVBAR_HOMEPAGE_LINK,
  NAVBAR_LINKS,
} from "@/app/constants";
import { gsap } from 'gsap';

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#F5F5F5"/>
    </svg>
  );
}

function CloseMenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#F5F5F5"/>
    </svg>
  )
}

export const NavBar = memo(function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    gsap.killTweensOf(navElement);
    gsap.to(navElement, {
      y: isNavVisible ? '0%' : '-100%',
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
      ease: 'power2.inOut',
    });
  }, [isNavVisible]);

  useLayoutEffect(() => {
    if (mobileMenuOpen) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      if (Math.abs(currentScrollY - lastScrollY) < 20) return;

      if (direction === 'down' && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      lastScrollY = currentScrollY < 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prevOpen) => !prevOpen);
  }, []);

  return (
    <div className="w-full overflow-none bg-none" style={{display: 'unset'}}>
      <nav ref={navRef} className={`
        flex flex-col gap-12 bg-bg/75 backdrop-blur-md py-6 px-10 w-full max-w-full mx-auto z-999
        ${mobileMenuOpen ? 'w-screen h-screen fixed' : 'relative'}
        md:h-auto
        sticky top-0
      `}>
        <div className="flex justify-between">
          <a href={NAVBAR_HOMEPAGE_LINK} className="flex gap-3 items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#FFFFFF" strokeWidth="12"/>

              <polygon points="10,30 190,30 100,185" fill="none" stroke="#FFFFFF" strokeWidth="12"/>

              <line x1="100" y1="30" x2="100" y2="190" stroke="#FFFFFF" strokeWidth="12"/>
            </svg>
            <h3>{NAVBAR_CLUB_NAME}</h3>
          </a>
          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} className="block md:hidden">
            {
              mobileMenuOpen ? (
                <CloseMenuIcon />
              ) : (
                <MenuIcon />
              )
            }
          </button>
          {/* Desktop menu */}
          <ul className={`hidden md:flex md:gap-7 md:items-center`}>
            {NAVBAR_LINKS.map(({ linkText, linkUrl }) => (
              <li className="w-fit" key={linkText}>
                <a href={linkUrl}><h3>{linkText}</h3></a>
              </li>
            ))}
          </ul>

        </div>
        {/* Mobile menu */}
        <ul className={`flex flex-col gap-5 ${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          {NAVBAR_LINKS.map(({ linkText, linkUrl }) => (
            <li className="w-fit" key={linkText}>
              <a href={linkUrl}>
                <h2>{linkText}</h2>
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </div>
  );
});