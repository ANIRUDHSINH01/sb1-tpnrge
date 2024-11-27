import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NeonButton({ children, onClick, className = '' }: NeonButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-6 py-3 bg-gray-900 text-green-400
        rounded-lg border border-green-400
        transition-all duration-300
        hover:bg-gray-800
        hover:text-green-300
        neon-border
        ${className}
      `}
    >
      {children}
    </button>
  );
}