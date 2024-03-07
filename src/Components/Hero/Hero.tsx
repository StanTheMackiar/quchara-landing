"use client";
import { ContentHero } from "./ContentHero";

const Hero = () => {

  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-0 w-screen relative overflow-hidden  max-w-mw-container">
      <div className="flex-1">
        <ContentHero />
      </div>
      <div className="flex-1 flex items-center justify-center container md:pr-9 lg:pr-0 pointer-events-none pb-2">
        <video
          height={350}
          src="/images/hero/cellphones.webm"
          loop
          autoPlay
          muted
          className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[450px] 2xl:w-max"
        />
      </div>
    </section>
  );
};

export default Hero;
