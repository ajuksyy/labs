import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  id?: string;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const Checkbox = ({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
}: CheckboxProps) => {
  return (
    <label className={`inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div className={`
          w-5 h-5 border-2 rounded
          ${checked ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white'}
          transition-colors duration-200
        `}>
          {checked && (
            <Check className="h-4 w-4 text-white absolute top-0.5 left-0.5" />
          )}
        </div>
      </div>
      {label && (
        <span className="ml-2 text-sm text-gray-700">{label}</span>
      )}
    </label>
  );
};

export default Checkbox;
