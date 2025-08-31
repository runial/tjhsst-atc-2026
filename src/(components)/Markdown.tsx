import { MarkdownString } from '@/app/constants';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  children: MarkdownString;
  className?: string;
}

export function Markdown({children, className}: MarkdownProps) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <ReactMarkdown>
        {children}
      </ReactMarkdown>
    </div>
  );
}