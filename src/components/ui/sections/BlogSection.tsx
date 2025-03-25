'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaClipboardList, FaClock, FaUsers } from 'react-icons/fa';
import BookIcon from '../../../../public/images/svg/BookIcon';

interface BlogPost {
  title: string;
  category: string;
  categoryColor: string;
  date: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Workflow Efficiency",
      category: "Efficiency",
      categoryColor: "text-green-500",
      date: "Nov 30, 2024",
      description: "Enhance Workflow Efficiency with Custom Filters",
      link: "#",
      icon: <FaClipboardList size={20} className="text-white" />
    },
    {
      title: "Mastering Time Management",
      category: "Productivity",
      categoryColor: "text-yellow-500",
      date: "Oct 23, 2024",
      description: "Mastering Time Management for Maximum Efficiency",
      link: "#",
      icon: <FaClock size={20} className="text-white" />
    },
    {
      title: "Task Management Tips",
      category: "Collaboration",
      categoryColor: "text-blue-500",
      date: "Oct 22, 2024",
      description: "Boost Team Collaboration with Effective Task Management",
      link: "#",
      icon: <FaUsers size={20} className="text-white" />
    }
  ];

  return (
    <section className="py-28 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 w-full"
        >
          <div className="inline-flex items-center justify-center gap-2 text-xs font-medium text-purple-500 mb-4">
            <BookIcon className="text-purple-500" />
            Our Blogs
          </div>
          <h2 className="text-4xl font-bold text-white">
            News, insights and more
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 place-items-center w-full">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-[#111112] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 ease-out relative group w-full max-w-[350px] mx-auto"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden">
                <div className="relative h-[160px] w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-[#111112]">
                  {/* Glow spot behind the icon */}
                  <div className="absolute w-24 h-24 rounded-full bg-white/5 blur-xl"></div>
                  
                  <div className="relative mb-3">
                    <div className="absolute -inset-3 rounded-full bg-white/5 blur-md"></div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center relative z-10">
                      {post.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white z-10 text-center px-4">{post.title}</h3>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-medium ${post.categoryColor}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  
                  <p className="text-xs text-white mb-3">{post.description}</p>
                  
                  <Link href={post.link} className="text-xs font-medium text-white hover:text-gray-300 transition-colors inline-flex items-center">
                    Read Full Blog <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
