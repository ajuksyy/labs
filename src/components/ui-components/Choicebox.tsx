import React from 'react';
import { Check } from 'lucide-react';

interface ChoiceboxProps {
  options: Array<{
    id: string;
    label: string;
    description?: string;
  }>;
  selectedId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

const Choicebox = ({
  options,
  selectedId,
  onChange,
  className = '',
}: ChoiceboxProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {options.map((option) => {
        const isSelected = option.id === selectedId;
        
        return (
          <div
            key={option.id}
            onClick={() => onChange?.(option.id)}
            className={`
              relative rounded-lg border-2 p-4 cursor-pointer
              transition-all duration-200
              ${isSelected 
                ? 'border-blue-600 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
              }
            `}
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">
                  {option.label}
                </h3>
                {option.description && (
                  <p className="mt-1 text-sm text-gray-500">
                    {option.description}
                  </p>
                )}
              </div>
              <div className={`
                w-5 h-5 rounded-full border-2
                flex items-center justify-center
                ${isSelected 
                  ? 'bg-blue-600 border-blue-600' 
                  : 'border-gray-300'
                }
              `}>
                {isSelected && (
                  <Check className="h-3 w-3 text-white" />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Choicebox;
