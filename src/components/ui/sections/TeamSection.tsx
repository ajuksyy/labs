"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Wayne Roberts",
      role: "Investment Strategist",
      avatar: "/images/dummyimage.jpg",
    },
    {
      name: "Katherine Rose",
      role: "Financial Analyst",
      avatar: "/images/dummyimage.jpg",
    },
    {
      name: "Olivia Martinez",
      role: "Finance Coach",
      avatar: "/images/dummyimage.jpg",
    },
    {
      name: "Daniel Wright",
      role: "Financial Planner",
      avatar: "/images/dummyimage.jpg",
    },
    {
      name: "Sophia Harris",
      role: "Credit Specialist",
      avatar: "/images/dummyimage.jpg",
    },
    {
      name: "Ethan Parker",
      role: "Investment Advisor",
      avatar: "/images/dummyimage.jpg",
    },
  ];

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
    <section className="py-15 px-4 sm:px-6 bg-black text-white relative">
      <div className="max-w-4xl mx-auto w-full">
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
            className="text-sm text-[#c8c8c8] mb-2"
          >
            The Team
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="text-3xl font-bold mb-4"
          >
            Meet The Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="text-[#c8c8c8] max-w-[500px] mx-auto"
          >
            We're a team of 6 experts studying everyday to provide the best
            valuable content in the finance space.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-[#111112] py-6 px-4 rounded-xl border border-[#252527] hover:border-[#333435] transition-colors w-full"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center"
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                className="text-center flex flex-col items-center justify-center"
              >
                <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
                <p className="text-[#91949c] text-center">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
