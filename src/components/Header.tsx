"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-end text-base md:text-lg mt-12 md:mt-16">
      <div className="w-full flex flex-row items-center justify-center md:justify-end gap-4 md:gap-10 md:mr-24">
        <Link
          href="#"
          className="relative tracking-[0.07em] font-semibold hover:underline underline-offset-4 transition-all  duration-300"
          target="_blank"
        >
          THE BASICS
        </Link>
        <div className="relative bg-white w-[5.71px] h-[5.71px] [transform:_rotate(-45deg)]" />
        <Link
          href="https://discord.com/invite/36chp8DnzC"
          className="relative tracking-[0.07em] font-semibold hover:underline underline-offset-4 transition-all duration-300"
          target="_blank"
        >
          JOIN US ON DISCORD
        </Link>
      </div>
    </div>
  );
};

export default Header;
