// components/FAQ.tsx
import { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Who is Adrian Carter?',
    answer: ''
  },
  {
    question: 'What services do you provide?',
    answer: ''
  },
  {
    question: 'What is your approach to web design?',
    answer: 'I focus on understanding your goals and brand to create a website that reflects your vision while prioritizing usability and aesthetics.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2); 

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#010101] text-white py-16 px-4 relative ">
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-blue-500/30 via-transparent to-transparent blur-[100px] pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 md:pr-8 mb-8 md:mb-0"
        >
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left">Your Questions Answered</h2>
          <p className="text-[#91949c] text-center md:text-left mb-6">
            Find the answers to our most common questions here, but if you still need help, feel free to contact me.
          </p>
          <div className="text-center md:text-left">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#131313] border flex flex-row items-center gap-x-1 border-[#292b2b] text-[#8c8c8c] px-6 py-2 rounded-xl hover:bg-[#252527] transition-colors"
            >
              <MdArrowOutward />Contact Me
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:w-1/2 md:pl-8 space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#131313] p-4 rounded-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <motion.span 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl"
                >
                  {openIndex === index ? '−' : '+'}
                </motion.span>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-2 text-[#9a9ca1]">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQ;
