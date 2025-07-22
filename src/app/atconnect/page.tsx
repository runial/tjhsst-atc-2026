"use client"
import { NavBar } from "@/(components)/NavBar";
import { useRef } from "react";
import { useSectionFade } from "@/(effects)/sectionFade";
import { Footer } from "@/(components)/NewFooter";
import { ExternalLink } from "@/(components)/ExternalLink";
import { Section } from "@/(components)/Section";
import {
  ATCONNECT_DESCRIPTION,
  ATCONNECT_ITERATIONS_DESCRIPTION,
  ATCONNECT_ITERATIONS,
  ATCONNECT_TAGLINE,
} from "@/app/constants";


export default function GamesPage() {
  const main = useRef(null);

  useSectionFade(main);

  return (
    <div className="new-style min-h-screen">
      <NavBar />
      <main className="flex flex-col" ref={main}>
        <Section className="flex flex-col gap-8">
          <h1>{ATCONNECT_TAGLINE}</h1>
          <p>{ATCONNECT_DESCRIPTION}</p>
          <span>
            {ATCONNECT_ITERATIONS_DESCRIPTION}
            <span className="gap-2">
              {ATCONNECT_ITERATIONS.map((iteration) => (
                <ExternalLink href={iteration.link} key={iteration.link} underline>{iteration.year}</ExternalLink>
              ))}
            </span>
          </span>
        </Section>
        <Footer />
      </main>
    </div>
  );
}