import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Spinner = ({ size = 'md', className = '' }: SpinnerProps) => {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div className={`
      inline-block animate-spin rounded-full 
      border-gray-300 border-t-white
      ${sizes[size]}
      ${className}
    `} />
  );
};

export default Spinner;
