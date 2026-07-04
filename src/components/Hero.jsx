import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="relative w-full min-h-screen flex items-start sm:items-center justify-center px-6 sm:px-16 pt-[120px] sm:pt-0">
      <div className="max-w-7xl mx-auto w-full pt-[20px] sm:pt-[120px] flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col gap-5 lg:w-1/2">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-mono text-base"
            style={{ color: theme.accent }}
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-bold text-[clamp(40px,8vw,72px)] leading-[1.1] whitespace-nowrap"
            style={{ color: theme.text }}
          >
            Ahtesham Shah.
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="font-bold text-[clamp(30px,6vw,60px)] leading-[1.1]"
            style={{ color: theme.textSecondary }}
          >
            I build things for the web & AI.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-4 max-w-[540px] text-base leading-[1.7]"
            style={{ color: theme.textSecondary }}
          >
            I'm a Full-Stack Developer & AI Engineer specializing in building (and occasionally designing) 
            exceptional digital experiences. Currently focused on building accessible, 
            human-centered products with modern web technologies and machine learning.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="mt-8"
          >
            <a
              href="#work"
              className="inline-block px-7 py-4 rounded-md font-mono text-sm border"
              style={{
                borderColor: theme.accent,
                color: theme.accent,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = theme.accentMuted;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              Check out my work!
            </a>
          </motion.div>
        </div>

        {/* 3D Computer Model on the Right */}
        <div className="hidden lg:block lg:w-1/2 h-[550px]">
          <ComputersCanvas />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[30px] h-[52px] rounded-3xl flex justify-center items-start p-2"
            style={{ border: `2px solid ${theme.accent}` }}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: theme.accent }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
