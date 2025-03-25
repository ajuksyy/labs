import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { FaCode, FaArrowLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowLeftIcon from '../../public/images/svg/ArrowLeftIcon';
import ArrowRightIcon from '../../public/images/svg/ArrowRightIcon';
import BookIcon from '../../public/images/svg/BookIcon';
import LightningIcon from '../../public/images/svg/LightningIcon';

// Import all component modules
import Avatar from './ui-components/Avatar';
import Badge from './ui-components/Badge';
import Book from './ui-components/Book';
import Button from './ui-components/Button';
import Calendar from './ui-components/Calendar';
import Checkbox from './ui-components/Checkbox';
import Choicebox from './ui-components/Choicebox';
import CodeBlock from './ui-components/CodeBlock';
import Collapse from './ui-components/Collapse';
import Combobox from './ui-components/Combobox';
import Spinner from './ui-components/Spinner';

interface ComponentItem {
  id: string;
  name: string;
  component: React.ReactNode;
  description?: string;
  code: string;
}

interface ComponentLibraryProps {
  onBackToHome?: () => void;
}

export default function ComponentLibrary({ onBackToHome }: ComponentLibraryProps) {
  const componentList: ComponentItem[] = [
    {
      id: 'avatar',
      name: 'Avatar',
      component: (
        <div className="space-x-4">
          <Avatar src="https://i.pravatar.cc/300" alt="User 1" size="sm" />
          <Avatar fallback="John Doe" size="md" />
          <Avatar size="lg" />
        </div>
      ),
      description: 'Avatars are used to represent a user or entity. They can display an image, initials, or a fallback icon.',
      code: `<Avatar src="https://i.pravatar.cc/300" alt="User 1" size="sm" />
<Avatar fallback="John Doe" size="md" />
<Avatar size="lg" />`
    },
    {
      id: 'badge',
      name: 'Badge',
      component: (
        <div className="space-x-2">
          <Badge text="Default" variant="default" />
          <Badge text="Success" variant="success" />
          <Badge text="Warning" variant="warning" />
          <Badge text="Error" variant="error" />
        </div>
      ),
      description: 'Badges are used to highlight an item\'s status for quick recognition.',
      code: `<Badge text="Default" variant="default" />
<Badge text="Success" variant="success" />
<Badge text="Warning" variant="warning" />
<Badge text="Error" variant="error" />`
    },
    {
      id: 'book',
      name: 'Book',
      component: (
        <div className="flex space-x-4">
          <Book 
            title="The Great Gatsby"
            author="F. Scott Fitzgerald"
            coverImage="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300"
            progress={75}
          />
          <Book 
            title="1984"
            author="George Orwell"
          />
        </div>
      ),
      description: 'Books are visual representations that can be used in educational or publishing applications.',
      code: `<Book 
  title="The Great Gatsby"
  author="F. Scott Fitzgerald"
  coverImage="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300"
  progress={75}
/>
<Book 
  title="1984"
  author="George Orwell"
/>`
    },
    {
      id: 'button',
      name: 'Button',
      component: (
        <div className="space-x-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button isLoading>Loading</Button>
        </div>
      ),
      description: 'Buttons allow users to take actions and make choices with a single tap.',
      code: `<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button isLoading>Loading</Button>`
    },
    {
      id: 'calendar',
      name: 'Calendar',
      component: <Calendar onDateSelect={(date) => console.log(date)} />,
      description: 'Calendars display dates in a month view and allow users to select dates or navigate between months and years.',
      code: `<Calendar onDateSelect={(date) => console.log(date)} />`
    },
    {
      id: 'checkbox',
      name: 'Checkbox',
      component: (
        <div className="space-y-2">
          <Checkbox label="Default checkbox" />
          <Checkbox label="Checked checkbox" checked />
          <Checkbox label="Disabled checkbox" disabled />
        </div>
      ),
      description: 'Checkboxes allow users to select one or more items from a set of options.',
      code: `<Checkbox label="Default checkbox" />
<Checkbox label="Checked checkbox" checked />
<Checkbox label="Disabled checkbox" disabled />`
    },
    {
      id: 'choicebox',
      name: 'Choicebox',
      component: (
        <Choicebox
          options={[
            { id: '1', label: 'Option 1', description: 'This is option 1' },
            { id: '2', label: 'Option 2', description: 'This is option 2' },
            { id: '3', label: 'Option 3', description: 'This is option 3' }
          ]}
        />
      ),
      description: 'Choiceboxes allow users to select a single option from a set of options with detailed descriptions.',
      code: `<Choicebox
  options={[
    { id: '1', label: 'Option 1', description: 'This is option 1' },
    { id: '2', label: 'Option 2', description: 'This is option 2' },
    { id: '3', label: 'Option 3', description: 'This is option 3' }
  ]}
/>`
    },
    {
      id: 'code-block',
      name: 'Code Block',
      component: (
        <CodeBlock
          code="const greeting = 'Hello World!';\nconsole.log(greeting);"
          language="typescript"
          showLineNumbers
        />
      ),
      description: 'Code blocks display formatted code snippets with syntax highlighting.',
      code: `<CodeBlock
  code="const greeting = 'Hello World!';\\nconsole.log(greeting);"
  language="typescript"
  showLineNumbers
/>`
    },
    {
      id: 'collapse',
      name: 'Collapse',
      component: (
        <Collapse title="Click to expand">
          <p className="text-gray-600">
            This is the content that will be shown when the collapse is expanded.
            You can put any content here.
          </p>
        </Collapse>
      ),
      description: 'Collapse components allow you to hide and show content in an accordion-like interface.',
      code: `<Collapse title="Click to expand">
  <p>
    This is the content that will be shown when the collapse is expanded.
    You can put any content here.
  </p>
</Collapse>`
    },
    {
      id: 'combobox',
      name: 'Combobox',
      component: (
        <Combobox
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' }
          ]}
          placeholder="Select an option"
        />
      ),
      description: 'Comboboxes combine a text input with a dropdown list, allowing users to filter through a large number of options.',
      code: `<Combobox
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ]}
  placeholder="Select an option"
/>`
    },
    {
      id: 'spinner',
      name: 'Spinner',
      component: (
        <div className="space-x-4">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      ),
      description: 'Indicate an action running in the background. Unlike the loading dots, this should generally be used to indicate loading feedback in response to a user action, like for buttons, pagination, etc.',
      code: `<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const handleComponentSelect = (index: number) => {
    setSelectedComponentIndex(index);
  };

  const handleNext = () => {
    if (selectedComponentIndex < componentList.length - 1) {
      setSelectedComponentIndex(selectedComponentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedComponentIndex > 0) {
      setSelectedComponentIndex(selectedComponentIndex - 1);
    }
  };

  const filteredComponents = componentList.filter(component => 
    component.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedComponent = filteredComponents[selectedComponentIndex] || null;

  return (
    <div className="flex h-screen bg-black text-gray-200">
      <div className="w-64 border-r border-[#2e2e2e] overflow-y-auto">
        <div className="px-4 py-[20px] border-b border-black bg-[#0a0a0a]">
          <h2 className="text-xl font-bold flex items-center">
            <FaArrowLeft 
              className="w-4 h-4 mr-2 cursor-pointer hover:text-blue-500 transition-colors" 
              onClick={onBackToHome}
            />
            Loop UI Library
          </h2>
        </div>
        <div className="p-4 border-b border-[#2e2e2e]">
          <h3 className="text-sm uppercase tracking-wider text-gray-400">Components</h3>
        </div>
        <nav className="mt-2">
          {filteredComponents.map((component, index) => (
            <motion.button
              key={component.id}
              onClick={() => handleComponentSelect(index)}
              className={`w-full text-left px-4 py-2 relative overflow-hidden ${
                selectedComponentIndex === index ? 'text-white' : 'text-gray-400'
              }`}
              whileHover={{ 
                backgroundColor: "rgba(55, 65, 81, 0.5)",
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {selectedComponentIndex === index && (
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"
                  layoutId="activeComponentIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <div className="relative z-10">
                {component.name}
              </div>
              {selectedComponentIndex === index && (
                <motion.div 
                  className="absolute inset-0 bg-[#2e2e2e]"
                  layoutId="activeComponentBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: -1 }}
                />
              )}
            </motion.button>
          ))}
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="border-b border-[#2e2e2e] px-4 py-[16.5px] flex items-center justify-between">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="search"
              className="bg-gray-900 pl-10 pr-4 py-1 rounded text-sm border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Labs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowCode(!showCode)}
              className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-colors duration-200 ${
                showCode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-[#2e2e2e] text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <FaCode className="w-4 h-4" />
              {showCode ? 'Preview' : 'Code'}
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {selectedComponent && (
              <motion.div
                key={showCode ? 'code' : 'preview'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {showCode ? (
                  <div className="bg-gray-900 rounded-lg p-6">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                      <code>{selectedComponent.code}</code>
                    </pre>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-semibold">{selectedComponent.name}</h2>
                    </div>
                    <p className="text-gray-400">{selectedComponent.description}</p>
                    <div className="mt-8 p-6 bg-gray-900 rounded-lg">
                      {selectedComponent.component}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="border-t border-[#2e2e2e] p-4 flex justify-between items-center">
          <button
            className="flex items-center text-gray-400 hover:text-white"
            onClick={handlePrevious}
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Previous
          </button>

          <div className="flex items-center space-x-2">
            <button className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-[#2e2e2e]">😊</button>
            <button className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-[#2e2e2e]">😐</button>
            <button className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-[#2e2e2e]">😢</button>
            <button className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-[#2e2e2e]">💡</button>
          </div>

          <button
            className="flex items-center text-gray-400 hover:text-white"
            onClick={handleNext}
          >
            Next
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
