import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-lg mt-[74px]">
      <div className="flex flex-row items-center justify-center max-w-md gap-10">
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
  );
};

export default Header;
