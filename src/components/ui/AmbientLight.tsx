"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function AmbientLight() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(blob1.current, {
      x: "15vw",
      y: "5vh",
      rotation: 180,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(blob2.current, {
      x: "-15vw",
      y: "-5vh",
      rotation: -180,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div 
        ref={blob1}
        className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#F1F5F9] rounded-full blur-[120px] opacity-80 mix-blend-multiply origin-center" 
      />
      <div 
        ref={blob2}
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#E0F2FE] rounded-full blur-[100px] opacity-50 mix-blend-multiply origin-center" 
      />
    </div>
  );
}
