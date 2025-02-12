"use client";

import { jibril } from "@/utils/fonts";
import Image from "next/image";
import YouTube from "react-youtube";

const screenshots = [
  {
    src: "/images/sc1.png",
    alt: "Character Creation Interface",
    title: "Design your unique hero with advanced customization tools",
  },
  {
    src: "/images/sc3.png",
    alt: "Interactive Story Interface",
    title: "Engage with dynamic narrative systems",
  },
  {
    src: "/images/sc2.png",
    alt: "Combat Interface",
    title: "Experience strategic multiplayer encounters",
  },
  {
    src: "/images/sc4.png",
    alt: "Achievements Interface",
    title: "Track progress and earn rewards",
  },
];

const VideoAndScreenshots = () => {
  return (
    <section
      className="mt-20 md:mt-40 flex items-center flex-col relative"
      aria-labelledby="showcase-heading"
      itemScope
      itemType="https://schema.org/VideoGame"
    >
      <div className="flex items-center flex-col gap-4 md:gap-16">
        <Image
          className="hidden md:block absolute w-full h-auto -z-10"
          src="/images/bg-video-sc.png"
          alt="Background Texture"
          width={1920}
          height={1944}
          priority={false}
        />
        <Image
          className="absolute md:hidden w-full h-auto -z-10"
          src="/images/bg-video-sc-mobile.png"
          alt="Mobile Background Texture"
          width={390}
          height={687}
          priority={false}
        />

        <h2
          id="showcase-heading"
          style={jibril.style}
          className="text-center text-3xl md:text-5xl leading-[130%] mt-16"
          itemProp="name"
        >
          Immersive <span className="text-tomato">Gameplay</span>
        </h2>

        <div className="w-full flex justify-center mt-8">
          <YouTube
            iframeClassName="max-md:w-80 max-md:h-[183px]"
            videoId="4EmRFbdliY4"
            title="v3RPG Gameplay Preview"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:gap-14 lg:gap-24 xl:gap-40 px-8 w-full mt-20">
        {/* Mobile Layout */}
        <div className="w-full md:hidden flex flex-col gap-8">
          {screenshots.map((item, index) => (
            <Image
              key={`mobile-${index}`}
              src={item.src}
              alt={item.alt}
              width={768}
              height={432}
              className="w-full h-auto rounded-lg"
              loading={index === 0 ? "eager" : "lazy"}
              title={item.title}
              itemProp="image"
            />
          ))}
        </div>

        {/* Desktop Layout */}
        <div
          className="hidden md:block w-full aspect-[1.225] xl:w-[1280px] xl:h-[1320px] relative"
          aria-label="Feature Screenshots"
        >
          <div className="absolute w-3/5 left-0 top-0 flex flex-col gap-10 md:gap-14 lg:gap-24 xl:gap-40">
            {screenshots.slice(0, 2).map((item, index) => (
              <Image
                key={`desktop-left-${index}`}
                src={item.src}
                alt={item.alt}
                width={768}
                height={432}
                className="w-48 h-[108px] xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]"
                loading={index === 0 ? "eager" : "lazy"}
                title={item.title}
                itemProp="image"
              />
            ))}
          </div>
          <div className="absolute w-3/5 right-0 top-[15%] xl:top-[296px] flex flex-col gap-10 md:gap-14 lg:gap-24 xl:gap-40">
            {screenshots.slice(2).map((item, index) => (
              <Image
                key={`desktop-right-${index}`}
                src={item.src}
                alt={item.alt}
                width={768}
                height={432}
                className="w-48 h-[108px] xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]"
                loading="lazy"
                title={item.title}
                itemProp="image"
              />
            ))}
          </div>
        </div>
      </div>

      <meta itemProp="gamePlatform" content="Web Browser" />
      <meta itemProp="applicationCategory" content="Game" />
      <meta
        itemProp="feature"
        content="Interactive Storytelling, Character Creation, Multiplayer Combat, Achievement System"
      />
    </section>
  );
};

export default VideoAndScreenshots;
