"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CARDS = [
  { id: 1, label: "Auditoria Sistêmica", value: "Ativo", desc: "Mapeamento contínuo de gargalos." },
  { id: 2, label: "Modelagem Preditiva", value: "Em Processamento", desc: "Projeção de cenários de receita." },
  { id: 3, label: "Otimização de Fluxos", value: "Otimizado", desc: "Redução de atrito operacional." }
];

export function DiagnosticShuffler() {
  const [cards, setCards] = useState(CARDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const last = newCards.pop();
        if (last) newCards.unshift(last);
        return newCards;
      });
    }, 4000); // Slow, deliberate pacing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 relative w-full h-[280px] p-6 bg-white border border-black/5 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] uppercase tracking-widest text-[#2A2A2D] font-mono">Diagnóstico Contínuo</span>
        <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
      </div>

      <div className="relative flex-1 w-full flex flex-col items-center justify-center">
        <AnimatePresence>
          {cards.map((card, index) => {
            const isFront = index === 0;
            return (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{
                  opacity: isFront ? 1 : 0.4 - index * 0.15,
                  y: index * 16,
                  scale: 1 - index * 0.05,
                  zIndex: 10 - index,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30, // Calm, Apple-like stiff spring
                  mass: 0.8
                }}
                className="absolute w-[90%] bg-white border border-black/[0.04] rounded-2xl p-5 shadow-[0_20px_40px_rgb(0,0,0,0.06)]"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm font-medium text-[#1D1D1F] tracking-wide">{card.label}</span>
                  <span className="text-[10px] text-[#2A2A2D] uppercase tracking-widest">{card.value}</span>
                </div>
                <p className="text-xs text-[#2A2A2D] font-light">{card.desc}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
