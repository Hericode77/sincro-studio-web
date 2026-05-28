"use client";

import { motion } from "framer-motion";

export function ProtocolScheduler() {
  return (
    <div className="flex flex-col relative w-full h-[280px] p-6 bg-white border border-black/5 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex justify-between items-center mb-8">
        <span className="text-[10px] uppercase tracking-widest text-[#2A2A2D] font-mono">Orquestração</span>
        <div className="text-[10px] text-[#1D1D1F]/50 font-mono">Latência: 12ms</div>
      </div>

      <div className="relative flex-1 w-full flex items-center justify-center px-4">
        {/* Architectural SVG Map */}
        <svg viewBox="0 0 300 100" className="w-full overflow-visible">
          {/* Base Grid / Structure */}
          <path 
            d="M 10 50 L 80 50 L 120 20 L 180 20 L 220 50 L 290 50" 
            fill="none" 
            stroke="rgba(0,0,0,0.06)" 
            strokeWidth="1" 
          />
          <path 
            d="M 80 50 L 120 80 L 180 80 L 220 50" 
            fill="none" 
            stroke="rgba(0,0,0,0.06)" 
            strokeWidth="1" 
          />
          
          {/* Nodes */}
          <circle cx="10" cy="50" r="3" fill="#ffffff" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          <circle cx="80" cy="50" r="3" fill="#ffffff" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          <circle cx="120" cy="20" r="3" fill="#ffffff" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          <circle cx="180" cy="20" r="3" fill="#ffffff" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          <circle cx="120" cy="80" r="3" fill="#ffffff" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          <circle cx="180" cy="80" r="3" fill="#ffffff" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          <circle cx="220" cy="50" r="3" fill="#ffffff" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
          <circle cx="290" cy="50" r="3" fill="rgba(0,0,0,0.8)" />

          {/* Animated Execution Path */}
          <motion.path 
            d="M 10 50 L 80 50 L 120 20 L 180 20 L 220 50 L 290 50" 
            fill="none" 
            stroke="rgba(0,0,0,0.4)" 
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ 
              duration: 4, 
              ease: "easeInOut", 
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1
            }}
          />
        </svg>
      </div>
    </div>
  );
}
