'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCode, FaServer } from 'react-icons/fa';
import LightningIcon from '../../../../public/images/svg/LightningIcon';
import { 
  BarChart, 
  Bar, 
  CartesianGrid, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const growthData = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 20 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 35 },
  { name: 'Jun', value: 50 },
  { name: 'Jul', value: 45 },
  { name: 'Aug', value: 60 }
];

const scalabilityData = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 15 },
  { name: 'Mar', value: 25 },
  { name: 'Apr', value: 30 },
  { name: 'May', value: 40 },
  { name: 'Jun', value: 55 },
  { name: 'Jul', value: 70 },
  { name: 'Aug', value: 90 }
];

interface FeatureCardProps {
  title: string;
  description: string;
  chart?: React.ReactNode;
  icon?: React.ReactNode;
  index: number;
  variant?: 'chart' | 'icon';
}

const FeatureCard: FC<FeatureCardProps> = ({ 
  title, 
  description, 
  chart, 
  icon,
  index, 
  variant = 'chart' 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    whileHover={{
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    className="bg-[#111112] p-6 rounded-xl border border-[#252527] hover:border-[#333435] transition-all h-[240px] flex flex-col justify-between"
  >
    {variant === 'chart' && (
      <div className="mb-3 h-[120px]">
        {chart}
      </div>
    )}
    
    {variant === 'icon' && icon && (
      <div className="mb-3 h-[120px] flex items-start">
        {icon}
      </div>
    )}
    
    <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>
    <p className="text-[#91949c] text-sm">{description}</p>
  </motion.div>
);

const CollaborationCard: FC = () => {
  const avatars = [
    '/avatar1.png',
    '/avatar2.png',
    '/avatar3.png',
    '/avatar4.png',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="bg-[#111112] p-6 rounded-xl border border-[#252527] hover:border-[#333435] transition-all h-[200px]"
    >
      <h3 className="text-white text-lg font-semibold mb-2">Collaborate real-time</h3>
      <p className="text-[#91949c] text-sm mb-4">Seamlessly connect all your team members in one place.</p>
      
      <div className="flex items-center mt-auto">
        <div className="flex -space-x-2">
          {avatars.map((avatar, index) => (
            <div 
              key={index} 
              className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white text-xs font-bold border-2 border-[#111112]"
            >
              {index + 1}
            </div>
          ))}
        </div>
        <div className="ml-2 bg-[#1a1a1b] text-[#91949c] text-xs px-2 py-1 rounded-full">
          Live
        </div>
      </div>
    </motion.div>
  );
};

const WorkflowCard: FC = () => {
  const icons = [
    { color: 'text-blue-500', label: 'Figma' },
    { color: 'text-purple-500', label: 'Sketch' },
    { color: 'text-green-500', label: 'XD' },
    { color: 'text-orange-500', label: 'PS' },
    { color: 'text-red-500', label: 'AI' },
    { color: 'text-yellow-500', label: 'AE' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="bg-[#111112] p-6 rounded-xl border border-[#252527] hover:border-[#333435] transition-all h-[200px]"
    >
      <h3 className="text-white text-lg font-semibold mb-2">Workflow integration</h3>
      <p className="text-[#91949c] text-sm mb-4">Seamlessly connect all your design tools.</p>
      
      <div className="flex flex-wrap gap-2 mt-2">
        {icons.map((icon, index) => (
          <div 
            key={index} 
            className="w-8 h-8 rounded-full bg-[#1a1a1b] flex items-center justify-center text-xs font-medium"
          >
            <span className={icon.color}>{icon.label.substring(0, 2)}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const FeatureButton: FC<{ label: string }> = ({ label }) => (
  <motion.div
    whileHover={{ 
      scale: 1.05, 
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    className="bg-[#111112] px-4 py-2 rounded-full border border-[#252527] text-[#91949c] text-sm flex items-center space-x-2 cursor-pointer"
  >
    <div className="w-2 h-2 rounded-full bg-green-500"></div>
    <span>{label}</span>
  </motion.div>
);

const StatsSection: FC = () => {
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

  return (
    <section className="py-16 px-6 bg-[#010101]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-block text-xs font-medium bg-[#1a1a1b] text-green-500 px-3 py-1.5 rounded-full mb-4">
            What you'll get
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            We resolve problems associated with<br />creative procedures.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8"
        >
          <motion.div variants={itemVariants}>
            <FeatureCard 
              title="Cost effective solution"
              description="Save money with a design workflow at a fraction of the cost."
              index={0}
              chart={
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={growthData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <Bar dataKey="value" fill="#10B981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              }
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard 
              title="Tailor-made design"
              description="We've got the expertise to make your vision a reality."
              index={1}
              variant="icon"
              icon={
                <div className="bg-[#1a1a1b] px-3 py-2 rounded-lg flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                    <LightningIcon width="10" height="10" fill="black" />
                  </div>
                  <span className="text-xs text-white">Latest design</span>
                </div>
              }
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FeatureCard 
              title="Scalable as you grow"
              description="We're ready to meet your evolving needs."
              index={2}
              chart={
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={scalabilityData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#10B981" fillOpacity={1} fill="url(#colorValue)" />
                    <CartesianGrid stroke="#333" strokeDasharray="3 3" opacity={0.1} />
                  </AreaChart>
                </ResponsiveContainer>
              }
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8"
        >
          <motion.div variants={itemVariants}>
            <WorkflowCard />
          </motion.div>
          <motion.div variants={itemVariants}>
            <CollaborationCard />
          </motion.div>
        </motion.div>

        {/* Feature buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          <motion.div variants={itemVariants}><FeatureButton label="Design workshops" /></motion.div>
          <motion.div variants={itemVariants}><FeatureButton label="Workshops" /></motion.div>
          <motion.div variants={itemVariants}><FeatureButton label="Trend reports" /></motion.div>
          <motion.div variants={itemVariants}><FeatureButton label="Asset library" /></motion.div>
          <motion.div variants={itemVariants}><FeatureButton label="Rollover hours" /></motion.div>
          <motion.div variants={itemVariants}><FeatureButton label="Premium designers" /></motion.div>
          <motion.div variants={itemVariants}><FeatureButton label="Multilingual support" /></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
