import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  specialHeroImg?: boolean;
}

export function Section({ children, className, specialHeroImg }: SectionProps) {
  specialHeroImg ??= false;
  return (
    <section className={`section-hidden justify-between max-w-full mx-auto ${specialHeroImg ? "pt-0 pb-6 lg:pb-12" : "pt-36 w-7xl pb-12 lg:pb-24 px-7 md:px-10"} ${className}`}>
      {children}
    </section>
  );
}
