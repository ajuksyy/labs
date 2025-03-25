import React from 'react';
import { Book as BookIcon } from 'lucide-react';

interface BookProps {
  title: string;
  author?: string;
  coverImage?: string;
  progress?: number;
  className?: string;
  onClick?: () => void;
}

const Book = ({
  title,
  author,
  coverImage,
  progress = 0,
  className = '',
  onClick,
}: BookProps) => {
  return (
    <div 
      className={`
        relative bg-white rounded-lg shadow-md overflow-hidden
        transition-transform duration-200 hover:scale-105
        cursor-pointer
        ${className}
      `}
      onClick={onClick}
    >
      {coverImage ? (
        <div className="aspect-[2/3] relative">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          {progress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
              <div
                className="h-full bg-blue-600"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="aspect-[2/3] bg-gray-100 flex items-center justify-center">
          <BookIcon className="h-12 w-12 text-gray-400" />
        </div>
      )}

      <div className="p-4">
        <h3 className="font-medium text-gray-900 line-clamp-2">{title}</h3>
        {author && (
          <p className="mt-1 text-sm text-gray-500">{author}</p>
        )}
        {progress > 0 && (
          <p className="mt-2 text-xs text-gray-400">
            {progress}% complete
          </p>
        )}
      </div>
    </div>
  );
};

export default Book;
