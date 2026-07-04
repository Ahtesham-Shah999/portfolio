import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { useTheme } from "../context/ThemeContext";
import { aboutTechStacks } from "../constants";
import profilePhoto from "../assets/profile.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

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

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Section Heading */}
      <div ref={headingRef} className="flex items-center gap-2 mb-10">
        <h2 className="flex items-center gap-3 whitespace-nowrap" style={{ color: theme.text }}>
          <span className="font-mono text-base" style={{ color: theme.accent }}>
            01.
          </span>
          <span className="text-[28px] sm:text-[32px] font-bold">About Me</span>
        </h2>
        <div className="section-line" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12">
        {/* Text Content */}
        <div ref={contentRef}>
          <div className="space-y-4 text-base leading-[1.7]" style={{ color: theme.textSecondary }}>
            <p>
              Hello! I'm <span style={{ color: theme.accent }}>Ahtesham</span>, a Full-Stack Developer & AI Engineer 
              passionate about building digital products that live on the internet. I specialize in creating 
              exceptional, accessible, and performant web experiences and AI-powered solutions.
            </p>
            <p>
              My journey in tech started with a deep curiosity for how things work on the web, which led me 
              to explore everything from frontend interfaces to backend architectures, and eventually into 
              the fascinating world of AI and Machine Learning.
            </p>
            <p>
              I've had the privilege of working with{" "}
              <a
                href="https://faizan-bor.github.io/ZEVENZ"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.accent }}
                className="hover:underline"
              >
                Zevenz Tech
              </a>{" "}
              where I build and maintain web applications using the MERN stack, collaborate with 
              cross-functional teams, and continuously learn new technologies.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-5">
            <ul className="triangle-list">
              {aboutTechStacks.languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
            <ul className="triangle-list">
              {aboutTechStacks.frameworks.map((fw) => (
                <li key={fw}>{fw}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-2">
            <ul className="triangle-list">
              {aboutTechStacks.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
            <ul className="triangle-list">
              {aboutTechStacks.databases.map((db) => (
                <li key={db}>{db}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Profile Image */}
        <div ref={imageRef} className="flex justify-center lg:justify-end">
          <div className="profile-image-wrapper relative w-[250px] h-[320px] sm:w-[280px] sm:h-[360px]">
            <div
              className="w-full h-full rounded-lg overflow-hidden"
              style={{ backgroundColor: theme.bgCard }}
            >
              <img
                src={profilePhoto}
                alt="Ahtesham Shah"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-16">
        <div className="flex items-center gap-2 mb-8">
          <h3 className="flex items-center gap-3 whitespace-nowrap" style={{ color: theme.text }}>
            <span className="text-[22px] sm:text-[26px] font-bold">🎓 Education</span>
          </h3>
          <div className="section-line" />
        </div>
        <div
          className="p-6 rounded-lg border transition-all duration-300"
          style={{
            backgroundColor: theme.bgCard,
            borderColor: theme.border,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = theme.accent;
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = theme.border;
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <h4 className="text-lg font-bold" style={{ color: theme.text }}>
              Bachelor of Science in Software Engineering
            </h4>
            <span className="font-mono text-sm" style={{ color: theme.accent }}>
              Aug 2022 – June 2026
            </span>
          </div>
          <p className="text-base font-semibold mb-3" style={{ color: theme.accent }}>
            FAST National University of Computing & Emerging Sciences, Faisalabad
          </p>
          <p className="text-sm leading-[1.7]" style={{ color: theme.textSecondary }}>
            <span className="font-semibold" style={{ color: theme.text }}>Relevant Coursework:</span>{" "}
            Data Structures & Algorithms, Database Systems, Software Architecture, Operating Systems, Computer Networks
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");

