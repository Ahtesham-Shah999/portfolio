import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { useTheme } from "../context/ThemeContext";
import { experiences } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const tabHeight = 42;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let intervalId;
    if (isHovered) {
      intervalId = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % experiences.length);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isHovered, experiences.length]);

  const currentExp = experiences[activeTab];

  return (
    <div ref={sectionRef}>
      {/* Section Heading */}
      <div ref={headingRef} className="flex items-center gap-2 mb-10">
        <h2 className="flex items-center gap-3 whitespace-nowrap" style={{ color: theme.text }}>
          <span className="font-mono text-base" style={{ color: theme.accent }}>
            02.
          </span>
          <span className="text-[28px] sm:text-[32px] font-bold">Where I've Worked</span>
        </h2>
        <div className="section-line" />
      </div>

      {/* Experience Content */}
      <div ref={contentRef} className="flex flex-col md:flex-row gap-8 max-w-3xl" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* Tabs */}
        <div className="exp-tabs relative flex md:flex-col overflow-x-auto md:overflow-x-visible">
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`exp-tab ${activeTab === index ? "active" : ""}`}
              onClick={() => {
                setActiveTab(index);
              }}
              style={{
                color: activeTab === index ? theme.accent : theme.textSecondary,
                backgroundColor: activeTab === index ? theme.accentMuted : "transparent",
              }}
            >
              {exp.company_name}
            </button>
          ))}
          {/* Active tab slider */}
          <div
            className="exp-tab-slider hidden md:block"
            style={{
              top: activeTab * tabHeight + "px",
              height: tabHeight + "px",
              backgroundColor: theme.accent,
            }}
          />
        </div>

        {/* Details */}
        <div className="flex-1 overflow-hidden min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold" style={{ color: theme.text }}>
                {currentExp.title}{" "}
                <span style={{ color: theme.accent }}>
                  @{" "}
                  {currentExp.company_url ? (
                    <a
                      href={currentExp.company_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      style={{ color: theme.accent }}
                    >
                      {currentExp.company_name}
                    </a>
                  ) : (
                    currentExp.company_name
                  )}
                </span>
              </h3>
              <p className="font-mono text-xs mt-1 mb-6" style={{ color: theme.textSecondary }}>
                {currentExp.date}
              </p>
              <ul className="triangle-list">
                {currentExp.points.map((point, index) => (
                  <li 
                    key={index} 
                    className="mb-3 text-sm leading-[1.6]"
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
