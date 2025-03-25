'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  MdBolt,
  MdGroups,
  MdBuildCircle,
  MdInsights,
  MdTaskAlt,
  MdSync
} from "react-icons/md";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    whileHover={{ 
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    className="bg-[#111112] p-6 rounded-xl border border-[#252527] hover:border-[#333435] transition-all h-[200px] flex flex-col items-center text-center"
  >
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3, delay: index * 0.1 + 0.2, ease: "easeOut" }}
      className="bg-[#1a1a1b] w-12 h-12 rounded-lg flex items-center justify-center mb-5 text-white"
    >
      {icon}
    </motion.div>
    <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>
    <p className="text-[#91949c] text-sm flex-1">{description}</p>
  </motion.div>
);

const StatItem: FC<{ value: string; label: string; index: number }> = ({ value, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
    className="text-center"
  >
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: index * 0.2 + 0.2, ease: "easeOut" }}
      className="text-white text-3xl font-bold mb-1 bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent"
    >
      {value}
    </motion.div>
    <div className="text-[#9a9ca1] text-sm">{label}</div>
  </motion.div>
);

const BenefitsSection: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <MdBolt className="text-2xl" />,
      title: "Increased Efficiency",
      description: "Streamline processes to save time and resources."
    },
    {
      icon: <MdGroups className="text-2xl" />,
      title: "Enhanced Collaboration",
      description: "Foster teamwork with seamless communication tools."
    },
    {
      icon: <MdBuildCircle className="text-2xl" />,
      title: "Custom Workflows",
      description: "Tailor workflows to fit your team's unique needs."
    },
    {
      icon: <MdInsights className="text-2xl" />,
      title: "Real-Time Insights",
      description: "Access live data to make informed decisions."
    },
    {
      icon: <MdTaskAlt className="text-2xl" />,
      title: "Task Accountability",
      description: "Assign tasks clearly to ensure ownership and responsibility."
    },
    {
      icon: <MdSync className="text-2xl" />,
      title: "Flexible Integration",
      description: "Connect with existing tools for a unified experience."
    }
  ];

  const stats = [
    { value: "76%", label: "Pro Users" },
    { value: "12M+", label: "Tasks Organized" },
    { value: "600+", label: "Team Members" }
  ];

  return (
    <section className="py-16 px-4 bg-[#010101]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="text-4xl font-bold text-white mb-4"
          >
            Unlock Your Team's Potential
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="text-[#91949c] max-w-2xl mx-auto"
          >
            Maximize efficiency, enhance collaboration, and achieve project goals with
            Supernova's powerful management tools.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#111112] p-8 rounded-2xl border border-[#252527]"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <StatItem {...stat} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
