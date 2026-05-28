import Image from "next/image";
import { Check } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="relative w-full py-16 md:py-20 bg-[#F5F5F7] overflow-hidden border-t border-black/5">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-24">
        
        {/* Architectural Section Header */}
        <div className="max-w-3xl">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#2A2A2D] mb-8 font-mono">
            Métricas de Performance
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-[#1D1D1F] leading-[1.1]">
            Sistemas arquitetados para<br />
            <span className="font-serif italic font-light text-black">resultados reais.</span>
          </h2>
        </div>

        {/* Media Glassmorphism Container */}
        <div className="group flex flex-col md:flex-row bg-white border border-black/5 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-black/10 transition-all duration-500 overflow-hidden">
          
          <div className="relative w-full md:w-1/2 lg:w-3/5 aspect-square flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-black/5 p-8 md:p-16 lg:p-24">
            {/* Subtle Glowing Refraction Behind Image */}
            <div className="absolute inset-0 flex items-center justify-center opacity-50 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80 z-0">
              <div className="w-[70%] h-[70%] bg-gradient-to-tr from-slate-200 to-cyan-100 rounded-full blur-3xl" />
            </div>
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_60%)] pointer-events-none z-0" />
            
            <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 z-10">
              <Image 
                src="/images/pistons.jpg" 
                alt="Resultados Reais" 
                fill 
                sizes="(max-width: 768px) 100vw, 60vw" 
                className="object-contain mix-blend-multiply" 
                priority 
              />
            </div>
          </div>

          <div className="flex flex-col p-8 md:p-14 lg:p-20 flex-1 justify-center bg-white">
            <span className="text-[#2A2A2D] font-mono text-[10px] tracking-[0.2em] uppercase mb-4 md:mb-6 block">
              Sincro Performance™
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#1D1D1F] font-sans font-medium tracking-tight leading-[1.1] mb-6 md:mb-8">
              Motor de Receita <br className="hidden lg:block"/> Contínua
            </h3>
            <p className="text-[#2A2A2D] font-sans font-light text-base md:text-lg leading-relaxed mb-10 md:mb-12">
              Operações otimizadas para conversão máxima. O sistema funciona como um motor de pistões sincronizados, transformando leads brutos em clientes de alto LTV com precisão mecânica, sem depender da intuição humana.
            </p>
            
            <ul className="flex flex-col gap-5 md:gap-6 mt-auto">
              {["Crescimento previsível escalável", "Retenção estruturada sistêmica", "Previsibilidade de caixa mensal"].map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-4 md:gap-5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1D1D1F]/5 shrink-0">
                    <Check className="w-3 h-3 text-[#1D1D1F]" strokeWidth={3} />
                  </div>
                  <span className="text-[#1D1D1F] font-medium text-sm md:text-base tracking-wide">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
