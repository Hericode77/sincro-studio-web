import { MagneticButton } from "@/components/ui/MagneticButton";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

export function Cta() {
  return (
    <section 
      className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-64"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}
    >
      {/* 1. The Video Base */}
      <video 
        src="/videos/glass.mp4?v=2" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 z-0"
      />

      {/* 2. The Cinematic Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-[radial-gradient(circle_at_center,rgba(29,29,31,0.3)_0%,rgba(10,10,12,0.95)_100%)] z-0" />

      {/* 3. The Texture Layer */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none">
        <NoiseOverlay />
      </div>
      
      {/* Deployment SLA */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-24 mb-32 md:mb-[30vh] relative z-10">
        
        <div className="flex items-end gap-6 md:gap-10">
          <span className="text-[10rem] md:text-[14rem] lg:text-[18rem] leading-[0.75] tracking-tighter text-white font-medium drop-shadow-2xl -ml-2">
            05
          </span>
          <div className="pb-4 md:pb-8">
            <span className="block text-2xl md:text-4xl font-sans font-medium text-white/70 tracking-tight">Dias Úteis.</span>
            <span className="block text-white/70 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mt-3">SLA de Implantação.</span>
          </div>
        </div>
        
        <div className="max-w-md lg:pb-8">
          <p className="text-white/50 font-sans font-light text-lg md:text-xl leading-relaxed">
            Esteira de implantação milimetricamente padronizada. Do contrato ao pleno funcionamento sem customizações que atrasam o ROI.
          </p>
        </div>

      </div>

      {/* Final CTA */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center pb-24 md:pb-64 relative z-10">
        <h2 className="text-6xl md:text-8xl lg:text-[9rem] leading-[1.05] tracking-[-0.03em] font-sans font-medium text-white drop-shadow-xl mb-8 md:mb-12 max-w-6xl">
          Arquitetamos o <br/>
          <span className="font-serif italic text-white/80">Inevitável.</span>
        </h2>
        
        <p className="text-white/50 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mb-12 md:mb-20 max-w-2xl leading-relaxed">
          Sincro Studio &copy; {new Date().getFullYear()} <br className="md:hidden"/> <span className="hidden md:inline">|</span> Confidencial <span className="hidden md:inline">|</span> <br className="md:hidden"/> PMEs de Alta Performance.
        </p>

        <div className="will-change-transform">
          <MagneticButton className="px-14 py-6 text-xs uppercase tracking-[0.2em] bg-white text-[#1D1D1F] shadow-[0_20px_60px_rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-500">
            Solicitar Acesso
          </MagneticButton>
        </div>
      </div>

    </section>
  );
}
