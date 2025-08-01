import * as React from 'react'

interface ActionButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export function ActionButton({ children, onClick, className }: ActionButtonProps) {
  return (
    <button onClick={onClick} className={`bg-bg border-solid border-2 border-fg px-4 py-2 rounded-2xl hover:bg-fg hover:text-bg ${className}`}>
      {children}
    </button>
  );
}