import React, { createContext, useContext, useState, useEffect } from "react";

const themes = {
  // Dark Themes
  "Midnight Ember": {
    id: "midnight-ember",
    type: "dark",
    bg: "#0a0a0f",
    bgSecondary: "#111118",
    bgCard: "#16161f",
    text: "#e4e4e7",
    textSecondary: "#a1a1aa",
    accent: "#ef4444",
    accentHover: "#dc2626",
    accentMuted: "rgba(239, 68, 68, 0.1)",
    border: "#27272a",
    navBg: "rgba(10, 10, 15, 0.85)",
    gradient: "linear-gradient(135deg, #ef4444, #b91c1c)",
  },
  "Nordic Terracotta": {
    id: "nordic-terracotta",
    type: "dark",
    bg: "#1a1614",
    bgSecondary: "#231f1c",
    bgCard: "#2a2522",
    text: "#e8e0d8",
    textSecondary: "#a89888",
    accent: "#c2703e",
    accentHover: "#a85c30",
    accentMuted: "rgba(194, 112, 62, 0.1)",
    border: "#3a332d",
    navBg: "rgba(26, 22, 20, 0.85)",
    gradient: "linear-gradient(135deg, #c2703e, #8b4513)",
  },
  "Ocean Depths": {
    id: "ocean-depths",
    type: "dark",
    bg: "#0b1221",
    bgSecondary: "#111b2e",
    bgCard: "#162038",
    text: "#d4e0f0",
    textSecondary: "#8899b0",
    accent: "#38bdf8",
    accentHover: "#0ea5e9",
    accentMuted: "rgba(56, 189, 248, 0.1)",
    border: "#1e3050",
    navBg: "rgba(11, 18, 33, 0.85)",
    gradient: "linear-gradient(135deg, #38bdf8, #0369a1)",
  },
  "Violet Haze": {
    id: "violet-haze",
    type: "dark",
    bg: "#0f0a1a",
    bgSecondary: "#16102a",
    bgCard: "#1c1535",
    text: "#ddd6f5",
    textSecondary: "#9b8dc2",
    accent: "#a78bfa",
    accentHover: "#8b5cf6",
    accentMuted: "rgba(167, 139, 250, 0.1)",
    border: "#2a2045",
    navBg: "rgba(15, 10, 26, 0.85)",
    gradient: "linear-gradient(135deg, #a78bfa, #6d28d9)",
  },
  // Light Themes
  "Nordic Sand": {
    id: "nordic-sand",
    type: "light",
    bg: "#f5f0e8",
    bgSecondary: "#ebe5d8",
    bgCard: "#ffffff",
    text: "#2d2418",
    textSecondary: "#6b5d4d",
    accent: "#c2703e",
    accentHover: "#a85c30",
    accentMuted: "rgba(194, 112, 62, 0.08)",
    border: "#d4cbbe",
    navBg: "rgba(245, 240, 232, 0.9)",
    gradient: "linear-gradient(135deg, #c2703e, #8b4513)",
  },
  "Arctic Blue": {
    id: "arctic-blue",
    type: "light",
    bg: "#f0f4f8",
    bgSecondary: "#e2eaf0",
    bgCard: "#ffffff",
    text: "#1a2332",
    textSecondary: "#546478",
    accent: "#2563eb",
    accentHover: "#1d4ed8",
    accentMuted: "rgba(37, 99, 235, 0.08)",
    border: "#c8d6e0",
    navBg: "rgba(240, 244, 248, 0.9)",
    gradient: "linear-gradient(135deg, #2563eb, #1e40af)",
  },
  "Rose Garden": {
    id: "rose-garden",
    type: "light",
    bg: "#fdf2f4",
    bgSecondary: "#fce4e8",
    bgCard: "#ffffff",
    text: "#2d1a22",
    textSecondary: "#7a5060",
    accent: "#e11d48",
    accentHover: "#be123c",
    accentMuted: "rgba(225, 29, 72, 0.08)",
    border: "#f0c8d0",
    navBg: "rgba(253, 242, 244, 0.9)",
    gradient: "linear-gradient(135deg, #e11d48, #9f1239)",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved && themes[saved] ? saved : "Midnight Ember";
  });

  const theme = themes[themeName];

  useEffect(() => {
    localStorage.setItem("portfolio-theme", themeName);
    // Apply CSS variables to root
    const root = document.documentElement;
    root.style.setProperty("--bg", theme.bg);
    root.style.setProperty("--bg-secondary", theme.bgSecondary);
    root.style.setProperty("--bg-card", theme.bgCard);
    root.style.setProperty("--text", theme.text);
    root.style.setProperty("--text-secondary", theme.textSecondary);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--accent-hover", theme.accentHover);
    root.style.setProperty("--accent-muted", theme.accentMuted);
    root.style.setProperty("--border", theme.border);
    root.style.setProperty("--nav-bg", theme.navBg);
    root.style.setProperty("--gradient", theme.gradient);
    root.style.colorScheme = theme.type;
  }, [themeName, theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeName, setThemeName, themes, themeList: Object.keys(themes) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
