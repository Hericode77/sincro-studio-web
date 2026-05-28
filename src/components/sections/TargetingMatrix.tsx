import { X } from "lucide-react";

export function TargetingMatrix() {
  return (
    <section id="targeting" className="relative w-full py-16 md:py-20 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20 md:gap-32">
        
        {/* Part 1: The ICP Grid */}
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex items-center justify-between border-b border-black/10 pb-6">
            <h2 className="text-sm font-mono tracking-widest uppercase text-[#1D1D1F]">ADERÊNCIA SISTÊMICA</h2>
            <span className="text-[10px] uppercase font-mono text-[#2A2A2D] tracking-[0.2em] hidden md:block">ECOSSISTEMAS COMPATÍVEIS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tile 1: Spans 2 cols for asymmetry */}
            <div className="lg:col-span-2 flex flex-col justify-between p-8 md:p-14 bg-[#F5F5F7] border border-black/5 rounded-[2.5rem]">
              <span className="text-[10px] font-mono uppercase text-[#2A2A2D] tracking-[0.2em] mb-12 md:mb-20 block">
                OPERAÇÕES DE ALTO VOLUME
              </span>
              <div>
                <h3 className="text-3xl md:text-4xl font-sans font-medium text-[#1D1D1F] mb-6">Clínicas & Saúde</h3>
                <p className="text-[#2A2A2D] font-light text-base md:text-lg max-w-xl leading-relaxed">
                  Tráfego esfriando na recepção. Transformamos o alto volume de interações superficiais em agendamentos qualificados através de triagem autônoma 24/7, eliminando a fricção humana.
                </p>
              </div>
            </div>

            {/* Tiles 2 & 3: Stacked in the 3rd column */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 flex flex-col justify-between p-8 md:p-10 bg-white border border-black/5 shadow-[0_20px_40px_rgb(0,0,0,0.03)] rounded-[2.5rem]">
                <span className="text-[10px] font-mono uppercase text-[#2A2A2D] tracking-[0.2em] mb-12 block">
                  VENDAS COMPLEXAS
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-sans font-medium text-[#1D1D1F] mb-3">Imobiliário & Advocacia</h3>
                  <p className="text-[#2A2A2D] font-light text-sm leading-relaxed">
                    Perda de tempo massiva com curiosos. Implementamos funis preditivos para qualificação rigorosa de leads, encurtando ciclos de vendas e preservando o tempo dos closers.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between p-8 md:p-10 bg-white border border-black/5 shadow-[0_20px_40px_rgb(0,0,0,0.03)] rounded-[2.5rem]">
                <span className="text-[10px] font-mono uppercase text-[#2A2A2D] tracking-[0.2em] mb-12 block">
                  GROWTH & GESTÃO FINANCEIRA
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-sans font-medium text-[#1D1D1F] mb-3">Financeiro & Seguros</h3>
                  <p className="text-[#2A2A2D] font-light text-sm leading-relaxed">
                    Vazamento de pipeline e retenção ineficiente. Estruturação de Growth Marketing integrado à arquitetura de dados para maximizar o LTV e garantir previsibilidade de caixa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layout for Part 2 and 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          
          {/* Part 2: Cenários de Implementação */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b border-black/10 pb-6 mb-8">
              <h2 className="text-sm font-mono tracking-widest uppercase text-[#1D1D1F]">CENÁRIOS DE IMPLEMENTAÇÃO</h2>
            </div>
            
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-center justify-between py-8 border-b border-black/5 group cursor-default">
                <span className="font-sans font-medium text-[#1D1D1F] text-lg md:text-xl transition-colors">Clínicas & Saúde</span>
                <span className="font-mono text-[10px] md:text-xs tracking-widest text-[#1D1D1F] uppercase bg-black/5 px-4 py-2 rounded-full">CONVERSÃO IMEDIATA</span>
              </div>
              <div className="flex items-center justify-between py-8 border-b border-black/5 group cursor-default">
                <span className="font-sans font-medium text-[#2A2A2D] text-lg md:text-xl group-hover:text-[#1D1D1F] transition-colors">Imobiliário & Advocacia</span>
                <span className="font-mono text-[10px] md:text-xs tracking-widest text-[#1D1D1F] uppercase bg-black/5 px-4 py-2 rounded-full">TRIAGEM PREDITIVA</span>
              </div>
              <div className="flex items-center justify-between py-8 border-b border-black/5 group cursor-default">
                <span className="font-sans font-medium text-[#2A2A2D] text-lg md:text-xl group-hover:text-[#1D1D1F] transition-colors">Financeiro & Seguros</span>
                <span className="font-mono text-[10px] md:text-xs tracking-widest text-[#1D1D1F] uppercase bg-black/5 px-4 py-2 rounded-full">ESCALA & PREVISIBILIDADE</span>
              </div>
            </div>
          </div>

          {/* Part 3: The Anti-ICP */}
          <div className="flex flex-col h-full">
             <div className="bg-[#1D1D1F] rounded-[2.5rem] p-10 md:p-14 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
                
                {/* Subtle red clinical accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/[0.03] rounded-bl-[100%] pointer-events-none" />
                
                <div>
                  <h2 className="text-xs font-mono tracking-widest uppercase text-white/50 mb-12 flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-red-500 block animate-[pulse_2s_ease-in-out_infinite]" />
                    FIREWALL DE INTEGRAÇÃO (ANTI-ICP)
                  </h2>
                  
                  <ul className="flex flex-col gap-8">
                    {[
                      "Operações sem validação de caixa",
                      "Busca por \"Social Media\" ou métricas de vaidade",
                      "Cultura avessa a dados e infraestrutura de IA",
                      "Modelos de contratação arcaicos baseados em 'horas'"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-5">
                        <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-white font-sans font-light text-base md:text-lg tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-16 pt-8 border-t border-white/10">
                  <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
                    Diretriz do Sistema: Recusa autônoma de projetos incompatíveis.
                  </p>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
