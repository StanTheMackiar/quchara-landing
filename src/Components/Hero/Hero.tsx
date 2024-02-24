"use client";
import React from "react";
import Image from "next/image";
import { useResponsive } from "@/hooks";
import { ContentHero } from "./ContentHero";

const Hero = () => {
  const { isMobile } = useResponsive();
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-0 w-screen bg-hero bg-no-repeat bg-cover relative overflow-hidden">
      <Image
        src={isMobile ? "/corner-figures-mobile.svg" : "/corner-figures.png"}
        width={329}
        height={233}
        alt="figures"
        className="absolute md:-bottom-2 w-full md:w-[309px] md:-left-2 -z-0"
      />
      <div className="flex-1">
        <ContentHero />
      </div>
      <figure className="flex-1 flex items-center justify-center container md:pr-9 lg:pr-0">
        <Image
          src="/images/hero/mockup.gif"
          width={isMobile ? 280 : 765}
          height={isMobile ? 351 : 760}
          priority
          alt="Hero images cellphone rotating"
          className="w-full max-w-72 md:max-w-max max-h-[360px] md:max-h-[90%] h-full object-contain"
        />
      </figure>
    </section>
  );
};

export default Hero;
