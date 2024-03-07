"use client";
import { useResponsive } from "@/hooks";
import { ContentHero } from "./ContentHero";

const Hero = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-0 w-screen relative overflow-hidden  max-w-mw-container">
      <div className="flex-1">
        <ContentHero />
      </div>
      <div className="flex-1 flex items-center justify-center container md:pr-9 lg:pr-0 pointer-events-none pb-2">
        <video
          width={isMobile ? 250 : isTablet ? 300 : isDesktop ? 450 : undefined}
          height={350}
          src="/images/hero/cellphones.webm"
          loop
          autoPlay
          muted
          className="h-[350px] md:h-[600px] lg:h-max"
        />
      </div>
    </section>
  );
};

export default Hero;
