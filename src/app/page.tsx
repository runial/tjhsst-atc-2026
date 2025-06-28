"use client"
import { useRef } from 'react'
import { NavBar } from "@/(components)/NavBar";
import { Section } from "@/(components)/Section";
import { ProjectBox } from "@/(components)/Project";
import { Footer } from "@/(components)/NewFooter";
import { Carousel } from "@/(components)/Carousel";
import { LeadershipSection } from "@/(components)/LeadershipSection"
import { games } from "@/(assets)/games";
import { useSectionFade } from "@/(effects)/sectionFade";
import {
  HOME_ATCONNECT_IMAGES,
  HOME_SECTION_DESCRIPTIONS,
  HOME_SECTION_HEADERS,
  HOME_SECTION_MORE_TEXT,
  NAVBAR_LINKS,
} from "@/app/constants";

const heroImages = ['/1.jpg', '/2.png', '/3.jpg', '/4.png'];

export default function Home() {
  const main = useRef(null);

  useSectionFade(main);

  return (
    <div className="new-style min-h-screen">
      <NavBar />
      <main className="flex flex-col" ref={main}>
        <Section className="flex flex-col lg:flex-row gap-16 lg:gap-30">
          <div className="flex flex-col flex-5/12 justify-center gap-8">

            <h1>{HOME_SECTION_HEADERS.HERO}</h1>
            <p>{HOME_SECTION_DESCRIPTIONS.HERO}</p>
          </div>
          <div className="w-full lg:w-6/12">
            <Carousel images={heroImages} />
          </div>
        </Section>

        <Section className="flex flex-col lg:flex-row gap-4">
          <h1 className="flex-1">{HOME_SECTION_HEADERS.ABOUT}</h1>
          <div className="flex-1 flex flex-col gap-8">
            <p>{HOME_SECTION_DESCRIPTIONS.ABOUT}</p>
            <h2><a href={NAVBAR_LINKS[0].linkUrl}>{HOME_SECTION_MORE_TEXT.ABOUT}</a></h2>
          </div>
        </Section>
        <Section className="flex flex-col gap-8">
          <h1>{HOME_SECTION_HEADERS.PROJECTS}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {games.slice(0,6).map((project) => (
              <ProjectBox key={project.name} project={project} />
            ))}
          </div>
          <h2 className="text-center mt-10">
            <a href={NAVBAR_LINKS[1].linkUrl}>{HOME_SECTION_MORE_TEXT.PROJECTS}</a>
          </h2>
        </Section>
        <LeadershipSection />
        <Section className="flex flex-col lg:flex-row gap-16 lg:gap-30">
          <div className="flex flex-col flex-5/12 justify-center gap-8">
            <h1 className="text-center">{HOME_SECTION_HEADERS.ATCONNECT}</h1>
            <p>{HOME_SECTION_DESCRIPTIONS.ATCONNECT}</p>
          </div>
          <div className="w-full lg:w-6/12">
            <Carousel images={HOME_ATCONNECT_IMAGES} />
          </div>
        </Section>
        <Footer />
      </main>
    </div>
  );
}