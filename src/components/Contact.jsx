import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionWrapper } from "../hoc";
import { useTheme } from "../context/ThemeContext";
import { EarthCanvas } from "./canvas";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { theme } = useTheme();
  const formRef = useRef();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setDialogMessage("Thank you for reaching out! I will reply to you soon.");
          setShowDialog(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          setDialogMessage("Something went wrong. Please try again.");
          setShowDialog(true);
        }
      );
  };

  return (
    <>
      <div ref={sectionRef} className="flex flex-col lg:flex-row gap-10 overflow-hidden py-16 items-center">
      {/* Left Side: Contact Content */}
      <div className="flex-[0.75] w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
        {/* Section Heading */}
        <div ref={headingRef}>
          <p className="font-mono text-base mb-3" style={{ color: theme.accent }}>
            04. What's Next?
          </p>
          <h2 className="text-[42px] sm:text-[52px] font-bold mb-4" style={{ color: theme.text }}>
            Get In Touch
          </h2>
          <p className="text-base leading-[1.7] mb-10 max-w-lg mx-auto lg:mx-0" style={{ color: theme.textSecondary }}>
            I'm currently looking for new opportunities. Whether you have a question, 
            a project idea, or just want to say hi, my inbox is always open. I'll try my 
            best to get back to you!
          </p>
        </div>

        {/* Contact Form */}
        <div ref={contentRef}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 text-left max-w-lg mx-auto lg:mx-0"
          >
          <label className="flex flex-col gap-2">
            <span className="text-sm font-mono" style={{ color: theme.textSecondary }}>
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="py-3 px-5 rounded-lg outline-none text-sm transition-all duration-300"
              style={{
                backgroundColor: theme.bgCard,
                border: `1px solid ${theme.border}`,
                color: theme.text,
              }}
              onFocus={(e) => (e.target.style.borderColor = theme.accent)}
              onBlur={(e) => (e.target.style.borderColor = theme.border)}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-mono" style={{ color: theme.textSecondary }}>
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
              className="py-3 px-5 rounded-lg outline-none text-sm transition-all duration-300"
              style={{
                backgroundColor: theme.bgCard,
                border: `1px solid ${theme.border}`,
                color: theme.text,
              }}
              onFocus={(e) => (e.target.style.borderColor = theme.accent)}
              onBlur={(e) => (e.target.style.borderColor = theme.border)}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-mono" style={{ color: theme.textSecondary }}>
              Your Message
            </span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              required
              className="py-3 px-5 rounded-lg outline-none text-sm resize-none transition-all duration-300"
              style={{
                backgroundColor: theme.bgCard,
                border: `1px solid ${theme.border}`,
                color: theme.text,
              }}
              onFocus={(e) => (e.target.style.borderColor = theme.accent)}
              onBlur={(e) => (e.target.style.borderColor = theme.border)}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-3 py-3 px-8 rounded-md font-mono text-sm transition-all duration-300 self-end"
            style={{
              backgroundColor: theme.accent,
              color: "#fff",
              border: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = theme.accentHover || theme.accent)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = theme.accent)}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      </div>

      {/* Right Side: Earth Canvas */}
      <div className="lg:flex-1 w-full lg:h-[600px] md:h-[550px] h-[350px]">
        <EarthCanvas />
      </div>
    </div>

      {/* Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-8 rounded-2xl shadow-2xl w-full max-w-md"
            style={{
              backgroundColor: theme.bgCard,
              border: `1px solid ${theme.border}`,
            }}
          >
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold" style={{ color: theme.text }}>
                ✉️ Thank You!
              </h3>
              <p className="text-sm" style={{ color: theme.textSecondary }}>
                {dialogMessage}
              </p>
              <button
                onClick={() => setShowDialog(false)}
                className="mt-4 px-6 py-2 rounded-md font-mono text-sm transition-all duration-300"
                style={{
                  backgroundColor: theme.accent,
                  color: "#fff",
                }}
              >
                OK
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Contact, "contact");
