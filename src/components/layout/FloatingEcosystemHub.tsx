"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InstaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const ResearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const states = [
  {
    text: "Instagram",
    icon: InstaIcon,
    url: "https://www.instagram.com/sincro_studio.ia/",
  },
  {
    text: "Falar com Consultor",
    icon: WhatsAppIcon,
    url: "https://wa.me/5521996387291",
  },
  {
    text: "Research",
    icon: ResearchIcon,
    url: "https://rossysincrostudio.substack.com",
  },
];

export function FloatingEcosystemHub() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % states.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const current = states[index];
  const IconComponent = current.icon;

  return (
    <motion.a
      href={current.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center gap-2 p-3 md:px-5 md:py-3 rounded-full bg-white/70 backdrop-blur-md border border-gray-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-[#1d1d1f] hover:scale-105 hover:bg-white/90 transition-all duration-300 ease-out cursor-pointer select-none"
      layout
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2"
        >
          {/* Icon Wrapper */}
          <div className="flex-shrink-0 w-5 h-5 text-[#1d1d1f] flex items-center justify-center">
            <IconComponent className="w-5 h-5" />
          </div>

          {/* Text Wrapper */}
          <span className="hidden md:block text-sm font-medium whitespace-nowrap text-[#1d1d1f]">
            {current.text}
          </span>
        </motion.div>
      </AnimatePresence>
    </motion.a>
  );
}
