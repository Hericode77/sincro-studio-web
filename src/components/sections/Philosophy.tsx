"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE_WORDS = [
  "Substituímos", "a", "dependência", "humana", "por", "infraestrutura", 
  "de", "inteligência", "artificial."
];

export function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    // Reveal Kicker
    tl.fromTo(".kicker", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Reveal Headline words
    tl.fromTo(".split-word",
      { opacity: 0, y: 40, rotateX: 20 },
      { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        duration: 1.2, 
        ease: "power3.out", 
        stagger: 0.1 
      },
      "-=0.5" // Start slightly before kicker finishes
    );

    // Reveal Blockquote
    tl.fromTo(".blockquote",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "-=0.8"
    );

  }, { scope: sectionRef });

  return (
    <section 
      id="philosophy" 
      ref={sectionRef} 
      className="relative w-full min-h-[70vh] md:min-h-screen py-16 md:py-24 flex flex-col items-center justify-center text-center [clip-path:inset(0)]"
    >
      {/* Layer 1: Background Parallax (Mobile Safe) */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <Image 
          src="/images/balls.jpeg" 
          alt="Sincro Background" 
          fill 
          className="object-cover object-center" 
          priority 
        />
      </div>

      {/* Layer 2: Frosted Overlay */}
      <div className="absolute inset-0 z-10 bg-white/20 backdrop-blur-md bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.1)_100%)]" />

      {/* Layer 3: Text Content */}
      <div 
        ref={containerRef} 
        className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center"
      >
        <p className="kicker text-[#2A2A2D] font-mono tracking-[0.3em] uppercase text-[10px] md:text-xs mb-8 md:mb-20">
          ARQUITETURA DE ESCALA
        </p>
        
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] text-[#1D1D1F] font-sans font-medium tracking-tight mb-12 md:mb-20 max-w-4xl" style={{ perspective: "1000px" }}>
          {HEADLINE_WORDS.map((word, i) => (
            <span 
              key={i} 
              className="split-word inline-block origin-bottom mr-[0.25em] pb-2 will-change-transform"
            >
              {word === "dependência" || word === "infraestrutura" ? (
                <span className="font-serif italic text-black">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h2>

        <div className="blockquote max-w-2xl border-t border-black/10 pt-10 mt-4">
          <p className="text-[#2A2A2D] font-sans text-lg md:text-2xl font-light leading-relaxed italic">
            "A escala previsível não é um milagre do marketing. É um problema de engenharia matemática resolúvel."
          </p>
          <p className="text-[#1D1D1F] font-sans font-medium text-xs tracking-widest uppercase mt-6">
            — Sincro Operating System
          </p>
        </div>
      </div>
    </section>
  );
}
