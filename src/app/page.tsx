"use client";
import { Hero } from "@/Components";
import { useResponsive } from "@/hooks";
import Image from "next/image";

export default function Home() {
  const { isMobile } = useResponsive();
  return (
    <main className="flex relative x h-screen w-screen font-sfPro text-white bg-hero bg-no-repeat bg-cover justify-center items-center overflow-clip">
      <Hero />
      <Image
        src={isMobile ? "/corner-figures-mobile.svg" : "/corner-figures.png"}
        width={329}
        height={233}
        alt="figures"
        className="absolute md:-bottom-2 w-full md:w-[309px] md:-left-2 -z-0"
      />
    </main>
  );
}
