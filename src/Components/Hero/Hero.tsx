"use client";
import { useResponsive } from "@/hooks";
import Image from "next/image";
import { ContentHero } from "./ContentHero";

const Hero = () => {
  const { isMobile } = useResponsive();

  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-0 w-screen relative overflow-hidden  max-w-mw-container">
      <div className="flex-1">
        <ContentHero />
      </div>
      <div className="flex-1 flex items-center justify-center container md:pr-9 lg:pr-0">
        <video src="/images/hero/cellphones.webm" loop autoPlay muted />
      </div>
    </section>
  );
};

export default Hero;
