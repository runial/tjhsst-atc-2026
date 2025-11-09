"use client"
import { NavBar } from "@/(components)/NavBar";
import { useRef } from "react";
import { useSectionFade } from "@/(effects)/sectionFade";
import { Footer } from "@/(components)/NewFooter";
import { Section } from "@/(components)/Section";
import { Markdown } from "@/(components)/Markdown";
import {
  ATCONNECT_MAIN_DESCRIPTION,
  ATCONNECT_ITERATIONS_DESCRIPTION,
  ATCONNECT_ITERATIONS,
  ATCONNECT_TAGLINE,
  ATCONNECT_OPEN_HOUSE_DESCRIPTION, SITE_LINKS
} from "@/app/constants";
import {ActionButton} from "@/(components)/ActionButton";


export default function ATConnectPage() {
  const main = useRef(null);

  useSectionFade(main);

  return (
    <div className="new-style min-h-screen">
      <NavBar />
      <main className="flex flex-col" ref={main}>
        <Section specialHeroImg>
          <div className="relative overflow-hidden rounded-b-4xl">
            <img
              src="/misc_imgs/tjhsst.webp"
              alt="TJHSST"
              className="w-full h-64 md:h-100 object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />{/* optional dim overlay */}
            <h1 className="absolute left-8 bottom-8 text-white px-4">
              Join us at ATConnect '26!
            </h1>
          </div>
        </Section>
        <Section className="flex flex-col lg:flex-row gap-16">
          <div className="flex flex-col gap-8 w-full lg:w-6/12">
            <h1>The student-led AT fair making a real difference.</h1>
            <Markdown>{ATCONNECT_MAIN_DESCRIPTION}</Markdown>
            <span>
              {ATCONNECT_ITERATIONS_DESCRIPTION}
              <span className="gap-2 underline">
                {ATCONNECT_ITERATIONS.map((iteration) => (
                  <a href={iteration.link} key={iteration.link}>{iteration.year}</a>
                ))}
              </span>
            </span>
          </div>
          <img src="/atconnect2025/atconnect2025_13.webp" alt="Group picture at ATConnect 2025" className="object-cover w-full lg:w-6/12 rounded-4xl "></img>
        </Section>
        <Section className="flex flex-col lg:flex-row gap-16">
          <h1 className="w-full lg:w-6/12">Info session</h1>
          <div className="w-full lg:w-6/12 flex flex-col gap-8">
            <Markdown>{ATCONNECT_OPEN_HOUSE_DESCRIPTION}</Markdown>
            {/*<ActionButton onClick={()=>{window.open(SITE_LINKS.OPENHOUSE25.linkUrl, '_blank')}}>Register now&nbsp;→</ActionButton>*/}
          </div>
        </Section>
        <Section className="flex flex-col gap-16">
          <h1>Why join?</h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-4/12 flex flex-col gap-8">
              <h2>1. Networking opportunities</h2>
              <p>For companies, educators, or even aspiring students, ATConnect offers the opportunity to network with 50+ people and 10+ companies who are deeply passionate about assistive technology.</p>
            </div>
            <div className="w-full lg:w-4/12 flex flex-col gap-8">
              <h2>2. Prizes and food</h2>
              <p>
                Hungry for lunch? We've got you covered with delicious food for all attendees. Plus, participate in our exciting student AT competition for a shot at prizes!
              </p>
            </div>
            <div className="w-full lg:w-4/12 flex flex-col gap-8">
              <h2>3. Experience cool technologies</h2>
              <p>
                With student innovations and company demos, we're sure you'll leave ATConnect with inspiration and awe at some of the genuinely fascinating assistive technologies out there.
              </p>
            </div>
          </div>
        </Section>
        {/*
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
        */}
        <Footer />
      </main>
    </div>
  );
}