import Image from "next/image";

const technologies = [
  { src: 'n8n.png', name: 'n8n', role: 'Orquestração de Dados & Webhooks.' },
  { src: 'supabase.png', name: 'Supabase', role: 'Arquitetura de Dados Relacional.' },
  { src: 'typebot.png', name: 'Typebot', role: 'Interfaces Conversacionais Lógicas.' },
  { src: 'vercel.png', name: 'Vercel', role: 'Edge Computing & Deploy Contínuo.' },
  { src: 'meta.png', name: 'Meta', role: 'Escala de Atenção Preditiva.' },
  { src: 'googleads.png', name: 'Google Ads', role: 'Aquisição Baseada em Intenção.' },
  { src: 'whatsapp.png', name: 'WhatsApp', role: 'Gateway de Comunicação Direta.' },
  { src: 'chatgpt.png', name: 'ChatGPT', role: 'Motor de Raciocínio Cognitivo.' },
  { src: 'claude.png', name: 'Claude', role: 'Análise de Dados Complexa.' },
  { src: 'gemini.png', name: 'Gemini', role: 'Processamento Multimodal.' },
  { src: 'antigravity.png', name: 'Antigravity', role: 'Engenharia de Front-end Acelerada.' },
  { src: 'cloud.png', name: 'Cloud', role: 'Hospedagem & Distribuição Global.' },
];

export function Marquee() {
  return (
    <section className="relative overflow-hidden w-full py-24 flex flex-col justify-center">
      
      {/* 1. The Video Background Layer */}
      <video 
        src="/videos/paper.mp4?update=1" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 2. The Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-10" />

      {/* Reintroduced Premium Typography */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 mb-16 mt-8">
        <span className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">Arquitetura de Escala</span>
        <h2 className="text-4xl md:text-5xl font-medium text-[#1d1d1f] tracking-tight mb-6">Ecossistema de Alta Performance.</h2>
        <p className="text-lg text-gray-600 max-w-2xl">Operamos nativamente com as ferramentas de inteligência e automação mais avançadas do mercado global. Sem gambiarras, com dados centralizados e escala previsível.</p>
      </div>

      {/* 3. The Clean Logo Track (Foreground) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-loop {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          animation: marquee-loop 40s linear infinite;
        }
      `}} />

      <div className="relative z-20 flex w-max animate-marquee-loop items-center hover:[animation-play-state:paused]">
        {/* We double the array to ensure seamless looping */}
        {[...technologies, ...technologies].map((tech, idx) => (
          <div key={idx} className="relative group flex flex-col items-center justify-center w-40 h-56 mx-8 flex-shrink-0 cursor-pointer">
            
            {/* The Logo */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:scale-105 overflow-hidden flex items-center justify-center p-2">
              <Image 
                src={`/images/logos/${tech.src}`}
                alt={tech.name}
                fill
                sizes="(max-width: 768px) 112px, 128px"
                className="object-contain"
                priority={idx < 12}
              />
            </div>

            {/* The Tooltip (Text) */}
            <div className="absolute bottom-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out text-center w-48">
              <p className="text-sm font-semibold text-[#1d1d1f] mb-1">{tech.name}</p>
              <p className="text-xs text-gray-700 leading-tight">{tech.role}</p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
