import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LenisScrollProvider from "@/components/layout/LenisScrollProvider";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingEcosystemHub } from "@/components/layout/FloatingEcosystemHub";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["italic", "normal"], 
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Sincro Studio | Growth Systems Architecture",
  description: "Modern operational infrastructure, intelligent automation, and applied artificial intelligence to transform attention into predictable revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-[#1D1D1F] antialiased overflow-x-hidden min-h-screen">
        <NoiseOverlay />
        <LenisScrollProvider>
          <Navbar />
          <main className="flex-1 w-full relative">
            {children}
          </main>
          <Footer />
          <FloatingEcosystemHub />
        </LenisScrollProvider>
      </body>
    </html>
  );
}
