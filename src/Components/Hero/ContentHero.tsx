import { APP_STORE_URL, PLAY_STORE_URL } from "@/helpers/const/url";
import { useResponsive } from "@/hooks";
import Image from "next/image";
import { QucharaLogo } from "../Icons";

export const ContentHero = () => {
  const { isMobile } = useResponsive();
  return (
    <div className="container flex flex-col items-center md:items-start md:pl-9  lg:pl-108 pt-8 md:pt-[54px] gap-6 md:gap-9 lg:gap-[114px] tracking-[-1.44px] md:tracking-[-2.50px]">
      <QucharaLogo
        width={isMobile ? 99 : undefined}
        height={isMobile ? 24 : undefined}
      />
      <div className="flex flex-col gap-4 md:gap-6 max-w-[528px] items-center md:items-start  px-4 md:px-0">
        <h1 className="text-2xl md:text-5xl relative text-center md:text-start leading-[110%] inline">
          <span className="relative">
            <Image
              src="/content-corner-figure.svg"
              width={isMobile ? 15 : 40}
              height={isMobile ? 11 : 28}
              alt="svg figure"
              className="absolute  md:-top-4 -left-2 -top-2 md:-left-4"
            />
            P
          </span>
          rograma tus almuerzos y recíbelos a una hora exacta. Si llegamos
          tarde, te pagamos.
        </h1>
        <p className="text-sm md:text-2xl max-w-[183px] md:max-w-max text-center md:text-start tracking-[-0.7px] md:tracking-[-1.2px]">
          Página web en construcción. Pronto estará disponible.
        </p>
        <div className="download-container flex gap-5 mt-2 md:mt-0">
          <a className="z-10" href={APP_STORE_URL}>
            <Image
              src="/images/hero/download-ios.png"
              alt="Descargar iOS"
              width={isMobile ? 120 : 210}
              height={isMobile ? 40 : 70}
              className="aspect-[26/9] w-full"
            />
          </a>
          <a href={PLAY_STORE_URL}>
            <Image
              src="/images/hero/download-android.png"
              alt="Descargar Android"
              width={isMobile ? 120 : 210}
              height={isMobile ? 40 : 70}
              className="aspect-[26/9] w-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
