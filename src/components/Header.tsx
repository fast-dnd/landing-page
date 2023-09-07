"use client";

import Link from "next/link";
import React from "react";
import { Slide } from "react-awesome-reveal";

const Header = () => {
  return (
    <Slide direction="right" triggerOnce>
      <div className="w-full flex flex-col items-center justify-end text-lg mt-16">
        <div className="w-full flex flex-row items-center justify-end gap-10 mr-24">
          <Link
            href="#"
            className="relative tracking-[0.07em] font-semibold hover:underline underline-offset-4 transition-all  duration-300"
          >
            THE BASICS
          </Link>
          <div className="relative bg-white w-[5.71px] h-[5.71px] [transform:_rotate(-45deg)]" />
          <Link
            href="https://discord.gg/KSpPT6SU"
            className="relative tracking-[0.07em] font-semibold hover:underline underline-offset-4 transition-all duration-300"
          >
            JOIN US ON DISCORD
          </Link>
        </div>
      </div>
    </Slide>
  );
};

export default Header;
