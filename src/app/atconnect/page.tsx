"use client"
import { NavBar } from "@/(components)/NavBar";
import { useRef } from "react";
import { useSectionFade } from "@/(effects)/sectionFade";
import { Footer } from "@/(components)/NewFooter";
import { Section } from "@/(components)/Section";
import { Markdown } from "@/(components)/Markdown";
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
          <Markdown>{ATCONNECT_DESCRIPTION}</Markdown>
          <span>
            {ATCONNECT_ITERATIONS_DESCRIPTION}
            <span className="gap-2 underline">
              {ATCONNECT_ITERATIONS.map((iteration) => (
                <a href={iteration.link} key={iteration.link}>{iteration.year}</a>
              ))}
            </span>
          </span>
        </Section>
        <Footer />
      </main>
    </div>
  );
}