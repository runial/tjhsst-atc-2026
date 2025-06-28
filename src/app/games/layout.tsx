import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "TJ ATC",
    description: "Website for the Assistive Technology Club at TJHSST.",
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
