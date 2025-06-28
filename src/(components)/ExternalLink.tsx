import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
}

export function ExternalLink({ href, children }: LinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}