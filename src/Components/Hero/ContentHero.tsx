import Image from "next/image";
import { QucharaLogo } from "../Icons";
import { useResponsive } from "@/hooks";

export const ContentHero = () => {
  const { isMobile } = useResponsive();
  return (
    <div className="container flex flex-col items-center md:pl-9  lg:pl-108 pt-8 md:pt-[54px] gap-6 md:gap-9 lg:gap-[114px]">
      <QucharaLogo />
      <div className="flex flex-col gap-4 md:gap-6 max-w-[528px] items-center">
        <h1 className="text-2xl md:text-5xl relative text-center md:text-start">
          <Image
            src="/content-corner-figure.svg"
            width={40}
            height={28}
            alt="svg figure"
            className="absolute -top-7 -left-7"
          />
          Programa tus almuerzos y recíbelos a una hora exacta. Si llegamos
          tarde, te pagamos.
        </h1>
        <p className="text-sm md:text-2xl max-w-[183px] md:max-w-max text-center md:text-start">
          Página web en construcción. Pronto estará disponible.
        </p>
        <div className="download-container flex gap-5 mt-2 md:mt-0">
          <Image
            src="/images/hero/download-ios.png"
            alt="download icon"
            width={isMobile ? 120 : 210}
            height={isMobile ? 40 : 70}
          />
          <Image
            src="/images/hero/download-android.png"
            alt="download icon"
            width={isMobile ? 120 : 210}
            height={isMobile ? 40 : 70}
          />
        </div>
      </div>
    </div>
  );
};
