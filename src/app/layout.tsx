import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TJHSST Assistive Technology Club",
  description: "The official website for the Assistive Technology Club at Thomas Jefferson High School for Science and Technology. Learn more about our projects, events, and how to get involved.",
  keywords: ["TJHSST", "TJ", "assistive technology", "ATC", "TJ ATC", "TJHSST ATC", "TJHSST clubs", "eighth period"],
  openGraph: {
    title: "TJHSST Assistive Technology Club",
    description: "The official website for the Assistive Technology Club at Thomas Jefferson High School for Science and Technology.",
    url: "https://www.tjatc.org",
    siteName: "TJHSST Assistive Technology Club",
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          rel="preload"
          href="/fonts/roboto_flex.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}