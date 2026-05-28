"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const FLOW_NODES = [
  { id: "01", label: "Tráfego", sub: "Canais de Atenção" },
  { id: "02", label: "WhatsApp", sub: "Gateway" },
  { id: "03", label: "AI Agent", sub: "Qualificação 24/7" },
  { id: "04", label: "CRM Sync", sub: "Dados em Tempo Real" },
  { id: "05", label: "Follow-up", sub: "Automação" },
  { id: "06", label: "Agenda", sub: "Google Calendar" },
  { id: "07", label: "Reativação", sub: "Base Inativa" },
];

export function SystemFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    // Animate connecting line
    tl.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 1.5, ease: "power3.inOut" }
    );

    // Stagger nodes
    tl.fromTo(nodesRef.current, 
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=1.2"
    );
  }, { scope: containerRef });

  return (
    <section id="system-flow" ref={containerRef} className="relative w-full py-16 md:py-20 bg-white border-t border-black/5 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="text-center mb-16 md:mb-32">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#2A2A2D] mb-6 block font-mono">
            Arquitetura de Fluxo Sistêmico
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-[#1D1D1F]">
            Esteira Operacional
          </h2>
        </div>

        {/* Flow Diagram */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
          
          {/* Subtle Connecting Line (Desktop) */}
          <div 
            ref={lineRef}
            className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/15 to-transparent -translate-y-1/2 z-0" 
          />
          
          {FLOW_NODES.map((node, i) => (
            <div key={node.id} className="relative z-10 flex flex-col items-center group w-full lg:w-auto">
              
              {/* The Node Card */}
              <div 
                ref={el => { nodesRef.current[i] = el; }}
                className={cn(
                  "w-full max-w-xs lg:w-36 xl:w-44 h-24 lg:h-32 flex flex-col items-center justify-center p-4",
                  "bg-white/60 backdrop-blur-2xl border border-black/10 rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)]",
                  "transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-black/20 cursor-default relative overflow-hidden"
                )}
              >
                {/* Subtle metallic sheen on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <span className="text-[#2A2A2D]/40 font-mono text-[9px] uppercase tracking-widest mb-2 block relative z-10">
                  Estágio_{node.id}
                </span>
                <span className="text-[#1D1D1F] font-sans font-medium text-sm xl:text-base text-center leading-tight mb-1 relative z-10">
                  {node.label}
                </span>
                <span className="text-[#2A2A2D] font-light text-[10px] xl:text-xs text-center opacity-70 relative z-10">
                  {node.sub}
                </span>
              </div>
              
              {/* Mobile connecting line */}
              {i < FLOW_NODES.length - 1 && (
                <div className="lg:hidden w-[1px] h-6 bg-black/10 my-2" />
              )}
              
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
