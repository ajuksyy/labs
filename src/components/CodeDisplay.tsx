import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegCopy, FaCheck } from 'react-icons/fa';

interface CodeDisplayProps {
  code: string;
  isOpen: boolean;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code, isOpen }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: 'auto', 
            opacity: 1,
            transition: { 
              height: { duration: 0.3 },
              opacity: { duration: 0.3, delay: 0.1 }
            }
          }}
          exit={{ 
            height: 0, 
            opacity: 0,
            transition: { 
              height: { duration: 0.3 },
              opacity: { duration: 0.2 }
            }
          }}
          className="overflow-hidden border-t border-gray-700 mt-2"
        >
          <div className="relative bg-gray-900 rounded-md p-4 mt-2">
            <button
              onClick={handleCopyCode}
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Copy code"
            >
              <motion.div
                initial={false}
                animate={{ rotate: copied ? 360 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {copied ? <FaCheck className="text-green-500" /> : <FaRegCopy />}
              </motion.div>
            </button>
            <pre className="text-sm text-gray-300 whitespace-pre-wrap pt-8 pb-2 overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CodeDisplay;
