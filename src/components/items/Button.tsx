import { ButtonHTMLAttributes, FC } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  size = 'md',
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'font-bold rounded-[8px] transition-colors';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100',
    secondary: 'bg-black text-white hover:bg-gray-900',
  };
  
  const sizes = {
    sm: 'px-4 py-1.5 text-[12px]',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href}>
        <button className={buttonClasses} onClick={onClick} {...props}>
          {children}
        </button>
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;