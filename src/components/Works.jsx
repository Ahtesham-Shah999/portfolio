import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { useTheme } from "../context/ThemeContext";
import { featuredProjects, otherProjects, projectCategories } from "../constants";
import { FiFolder, FiExternalLink, FiGithub, FiYoutube } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjectCard = ({ project, index }) => {
  const { theme } = useTheme();
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Auto-slide images ONLY on hover
  useEffect(() => {
    if (images.length <= 1 || !isHovered) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  return (
    <div
      ref={cardRef}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-3 items-center mb-20 lg:mb-24"
    >
      {/* Image Carousel */}
      <div
        className={`lg:col-span-7 ${isEven ? "lg:col-start-1" : "lg:col-start-6"} row-start-1`}
        style={{ gridRow: 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative rounded-lg overflow-hidden group"
        >
          <div className="relative w-full h-[300px] sm:h-[360px]">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.name} screenshot ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-left rounded-lg transition-all duration-700 ease-in-out group-hover:scale-105"
                style={{
                  opacity: currentImg === i ? 1 : 0,
                }}
              />
            ))}
          </div>
          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImg(i);
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: currentImg === i ? 20 : 8,
                    height: 8,
                    backgroundColor: currentImg === i ? theme.accent : "rgba(255,255,255,0.5)",
                  }}
                />
              ))}
            </div>
          )}
        </a>
      </div>

      {/* Content */}
      <div
        className={`lg:col-span-6 ${
          isEven ? "lg:col-start-7 lg:text-right" : "lg:col-start-1 lg:text-left"
        } row-start-1 relative z-20 p-6 lg:p-0`}
        style={{ gridRow: 1 }}
      >
        <p className="font-mono text-xs mb-2" style={{ color: theme.accent }}>
          {project.overline}
        </p>
        <h3
          className="text-2xl font-bold mb-5 hover:cursor-pointer"
          style={{ color: theme.text, transition: "color 0.3s ease" }}
          onMouseEnter={(e) => (e.target.style.color = theme.accent)}
          onMouseLeave={(e) => (e.target.style.color = theme.text)}
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </h3>
        <div
          className="rounded-lg p-6 mb-5 text-sm leading-[1.7] shadow-lg"
          style={{
            backgroundColor: theme.bgCard,
            color: theme.textSecondary,
            border: `1px solid ${theme.border}`,
          }}
        >
          {project.description}
        </div>
        <ul
          className={`flex flex-wrap gap-3 mb-4 font-mono text-xs ${
            isEven ? "lg:justify-end" : "lg:justify-start"
          }`}
          style={{ color: theme.textSecondary }}
        >
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div
          className={`flex gap-4 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.textSecondary }}
              className="hover:text-accent transition-colors"
              onMouseEnter={(e) => (e.target.style.color = theme.accent)}
              onMouseLeave={(e) => (e.target.style.color = theme.textSecondary)}
            >
              <FiGithub size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.textSecondary }}
              className="hover:text-accent transition-colors"
              onMouseEnter={(e) => (e.target.style.color = theme.accent)}
              onMouseLeave={(e) => (e.target.style.color = theme.textSecondary)}
            >
              <FiExternalLink size={20} />
            </a>
          )}
          {project.youtube && (
            <a
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.textSecondary }}
              className="hover:text-accent transition-colors"
              onMouseEnter={(e) => (e.target.style.color = theme.accent)}
              onMouseLeave={(e) => (e.target.style.color = theme.textSecondary)}
            >
              <FiYoutube size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const OtherProjectCard = ({ project, index }) => {
  const { theme } = useTheme();
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="project-card-new">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-6">
        <FiFolder size={36} className="folder-icon" style={{ color: theme.accent }} />
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.textSecondary }}
              onMouseEnter={(e) => (e.target.style.color = theme.accent)}
              onMouseLeave={(e) => (e.target.style.color = theme.textSecondary)}
            >
              <FiGithub size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.textSecondary }}
              onMouseEnter={(e) => (e.target.style.color = theme.accent)}
              onMouseLeave={(e) => (e.target.style.color = theme.textSecondary)}
            >
              <FiExternalLink size={18} />
            </a>
          )}
          {project.youtube && (
            <a
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.textSecondary }}
              onMouseEnter={(e) => (e.target.style.color = theme.accent)}
              onMouseLeave={(e) => (e.target.style.color = theme.textSecondary)}
            >
              <FiYoutube size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-xl font-semibold mb-3 cursor-pointer"
        style={{ color: theme.text }}
        onMouseEnter={(e) => (e.target.style.color = theme.accent)}
        onMouseLeave={(e) => (e.target.style.color = theme.text)}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-sm leading-[1.6] flex-1" style={{ color: theme.textSecondary }}>
        {project.description}
      </p>

      {/* Tags */}
      <ul className="flex flex-wrap gap-2 mt-5 font-mono text-[11px]" style={{ color: theme.textSecondary }}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

const Works = () => {
  const { theme } = useTheme();
  const headingRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredFeatured =
    activeFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeFilter);

  const filteredOther =
    activeFilter === "All"
      ? otherProjects
      : otherProjects.filter((p) => p.category === activeFilter);

  return (
    <div ref={sectionRef}>
      {/* Section Heading */}
      <div ref={headingRef} className="flex items-center gap-2 mb-10">
        <h2 className="flex items-center gap-3 whitespace-nowrap" style={{ color: theme.text }}>
          <span className="font-mono text-base" style={{ color: theme.accent }}>
            03.
          </span>
          <span className="text-[28px] sm:text-[32px] font-bold">Some Things I've Built</span>
        </h2>
        <div className="section-line" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
            style={{
              color: activeFilter === cat ? theme.accent : theme.textSecondary,
              borderColor: activeFilter === cat ? theme.accent : "transparent",
              backgroundColor: activeFilter === cat ? theme.accentMuted : "transparent",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Projects */}
      {filteredFeatured.map((project, index) => (
        <FeaturedProjectCard key={project.name} project={project} index={index} />
      ))}

      {/* Other Noteworthy Projects */}
      {filteredOther.length > 0 && (
        <>
          <h3
            className="text-2xl font-bold text-center mb-3 mt-10"
            style={{ color: theme.text }}
          >
            Other Noteworthy Projects
          </h3>
          <p
            className="text-center font-mono text-sm mb-10"
            style={{ color: theme.accent }}
          >
            view the archive
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredOther.map((project, index) => (
              <OtherProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SectionWrapper(Works, "work");
