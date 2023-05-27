import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center bottom-0 h-[85px] border-t z-10 border-white gap-12">
      <Link href="#">
        <p className="uppercase text-sm tracking-[0.07em]">Join our discord</p>
      </Link>
      <div className="h-2 w-2 rotate-45 bg-gray-700 flex-shrink-0" />
      <Link href="#">
        <p className="uppercase text-sm tracking-[0.07em]">Privacy policy</p>
      </Link>
      <div className="h-2 w-2 rotate-45 bg-gray-700 flex-shrink-0" />
      <Link href="#">
        <p className="uppercase text-sm tracking-[0.07em]">Terms of service</p>
      </Link>
      <div className="h-2 w-2 rotate-45 bg-gray-700 flex-shrink-0" />
      <p className="uppercase text-sm tracking-[0.07em]">© 2023 V3RPG</p>
    </div>
  );
};

export default Footer;
