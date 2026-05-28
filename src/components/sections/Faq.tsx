"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "A implantação da inteligência artificial exige mudanças na minha equipe?",
    a: "Não. Nossas automações são desenhadas para rodar em paralelo ou conectadas aos seus processos atuais. Sua equipe não precisará aprender códigos complexos, apenas interagir com os resultados e leads já qualificados."
  },
  {
    q: "Qual é o tempo médio de implantação da Esteira Operacional?",
    a: "O SLA de Implantação do Sincro Studio é de 05 dias úteis. Entregamos a arquitetura completa, do tráfego à automação de vendas, rodando e gerando dados sem customizações que atrasam o ROI."
  },
  {
    q: "Com quais CRMs e sistemas o ecossistema se integra?",
    a: "Nativamente operamos com qualquer sistema que possua API aberta ou Webhooks (ex: HubSpot, Salesforce, RD Station, Kommo, Pipedrive). O ecossistema é agnóstico e se molda à sua infraestrutura."
  },
  {
    q: "A qualificação de leads via WhatsApp soa robótica?",
    a: "Utilizamos LLMs avançados com personalidades treinadas especificamente para o seu negócio. A fluidez da conversa e as estratégias de retenção fazem com que o cliente muitas vezes não perceba que está falando com uma IA."
  }
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative w-full py-16 md:py-20 bg-white border-t border-black/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-[#1D1D1F] mb-16 text-center">
          Perguntas Frequentes
        </h2>
        
        <div className="w-full flex flex-col border-t border-gray-200/60">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-gray-200/60 overflow-hidden">
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-[#1D1D1F] font-medium text-base md:text-xl pr-8 group-hover:opacity-70 transition-opacity">
                    {faq.q}
                  </span>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-[#1D1D1F] transition-transform duration-300 shrink-0",
                    isOpen && "rotate-180"
                  )} />
                </button>
                <div 
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-500 font-light leading-relaxed text-sm md:text-lg max-w-3xl pr-4 md:pr-12">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
