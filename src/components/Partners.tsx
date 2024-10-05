"use client";

import Image from "next/image";
import React from "react";
import { jibril } from "@/utils/fonts";

const Partners = () => {
  return (
    <div className="w-full relative mt-0 xl:mt-80 text-center px-8  ">
      <h2 style={jibril.style} className="text-4xl font-bold mb-12 text-tomato">
        v3rpg ecosystem partners
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <a
          href="https://attic42.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <Image
            className="transition-transform duration-300 group-hover:scale-110"
            src="/images/logos/attic42.png"
            alt="Attic42"
            width={120}
            height={120}
          />
          <p className="mt-4 text-lg font-medium text-gray-700 group-hover:text-tomato">
            Attic42
          </p>
        </a>
        <a
          href="https://arbitrum.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <Image
            className="transition-transform duration-300 group-hover:scale-110"
            src="/images/logos/arbitrum-logo.png"
            alt="Arbitrum"
            width={120}
            height={120}
          />
          <p className="mt-4 text-lg font-medium text-gray-700 group-hover:text-tomato">
            Arbitrum
          </p>
        </a>
        <a
          href="https://www.ora.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <Image
            className="transition-transform duration-300 group-hover:scale-110"
            src="/images/logos/ora-logo.png"
            alt="Ora Protocol"
            width={120}
            height={120}
          />
          <p className="mt-4 text-lg font-medium text-gray-700 group-hover:text-tomato">
            Ora Protocol
          </p>
        </a>
      </div>
    </div>
  );
};

export default Partners;
