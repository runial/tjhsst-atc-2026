"use client"
import { NavBar } from "@/(components)/NavBar";
import { useRef } from "react";
import { useSectionFade } from "@/(effects)/sectionFade";
import { Footer } from "@/(components)/NewFooter";
import { games } from "@/(assets)/games";
import { GAMES_HEADER } from "@/app/constants";
import { ProjectBox } from "@/(components)/Project";
import { Section } from "@/(components)/Section";

export default function GamesPage() {
    const main = useRef(null);

    useSectionFade(main);

    return (
      <div className="new-style min-h-screen">
          <NavBar />
          <main className="flex flex-col" ref={main}>
            <Section className="flex flex-col gap-8">
              <h1>{GAMES_HEADER}</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
                {games.map((project) => (
                  <ProjectBox key={project.name} project={project} />
                ))}
              </div>
            </Section>
              <Footer />
          </main>
      </div>
    );
}