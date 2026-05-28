"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MagneticButton } from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current || !videoRef.current || !textWrapperRef.current || !ctaRef.current) return;

    // Pin the hero section for a cinematic scroll duration (200% of viewport)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1, // Smooth interpolation linked to scroll velocity
      }
    });

    // Animate video: scale down and dim as we scroll
    tl.to(videoRef.current, {
      scale: 0.85,
      opacity: 0.15,
      ease: "none",
    }, 0);

    // Fade out and translate typography upward
    tl.to(textWrapperRef.current, {
      y: -100,
      opacity: 0,
      ease: "power1.inOut"
    }, 0);

    tl.to(ctaRef.current, {
      y: -40,
      opacity: 0,
      ease: "power1.inOut"
    }, 0.05);

  }, { scope: container });

  // Initial Load Animation (slow, cinematic, Apple-level pacing)
  useGSAP(() => {
    const headline = textWrapperRef.current?.querySelector("h1");
    const h2 = textWrapperRef.current?.querySelector("h2");
    const subhead = textWrapperRef.current?.querySelector("p");

    if (!headline || !h2 || !subhead || !ctaRef.current) return;

    gsap.set([headline, h2, subhead, ctaRef.current], { y: 40, opacity: 0 });

    const initTl = gsap.timeline({ delay: 0.2 });
    initTl.to(headline, {
      y: 0,
      opacity: 1,
      duration: 1.8,
      ease: "power3.out"
    })
    .to(h2, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out"
    }, "-=1.4")
    .to(subhead, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out"
    }, "-=1.2")
    .to(ctaRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out"
    }, "-=1.0");
  }, { scope: container });

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center">
      
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center overflow-hidden bg-white">
        <div 
          ref={videoRef} 
          className="w-full h-full overflow-hidden will-change-transform shadow-[0_40px_120px_rgba(0,0,0,0.1)] rounded-[3rem]"
        >
          <video 
            src="/videos/hero.mp4?v=2" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        
        {/* Very subtle gradient overlay just to ensure bottom text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none" />
      </div>

      {/* Main Headline */}
      <div ref={textWrapperRef} className="relative z-10 flex flex-col items-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-sans font-medium tracking-tight text-[#1D1D1F] leading-[1.05] mb-6 drop-shadow-sm text-center max-w-5xl">
          Inteligência <br className="md:hidden" /> Operacional.
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-sans font-medium text-[#1D1D1F] mb-8 text-center max-w-3xl">
          Substituindo o acaso por <span className="font-serif italic font-light text-[#2A2A2D]">infraestrutura de IA.</span>
        </h2>

        <p className="mt-10 text-[#2A2A2D] text-base md:text-lg font-light tracking-wide max-w-xl leading-relaxed text-center">
          Projetamos arquiteturas de receita ponta a ponta. Integração sistêmica entre tráfego avançado, agentes autônomos e automação de vendas para escala com precisão matemática.
        </p>

        <div ref={ctaRef} className="mt-14 will-change-transform">
          <MagneticButton className="px-10 py-4 text-xs uppercase tracking-[0.2em]">
            Explorar arquitetura
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
