import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "ATConnect",
  description: "Learn all about ATConnect, a student-led assistive tech fair connecting students, educators, and companies from across Northern Virginia.",
  keywords: ["ATConnect", "TJHSST", "TJ", "assistive technology", "ATC", "TJ ATC", "TJHSST ATC", "TJHSST clubs", "eighth period"],
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
