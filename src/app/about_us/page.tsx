"use client"
import { useRef, ReactNode } from "react";
import { NavBar } from "@/(components)/NavBar";
import { Footer } from "@/(components)/NewFooter";
import { Section } from "@/(components)/Section";
import { Carousel } from "@/(components)/Carousel";
import { useSectionFade } from "@/(effects)/sectionFade";
import {
  ABOUT_SECTION_HEADERS,
  ABOUT_SECTION_DESCRIPTIONS,
  ABOUT_ACTIVITIES,
  ABOUT_STATS,
} from "@/app/constants";
import {LeadershipSection} from "@/(components)/LeadershipSection";

interface BoxProps {
  children: ReactNode;
  className?: string;
}

function Box({ children, className }: BoxProps) {
  return (
    <div className={`lg:border-2 lg:border-zinc-500 lg:rounded-2xl lg:px-8 lg:py-8 ${className} lg:flex lg:justify-center lg:items-center`}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  const main = useRef(null);

  useSectionFade(main);

  const heroImages = ['/misc_imgs/1.jpg', '/misc_imgs/2.jpg', '/misc_imgs/3.jpg', '/misc_imgs/4.jpg'];

  return (
    <div className="new-style min-h-screen">
      <NavBar />
      <main className="flex flex-col" ref={main}>
        <Section className="flex flex-col lg:flex-row lg:pb-6 gap-12">
          <Box className="flex-1/2">
            <div className="flex flex-col gap-2">
            <h1 className="">{ABOUT_SECTION_HEADERS.HERO}</h1>
            <p className="lg:text-sm">{ABOUT_SECTION_DESCRIPTIONS.HERO}</p>
            </div>
          </Box>
          <div className="w-full flex-1/2">
            <Carousel images={heroImages} showNavigationDots={false} hFull={true} />
          </div>
        </Section>
        <Section className="flex gap-64 lg:gap-12 flex-col lg:flex-row lg:pt-6 lg:pb-6">
          <Box className="flex flex-col gap-8">
            <h1 className="block lg:hidden">{ABOUT_SECTION_HEADERS.STATS}</h1>
            <ul className="flex flex-row lg:flex-col gap-8">
              {/* Stats */}

              {ABOUT_STATS.map((stat) => (
                <li key={stat.name} className="flex-1">
                  <h1>{stat.value}</h1>
                  <p>{stat.name}</p>
                </li>
              ))}
            </ul>
          </Box>
          <Box>
            <div className="flex flex-col gap-8">
              <h1 className="block mt-30 lg:hidden">{ABOUT_SECTION_HEADERS.ACTIVITIES}</h1>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-10">
                {/* Activities */}

                {ABOUT_ACTIVITIES.map((activity) => (
                  <li key={activity.name} className="flex flex-col gap-2">
                    <h2>{activity.name}</h2>
                    <p className="text-sm">{activity.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Box>
        </Section>
        <Section className="flex gap-8 lg:pt-6">

          <Box className="flex-1/2">
            <div className="flex flex-col gap-4">
              <h1 className="flex-1">{ABOUT_SECTION_HEADERS.RECRUITING}</h1>
              <p className="flex-1">{ABOUT_SECTION_DESCRIPTIONS.RECRUITING}</p>
            </div>
          </Box>
        </Section>
        {/*<Section className="flex gap-8">*/}
        {/*  <div className="w-full flex-1/2">*/}
        {/*    <Carousel images={heroImages} showNavigationDots={false} hFull={false} />*/}
        {/*  </div>*/}
        {/*</Section>*/}
        <LeadershipSection />
        <Footer />
      </main>
    </div>
  );
}