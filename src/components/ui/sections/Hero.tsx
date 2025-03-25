'use client';

import { motion } from "framer-motion";
import Button from "../../items/Button";
import Image from "next/image";

interface HeroProps {
  onGetStartedClick?: () => void;
}

export default function Hero({ onGetStartedClick }: HeroProps) {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroImage.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Plan and Navigate from idea to launch
          </h1>
          <p className="text-xl md:text-[20px] text-[#787a81] mb-8">
            Loopcraft Labs is a platform to explore components made in react, tailwind etc.
          </p>
          <div>
            <Button onClick={onGetStartedClick}>
              Get Started For Free
            </Button>
            <p className="text-[#787a81] pt-3 text-sm">No credit card required</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 text-center pb-8 z-10">
        <p className="text-[#787a81] text-sm">
          Trusted by 50,000+ businesses for innovative design and growth
        </p>
      </div>
    </div>
  );
}