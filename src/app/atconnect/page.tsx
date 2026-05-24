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
  ATCONNECT_OPEN_HOUSE_DESCRIPTION, SITE_LINKS
} from "@/app/constants";
import {ActionButton} from "@/(components)/ActionButton";


export default function ATConnectPage() {
  const main = useRef(null);

  useSectionFade(main);

  return (
    <div className="new-style min-h-screen relative">
      <div className="fixed top-0 left-0 right-0 z-999">
        <NavBar />
      </div>
      <main className="flex flex-col" ref={main}>
        <Section specialHeroImg>
          <div className="relative overflow-hidden rounded-b-2xl">
            <img
              src="/misc_imgs/tjhsst.webp"
              alt="TJHSST"
              className="w-full h-100 md:h-145 object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <h1 className="absolute inset-0 flex items-end justify-center px-4 pb-8 text-center text-white md:pb-12">
              ATConnect 2026 Recap
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
          <img src="/atconnect2026/atconnectpage.webp"
            alt="Group picture at ATConnect 2026"
            className="object-cover w-full lg:w-6/12 rounded-4xl"
          />
        </Section>
        <Section className="flex flex-col lg:flex-row gap-4 lg:gap-16">
          <h1 className="w-full lg:w-6/12">About ATConnect</h1>
          <div className="w-full lg:w-6/12 flex flex-col gap-8">
            <Markdown>{ATCONNECT_OPEN_HOUSE_DESCRIPTION}</Markdown>
            {/* <ActionButton onClick={()=>{window.open(SITE_LINKS.INTERESTFORM26.linkUrl, '_blank')}}>Register now&nbsp;→</ActionButton> */}
          </div>
        </Section>
        <Section className="flex flex-col gap-8">
          <h1>ATConnect 2026 Sponsors</h1>
          <div className="flex w-full flex-col gap-6 rounded-4xl bg-amber-200 p-6 text-black md:flex-row md:gap-10 md:p-8">
            <h2 className="shrink-0 md:w-28">Gold</h2>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="flex h-32 w-full items-center justify-center rounded-lg bg-white p-4 sm:h-40 sm:w-55">
                <img src="/sponsors/PartnershipFund.webp" alt="TJ Partnership Fund" className="w-35 max-w-full max-h-full object-contain" />
              </div>
              <div className="flex h-32 w-full items-center justify-center rounded-lg bg-white p-4 sm:h-40 sm:w-55">
                <img src="/sponsors/aph.webp" alt="American Printing House for the Blind" className="w-45 max-w-full max-h-full object-contain" />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 rounded-4xl bg-slate-200 p-6 text-black md:flex-row md:gap-10 md:p-8">
            <h2 className="shrink-0 md:w-28">Silver</h2>
          </div>
          <div className="flex w-full flex-col gap-6 rounded-4xl bg-orange-200 p-6 text-black md:flex-row md:gap-10 md:p-8">
            <h2 className="shrink-0 md:w-28">Bronze</h2>
            <div className="flex h-32 w-full items-center justify-center rounded-lg bg-white p-4 sm:h-40 sm:w-55">
              <img src="/sponsors/tobiidynavox.webp" alt="Tobii Dynavox" className="w-45 max-w-full max-h-full object-contain" />
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 rounded-4xl bg-emerald-200 p-6 text-black md:flex-row md:gap-10 md:p-8">
            <h2 className="shrink-0 md:w-28">Booths</h2>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="flex h-32 w-full items-center justify-center rounded-lg bg-white p-4 sm:h-40 sm:w-55">
                <img src="/sponsors/arcofnova.webp" alt="Arc of Northern Virginia" className="w-40 max-w-full max-h-full object-contain" />
              </div>
              <div className="flex h-32 w-full items-center justify-center rounded-lg bg-[#1b243f] p-4 sm:h-40 sm:w-55">
                <img src="/sponsors/bis.webp" alt="Brain Injury Services" className="w-50 max-w-full max-h-full object-contain" />
              </div>
              <div className="flex h-32 w-full items-center justify-center rounded-lg bg-[#fffef9] p-4 sm:h-40 sm:w-55">
                <img src="/sponsors/poi.webp" alt="Pieces of Illumination" className="w-35 max-w-full max-h-full object-contain" />
              </div>
              <div className="flex h-32 w-full items-center justify-center rounded-lg bg-[#296039] p-4 sm:h-40 sm:w-55">
                <img src="/sponsors/nvcc.webp" alt="Northern Virginia Community College" className="w-40 max-w-full max-h-full object-contain" />
              </div>
            </div>
          </div>
        </Section>
        <Section className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h1>Event Highlights</h1>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
            <div className="flex flex-col gap-6 rounded-4xl bg-sky-200 p-8 text-black md:col-span-2 xl:col-span-3">
              <div className="flex items-center gap-3">
                <span className="w-fit rounded-full bg-white/80 px-4 py-1 text-sm font-semibold">1</span>
                <h2>Community connections</h2>
              </div>
              <p className="max-w-xl">
                ATConnect brought together students, educators, companies, and community members who are passionate about assistive technology and accessibility.
              </p>
            </div>
            <div className="flex flex-col gap-6 rounded-4xl bg-red-200 p-8 text-black md:col-span-2 xl:col-span-3">
              <div className="flex items-center gap-3">
                <span className="w-fit rounded-full bg-white/80 px-4 py-1 text-sm font-semibold">2</span>
                <h2>Projects, prizes, and food</h2>
              </div>
              <p className="max-w-xl">
                Attendees enjoyed food, student-led project showcases, and a competition recognizing creative assistive technology ideas.
              </p>
            </div>
            <div className="flex flex-col gap-6 rounded-4xl bg-emerald-200 p-8 text-black md:col-span-2 xl:col-span-6">
              <div className="flex items-center gap-3">
                <span className="w-fit rounded-full bg-white/80 px-4 py-1 text-sm font-semibold">3</span>
                <h2>Assistive technology in action</h2>
              </div>
              <p className="max-w-4xl">
                Through student innovations, company demos, and hands-on activities, attendees got to experience how technology can make the world more accessible.
              </p>
            </div>
          </div>
        </Section>
        <Footer />
      </main>
    </div>
  );
}
