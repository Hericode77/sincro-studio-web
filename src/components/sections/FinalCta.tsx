export function FinalCta() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white border-t border-black/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        <span className="text-[#2A2A2D] font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mb-8 block">
          Diagnóstico estratégico em até 24 horas.
        </span>
        
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-sans font-medium tracking-tight text-[#1D1D1F] leading-[1.05] mb-8 max-w-4xl">
          Descubra Onde Sua Operação Está <br className="hidden md:block"/>
          <span className="font-serif italic text-black">Sangrando Dinheiro.</span>
        </h2>
        
        <p className="text-[#2A2A2D] font-sans font-light text-base md:text-xl leading-relaxed max-w-3xl mb-16 md:mb-20">
          Identificamos gargalos operacionais, perdas de eficiência, dependência humana e vazamentos comerciais que impedem sua escala previsível.
        </p>

        <a 
          href="https://chat.sincrostudio.pro/diagnostico01" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group inline-block"
        >
          {/* Subtle pulse shadow */}
          <div className="absolute inset-0 bg-[#1D1D1F] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
          
          <button className="relative px-10 md:px-16 py-5 md:py-6 bg-[#1D1D1F] text-white rounded-full font-medium tracking-widest uppercase text-xs md:text-sm hover:scale-105 transition-transform duration-500 shadow-2xl">
            Iniciar Diagnóstico Gratuito
          </button>
        </a>

      </div>
    </section>
  );
}
