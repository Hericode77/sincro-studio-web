"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TELEMETRY_LINES = [
  "Inicializando protocolo de arquitetura...",
  "Calibrando infraestrutura de dados...",
  "Mapeando vetores de receita preditiva...",
  "Sincronização sistêmica concluída."
];

export function TelemetryTypewriter() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (currentLine >= TELEMETRY_LINES.length) return;

    const fullText = TELEMETRY_LINES[currentLine];
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        charIndex++;
        // Very slow, deliberate typing speed to avoid hacker-cliché
        setTimeout(typeChar, 80 + Math.random() * 40); 
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setCurrentLine((prev) => (prev + 1) % TELEMETRY_LINES.length);
        }, 3000); // Pause on completed sentence
      }
    };

    typeChar();
    
    return () => {
      // cleanup is handled implicitly
    };
  }, [currentLine]);

  return (
    <div className="flex flex-col relative w-full h-[280px] p-6 bg-white border border-black/5 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex justify-between items-center mb-10">
        <span className="text-[10px] uppercase tracking-widest text-[#2A2A2D] font-mono flex items-center gap-2">
          Telemetria Operacional
        </span>
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-30"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black/60"></span>
        </span>
      </div>

      <div className="flex-1 font-mono text-xs md:text-[13px] text-[#2A2A2D] leading-loose tracking-[0.05em] flex items-center">
        <div>
          <span className="text-[#1D1D1F]/40 mr-3">sys &gt;</span>
          {displayedText}
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="inline-block w-1.5 h-3.5 bg-black/40 ml-1 translate-y-[2px]"
          />
        </div>
      </div>
    </div>
  );
}
