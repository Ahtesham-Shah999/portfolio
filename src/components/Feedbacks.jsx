import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { useTheme } from "../context/ThemeContext";
import { testimonials } from "../constants";
import { FiMessageCircle } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const FeedbackCard = ({ testimonial, name, designation, company, image, index }) => {
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
        delay: index * 0.15,
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
    <div
      ref={cardRef}
      className="p-8 rounded-xl transition-all duration-300"
      style={{
        backgroundColor: theme.bgCard,
        border: `1px solid ${theme.border}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = theme.accent;
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = theme.border;
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <FiMessageCircle size={28} className="mb-4" style={{ color: theme.accent }} />
      <p className="text-sm leading-[1.7] mb-6" style={{ color: theme.textSecondary }}>
        "{testimonial}"
      </p>
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
          style={{ border: `2px solid ${theme.accent}` }}
        />
        <div>
          <p className="text-sm font-semibold" style={{ color: theme.text }}>
            {name}
          </p>
          <p className="text-xs font-mono" style={{ color: theme.textSecondary }}>
            {designation} @ {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  const { theme } = useTheme();
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

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

  return (
    <div ref={sectionRef}>
      {/* Section Heading */}
      <div ref={headingRef} className="flex items-center gap-2 mb-10">
        <h2 className="flex items-center gap-3 whitespace-nowrap" style={{ color: theme.text }}>
          <span className="text-[28px] sm:text-[32px] font-bold">Testimonials</span>
        </h2>
        <div className="section-line" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
