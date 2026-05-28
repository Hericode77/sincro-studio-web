import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-200/50 flex items-center justify-between h-20 px-4 md:px-8 transition-all">
      <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
        {/* Mobile Logo (Visible only on mobile) */}
        <div className="relative w-48 h-14 md:hidden flex items-center pl-3">
          <Image 
            src="/images/logo-mobile.png"
            alt="Sincro Studio"
            fill
            className="object-contain object-left scale-[2.6] origin-left"
            priority
            unoptimized
          />
        </div>

        {/* Desktop Logo (Visible only on medium/desktop screens) */}
        <div className="relative w-72 h-16 hidden md:flex items-center">
          <Image 
            src="/images/logo-desktop.png"
            alt="Sincro Studio"
            fill
            className="object-contain object-left scale-[2.4] origin-left"
            priority
            unoptimized
          />
        </div>
      </Link>
      
      <a 
        href="https://chat.sincrostudio.pro/diagnostico01" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-4 py-2 text-xs md:px-6 md:py-3 md:text-sm bg-[#1d1d1f] text-white rounded-full font-medium transition-transform hover:scale-105 shadow-md flex-shrink-0"
      >
        Solicitar Diagnóstico
      </a>
    </header>
  );
}
