import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const Features = dynamic(() => import("@/components/sections/Features").then(mod => mod.Features));
const Philosophy = dynamic(() => import("@/components/sections/Philosophy").then(mod => mod.Philosophy));
const Marquee = dynamic(() => import("@/components/sections/Marquee").then(mod => mod.Marquee));
const Protocol = dynamic(() => import("@/components/sections/Protocol").then(mod => mod.Protocol));
const SystemFlow = dynamic(() => import("@/components/sections/SystemFlow").then(mod => mod.SystemFlow));
const TargetingMatrix = dynamic(() => import("@/components/sections/TargetingMatrix").then(mod => mod.TargetingMatrix));
const Faq = dynamic(() => import("@/components/sections/Faq").then(mod => mod.Faq));
const FinalCta = dynamic(() => import("@/components/sections/FinalCta").then(mod => mod.FinalCta));
const Cta = dynamic(() => import("@/components/sections/Cta").then(mod => mod.Cta));

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <Philosophy />
      <SystemFlow />
      <Protocol />
      <TargetingMatrix />
      <Marquee />
      <Faq />
      <FinalCta />
      <Cta />
    </div>
  );
}
