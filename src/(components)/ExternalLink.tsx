import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  underline?: boolean;
}

export function ExternalLink({ href, children, underline }: LinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={underline ? "underline" : ""} >
      {children}
    </a>
  );
}