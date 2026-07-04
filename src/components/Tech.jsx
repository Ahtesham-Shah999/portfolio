import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { useTheme } from "../context/ThemeContext";
import { technologies } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".tech-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Section Heading */}
      <div className="flex items-center gap-2 mb-10">
        <h2 className="flex items-center gap-3 whitespace-nowrap" style={{ color: theme.text }}>
          <span className="text-[28px] sm:text-[32px] font-bold">Technologies</span>
        </h2>
        <div className="section-line" />
      </div>

      <div className="tech-grid grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="tech-item group flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 cursor-pointer"
            style={{
              border: `1px solid transparent`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.accent;
              e.currentTarget.style.backgroundColor = theme.accentMuted;
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-12 h-12 object-contain transition-transform duration-300"
            />
            <span
              className="text-[11px] font-mono text-center"
              style={{ color: theme.textSecondary }}
            >
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
