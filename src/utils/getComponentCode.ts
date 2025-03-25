/**
 * Utility function to get component source code
 * 
 * This is a placeholder implementation that returns hardcoded examples.
 * In a real application, you might want to use a more sophisticated approach
 * like fetching the actual source code from your file system or a code repository.
 */

const componentCodeExamples: Record<string, string> = {
  avatar: `import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Avatar: React.FC<AvatarProps> = ({ 
  src = 'https://i.pravatar.cc/300', 
  alt = 'User avatar',
  size = 'md'
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      className={\`\${sizes[size]} rounded-full object-cover\`}
    />
  );
};

export default Avatar;`,
  
  button: `import React from 'react';

interface ButtonProps {
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  text = 'Button', 
  variant = 'primary', 
  size = 'md',
  onClick 
}) => {
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-50'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <button 
      className={\`\${variants[variant]} \${sizes[size]} rounded focus:outline-none focus:ring-2 focus:ring-blue-300\`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;`,
  
  badge: `import React from 'react';

interface BadgeProps {
  text?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const Badge: React.FC<BadgeProps> = ({ 
  text = 'Badge', 
  variant = 'default' 
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-purple-100 text-purple-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800'
  };

  return (
    <span className={\`\${variants[variant]} inline-block px-2 py-1 text-xs font-semibold rounded-full\`}>
      {text}
    </span>
  );
};

export default Badge;`,
  
  book: `import React from 'react';

interface BookProps {
  title?: string;
  author?: string;
  coverSrc?: string;
}

const Book: React.FC<BookProps> = ({ 
  title = 'Book Title', 
  author = 'Author Name',
  coverSrc = 'https://via.placeholder.com/150x200'
}) => {
  return (
    <div className="flex flex-col max-w-[150px]">
      <div className="relative h-[200px] w-[150px] bg-gray-200 rounded-md overflow-hidden shadow-md">
        <img 
          src={coverSrc} 
          alt={\`\${title} cover\`} 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-2">
        <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
        <p className="text-xs text-gray-500">{author}</p>
      </div>
    </div>
  );
};

export default Book;`,
  
  'code-block': `import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code = 'console.log(\'Hello World!\');', 
  language = 'javascript' 
}) => {
  return (
    <div className="bg-gray-800 rounded-md overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-700">
        <span className="text-xs text-gray-300">{language}</span>
        <button className="text-xs text-gray-300 hover:text-white">Copy</button>
      </div>
      <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;`,
  
  calendar: `import React, { useState } from 'react';

interface CalendarProps {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ 
  initialDate = new Date(),
  onDateSelect 
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  
  const handleDateClick = (day: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(newDate);
    if (onDateSelect) onDateSelect(newDate);
  };
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-500 text-white p-4">
        <div className="flex justify-between items-center">
          <button className="text-white">&lt;</button>
          <h2 className="font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button className="text-white">&gt;</button>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className="text-center text-xs text-gray-500">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={\`empty-\${index}\`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const isSelected = selectedDate && 
              selectedDate.getDate() === day && 
              selectedDate.getMonth() === currentDate.getMonth() && 
              selectedDate.getFullYear() === currentDate.getFullYear();
            
            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={\`h-8 w-8 rounded-full flex items-center justify-center text-sm \${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}\`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;`,
  
  checkbox: `import React, { useState } from 'react';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ 
  label = 'Checkbox', 
  checked: initialChecked = false,
  onChange,
  disabled = false
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    if (onChange) onChange(newChecked);
  };
  
  return (
    <label className={\`flex items-center cursor-pointer \${disabled ? 'opacity-50 cursor-not-allowed' : ''}\`}>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
        />
        <div className={\`w-5 h-5 border rounded transition-colors \${isChecked ? 'bg-blue-500 border-blue-500' : 'border-gray-300 bg-white'}\`}>
          {isChecked && (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-white" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          )}
        </div>
      </div>
      <span className="ml-2 text-sm">{label}</span>
    </label>
  );
};

export default Checkbox;`,
  
  spinner: `import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
}

const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'md',
  color = 'primary'
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colors = {
    primary: 'border-blue-500',
    secondary: 'border-gray-500',
    white: 'border-white'
  };

  return (
    <div className="flex justify-center items-center">
      <div 
        className={\`\${sizes[size]} \${colors[color]} border-t-2 border-r-2 border-b-2 border-transparent rounded-full animate-spin\`}
      />
    </div>
  );
};

export default Spinner;`
};

export const getComponentCode = (componentId: string): string => {
  return componentCodeExamples[componentId] || 
    `// Code for ${componentId} component is not available`;
};
