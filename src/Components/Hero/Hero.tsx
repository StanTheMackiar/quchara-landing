"use client";
import { useResponsive } from "@/hooks";
import { ContentHero } from "./ContentHero";

const Hero = () => {

  const { isMobile, isTablet, isDesktop } = useResponsive()

  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-0 w-screen relative overflow-hidden  max-w-mw-container">
      <div className="flex-1">
        <ContentHero />
      </div>
      <div className="flex-1 flex items-center justify-center container md:pr-9 lg:pr-0 pointer-events-none">
        <video width={isMobile ? 250 : isTablet ? 300 : isDesktop ? 450 : undefined} src="/images/hero/cellphones.webm" loop autoPlay muted />
      </div>
    </section>
  );
};

export default Hero;
