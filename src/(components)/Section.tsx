import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={`section-hidden justify-between pt-36 pb-36 w-7xl max-w-full mx-auto px-10 ${className}`}>
      {children}
    </section>
  );
}