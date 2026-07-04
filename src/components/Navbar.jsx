import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { yess } from "../assets";
import { useTheme } from "../context/ThemeContext";
import { FiChevronDown, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { MdPalette } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const { theme, themeName, setThemeName, themes, themeList } = useTheme();
  const themeRef = useRef(null);
  const mobileThemeRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (themeRef.current && !themeRef.current.contains(e.target)) &&
        (mobileThemeRef.current && !mobileThemeRef.current.contains(e.target))
      ) {
        setShowThemes(false);
      }
      if (resumeRef.current && !resumeRef.current.contains(e.target)) {
        setShowResume(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const darkThemes = themeList.filter((t) => themes[t].type === "dark");
  const lightThemes = themeList.filter((t) => themes[t].type === "light");

  return (
    <nav
      className="w-full flex items-center py-4 fixed top-0 z-40 px-6 sm:px-12 lg:px-16"
      style={{
        backgroundColor: scrolled ? theme.navBg : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${theme.border}` : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={yess} alt="logo" className="w-8 h-8 object-contain" />
          <p className="text-[16px] font-bold cursor-pointer flex items-center" style={{ color: theme.text }}>
            <span className="animated-underline">Ahtesham</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-7 items-center">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="cursor-pointer text-[13px] font-mono"
                onClick={() => setActive(nav.title)}
              >
                <a
                  href={`#${nav.id}`}
                  className={`flex items-center gap-1 nav-link ${active === nav.title ? "active" : ""}`}
                >
                  <span style={{ color: theme.accent }}>{nav.number}.</span>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Dropdown */}
          <div className="relative" ref={resumeRef}>
            <button
              onClick={() => {
                setShowResume(!showResume);
                setShowThemes(false);
              }}
              className="flex items-center gap-1 px-4 py-2 rounded-md text-[13px] font-mono border dynamic-border-hover"
              style={{
                borderColor: theme.accent,
                color: theme.accent,
                backgroundColor: showResume ? theme.accentMuted : "transparent",
              }}
            >
              <FiDownload size={14} />
              Resume
              <FiChevronDown
                size={12}
                style={{
                  transform: showResume ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </button>
            {showResume && (
              <div className="resume-dropdown">
                <a href="/resumes/Ahtesham_Associate_Engineer_cv.pdf" download="Ahtesham_Associate_Engineer_cv.pdf">
                  <FiDownload size={14} style={{ color: theme.accent }} />
                  Full Stack Developer
                </a>
                <a href="/resumes/Ahtesham_AI_Engineer_cv.pdf" download="Ahtesham_AI_Engineer_cv.pdf">
                  <FiDownload size={14} style={{ color: theme.accent }} />
                  AI Engineer
                </a>
              </div>
            )}
          </div>

          {/* Theme Switcher */}
          <div className="relative" ref={themeRef}>
            <button
              onClick={() => {
                setShowThemes(!showThemes);
                setShowResume(false);
              }}
              className="p-2 rounded-lg border dynamic-border-hover"
              style={{
                borderColor: theme.border,
                color: theme.text,
                backgroundColor: showThemes ? theme.accentMuted : "transparent",
              }}
            >
              <MdPalette size={18} />
            </button>
            {showThemes && (
              <div className="theme-panel">
                <p className="text-xs font-mono mb-3 px-3 pt-1" style={{ color: theme.textSecondary }}>
                  Dark Themes
                </p>
                {darkThemes.map((t) => (
                  <div
                    key={t}
                    className={`theme-swatch ${themeName === t ? "active" : ""}`}
                    onClick={() => {
                      setThemeName(t);
                      setShowThemes(false);
                    }}
                  >
                    <div
                      className="swatch-color"
                      style={{ backgroundColor: themes[t].accent }}
                    />
                    <span className="text-xs" style={{ color: theme.text }}>
                      {t}
                    </span>
                  </div>
                ))}
                <div className="my-2 border-t" style={{ borderColor: theme.border }} />
                <p className="text-xs font-mono mb-3 px-3" style={{ color: theme.textSecondary }}>
                  Light Themes
                </p>
                {lightThemes.map((t) => (
                  <div
                    key={t}
                    className={`theme-swatch ${themeName === t ? "active" : ""}`}
                    onClick={() => {
                      setThemeName(t);
                      setShowThemes(false);
                    }}
                  >
                    <div
                      className="swatch-color"
                      style={{ backgroundColor: themes[t].accent }}
                    />
                    <span className="text-xs" style={{ color: theme.text }}>
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center gap-3">
          {/* Mobile Theme Switcher */}
          <div className="relative" ref={mobileThemeRef}>
            <button
              onClick={() => {
                setShowThemes(!showThemes);
                setShowResume(false);
              }}
              className="p-2 rounded-lg border dynamic-border-hover"
              style={{
                borderColor: theme.border,
                color: theme.text,
                backgroundColor: showThemes ? theme.accentMuted : "transparent",
              }}
            >
              <MdPalette size={18} />
            </button>
            {showThemes && (
              <div className="theme-panel right-0" style={{ right: 0, minWidth: "150px" }}>
                <p className="text-xs font-mono mb-3 px-3 pt-1" style={{ color: theme.textSecondary }}>
                  Dark Themes
                </p>
                {darkThemes.map((t) => (
                  <div
                    key={t}
                    className={`theme-swatch ${themeName === t ? "active" : ""}`}
                    onClick={() => {
                      setThemeName(t);
                      setShowThemes(false);
                    }}
                  >
                    <div
                      className="swatch-color"
                      style={{ backgroundColor: themes[t].accent }}
                    />
                    <span className="text-xs" style={{ color: theme.text }}>
                      {t}
                    </span>
                  </div>
                ))}
                <div className="my-2 border-t" style={{ borderColor: theme.border }} />
                <p className="text-xs font-mono mb-3 px-3" style={{ color: theme.textSecondary }}>
                  Light Themes
                </p>
                {lightThemes.map((t) => (
                  <div
                    key={t}
                    className={`theme-swatch ${themeName === t ? "active" : ""}`}
                    onClick={() => {
                      setThemeName(t);
                      setShowThemes(false);
                    }}
                  >
                    <div
                      className="swatch-color"
                      style={{ backgroundColor: themes[t].accent }}
                    />
                    <span className="text-xs" style={{ color: theme.text }}>
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setToggle(!toggle)}
            className="p-2"
            style={{ color: theme.text }}
          >
            {toggle ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`sm:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${toggle ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setToggle(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`sm:hidden fixed top-0 right-0 h-screen w-[65%] max-w-[300px] z-50 transform transition-transform duration-300 ease-in-out ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: theme.bgSecondary, borderLeft: `1px solid ${theme.border}` }}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setToggle(false)}
            className="p-2"
            style={{ color: theme.text }}
          >
            <FiX size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center pt-8 gap-8">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className="font-mono text-base"
              style={{ color: theme.textSecondary }}
              onClick={() => {
                setToggle(false);
                setActive(nav.title);
              }}
            >
              <span style={{ color: theme.accent }}>{nav.number}. </span>
              {nav.title}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-8 w-[80%]">
            <a
              href="/resumes/Ahtesham_Associate_Engineer_cv.pdf"
              download="Ahtesham_Associate_Engineer_cv.pdf"
              className="text-center px-4 py-3 rounded-md text-sm font-mono border"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              Full Stack Resume
            </a>
            <a
              href="/resumes/Ahtesham_AI_Engineer_cv.pdf"
              download="Ahtesham_AI_Engineer_cv.pdf"
              className="text-center px-4 py-3 rounded-md text-sm font-mono border"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              AI Engineer Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
