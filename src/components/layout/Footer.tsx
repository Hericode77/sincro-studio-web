import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F7] border-t border-black/5 py-12 md:py-24 px-6 md:px-12 font-mono text-[11px] uppercase tracking-widest text-[#2A2A2D]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand & Status */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between space-y-12 md:space-y-0">
          <div>
            <h3 className="text-[#1D1D1F] font-sans font-medium text-xs tracking-widest mb-3 uppercase">Sincro Studio</h3>
            <p className="max-w-xs text-[#2A2A2D] font-sans text-xs leading-relaxed normal-case">
              Growth Systems Architecture. Engineering predictable revenue through applied AI and operational infrastructure.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500/80 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500/80"></span>
            </span>
            <span className="text-[10px] tracking-[0.2em]">System Operational</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-5">
          <h4 className="text-[#1D1D1F] mb-1">Index</h4>
          <Link href="#features" className="hover:text-[#1D1D1F] transition-colors flex items-center gap-1.5 group">
            Infraestrutura <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
          </Link>
          <Link href="#philosophy" className="hover:text-[#1D1D1F] transition-colors flex items-center gap-1.5 group">
            Manifesto <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
          </Link>
          <Link href="#protocol" className="hover:text-[#1D1D1F] transition-colors flex items-center gap-1.5 group">
            Protocolo <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
          </Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col space-y-5">
          <h4 className="text-[#1D1D1F] mb-1">Legal</h4>
          <Link href="#" className="hover:text-[#1D1D1F] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#1D1D1F] transition-colors">Terms of Service</Link>
          <div className="mt-auto pt-6 text-[9px] tracking-[0.2em] text-[#2A2A2D]">
            &copy; {new Date().getFullYear()} Sincro Studio
          </div>
        </div>

      </div>
    </footer>
  );
}
