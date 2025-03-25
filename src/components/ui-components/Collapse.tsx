import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const Collapse = ({
  title,
  children,
  defaultOpen = false,
  className = '',
}: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border rounded-lg ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`h-5 w-5 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`
          overflow-hidden transition-all duration-200
          ${isOpen ? 'max-h-96' : 'max-h-0'}
        `}
      >
        <div className="p-4 pt-0">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
