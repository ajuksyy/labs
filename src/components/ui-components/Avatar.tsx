import React from 'react';
import { User } from 'lucide-react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
  className?: string;
}

const Avatar = ({
  src,
  alt = '',
  size = 'md',
  fallback,
  className = '',
}: AvatarProps) => {
  const sizes = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
  };

  const getFallbackInitials = () => {
    if (!fallback) return '';
    return fallback
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={`
        relative inline-flex items-center justify-center
        rounded-full bg-gray-100 overflow-hidden
        ${sizes[size]}
        ${className}
      `}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      ) : fallback ? (
        <span className="font-medium text-gray-600">
          {getFallbackInitials()}
        </span>
      ) : (
        <User className="h-1/2 w-1/2 text-gray-400" />
      )}
    </div>
  );
};

export default Avatar;
