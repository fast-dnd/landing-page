"use client";

import Image from "next/image";
import React from "react";
import { jibril } from "@/utils/fonts";

const Partners = () => {
  return (
    <section
      className="w-full relative mt-16 md:mt-40 text-center px-4"
      aria-labelledby="partners-heading"
    >
      <h2
        id="partners-heading"
        style={jibril.style}
        className="text-2xl md:text-4xl font-bold mb-8 md:mb-12"
      >
        v3RPG <span className="text-tomato">Ecosystem Partners</span>
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
        <a
          href="https://attic42.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
          aria-label="Visit Attic42 website, a key partner in the v3RPG ecosystem"
        >
          <Image
            className="transition-transform duration-300 group-hover:scale-110"
            src="/images/logos/attic42.png"
            alt="Attic42 - Partner of v3RPG"
            width={80}
            height={80}
          />
          <p className="mt-2 md:mt-4 text-sm md:text-lg font-medium text-gray-700 group-hover:text-tomato">
            Attic42
          </p>
        </a>
        <a
          href="https://arbitrum.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
          aria-label="Visit Arbitrum website, supporting v3RPG with blockchain solutions"
        >
          <Image
            className="transition-transform duration-300 group-hover:scale-110"
            src="/images/logos/arbitrum-logo.png"
            alt="Arbitrum - Blockchain partner of v3RPG"
            width={80}
            height={80}
          />
          <p className="mt-2 md:mt-4 text-sm md:text-lg font-medium text-gray-700 group-hover:text-tomato">
            Arbitrum
          </p>
        </a>
        <a
          href="https://www.ora.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
          aria-label="Visit Ora Protocol website, providing decentralized AI solutions for v3RPG"
        >
          <Image
            className="transition-transform duration-300 group-hover:scale-110"
            src="/images/logos/ora-logo.png"
            alt="Ora Protocol - Decentralized AI partner of v3RPG"
            width={80}
            height={80}
          />
          <p className="mt-2 md:mt-4 text-sm md:text-lg font-medium text-gray-700 group-hover:text-tomato">
            Ora Protocol
          </p>
        </a>
      </div>
    </section>
  );
};

export default Partners;
