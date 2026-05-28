"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const MODULES = [
  {
    title: "Sincro Aquisição™",
    subtitle: "Aquisição Estruturada",
    desc: "Garante a atração previsível e a passagem limpa dos contatos para o CRM. Desenvolvido para empresas com tráfego desconectado.",
    bullets: ["Gestão estratégica de tráfego pago", "Design lógico de funil", "Pixels de conversão avançados", "Relatórios por Analista IA"]
  },
  {
    title: "Sincro Conversão™",
    subtitle: "Conversão Automatizada",
    desc: "Elimina o gargalo do atendimento comercial lento. Resposta imediata e qualificação autônoma, 24/7.",
    bullets: ["Agente de IA treinado", "Integração nativa WhatsApp API", "Automação de follow-ups", "Agendamentos em Google Calendar"]
  },
  {
    title: "Sincro Escala™",
    subtitle: "Máquina de Vendas Previsível",
    desc: "O ecossistema definitivo. Integração ponta a ponta, do tráfego à recompra automatizada.",
    bullets: ["Integração Aquisição + Conversão", "Automação de LTV", "Painel BI Looker Studio", "Análise via IA proprietária"]
  }
];

export function Protocol() {
  return (
    <section id="protocol" className="relative w-full py-16 md:py-20 bg-[#F5F5F7] border-t border-black/5">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-10">
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#2A2A2D] mb-4 block font-mono">
              Arquitetura de Sistemas
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-[#1D1D1F]">
              Três Pilares <br className="hidden md:block"/> Operacionais.
            </h2>
          </div>
          <p className="text-[#2A2A2D] max-w-sm text-sm leading-relaxed mb-1 md:mb-2">
            Módulos de crescimento interconectados. Cada pilar foi projetado para sustentar o próximo, eliminando vazamentos de receita em toda a jornada de escala.
          </p>
        </div>

        {/* CSS Grid 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {MODULES.map((module, i) => (
            <div 
              key={module.title}
              className="group flex flex-col bg-white border border-black/5 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-black/10 transition-all duration-500 overflow-hidden"
            >
              {/* Media Glassmorphism Container */}
              <div className="relative w-full aspect-square overflow-hidden border-b border-black/5 flex items-center justify-center p-8 md:p-12">
                {/* Subtle Glowing Refraction Behind Image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-50 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80 z-0">
                  <div className="w-[70%] h-[70%] bg-gradient-to-tr from-slate-200 to-cyan-100 rounded-full blur-3xl" />
                </div>
                
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_60%)] pointer-events-none z-0" />
                
                <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 z-10">
                  {i === 0 && (
                    <Image src="/images/funnel.jpg" alt="Sincro Aquisição" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain mix-blend-multiply" priority />
                  )}

                  {i === 1 && (
                    <Image src="/images/cards.png" alt="Sincro Conversão" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain mix-blend-multiply" priority />
                  )}

                  {i === 2 && (
                    <Image src="/images/cube.png" alt="Sincro Escala" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain mix-blend-multiply" priority />
                  )}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col p-8 md:p-10 flex-1">
                <span className="text-[#2A2A2D] font-mono text-[10px] tracking-[0.2em] uppercase mb-4 block">
                  {module.title}
                </span>
                <h3 className="text-2xl md:text-3xl text-[#1D1D1F] font-sans font-medium tracking-tight leading-[1.1] mb-4">
                  {module.subtitle}
                </h3>
                <p className="text-[#2A2A2D] font-sans font-light text-sm leading-relaxed mb-8">
                  {module.desc}
                </p>
                
                <ul className="flex flex-col gap-4 mt-auto">
                  {module.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-[#1D1D1F]/5 shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#1D1D1F]" strokeWidth={3} />
                      </div>
                      <span className="text-[#1D1D1F] font-medium text-xs md:text-sm tracking-wide">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
