import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const CodeBlock = ({
  code,
  language = 'typescript',
  showLineNumbers = true,
  className = '',
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className={`relative rounded-lg bg-gray-900 ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
        <span className="text-sm text-gray-400">{language}</span>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md text-gray-400 hover:bg-gray-800 transition-colors"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="w-8 inline-block text-gray-500 select-none">
                  {index + 1}
                </span>
              )}
              <span className="flex-1 text-gray-300">{line}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
