import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "TJ ATC - Games",
  description: "View games created by TJHSST's Assistive Technology Club.",
  keywords: ["TJHSST", "TJ", "assistive technology", "ATC", "TJ ATC", "TJHSST ATC", "TJHSST clubs", "eighth period"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
      <html lang="en" dir="ltr">
      <body>
      {children}
      </body>
      </html>
    );
}
