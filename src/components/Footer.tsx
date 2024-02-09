"use client";

import Link from "next/link";
import React, { Fragment } from "react";

const footerLinks = [
  {
    name: "Join our discord",
    href: "https://discord.com/invite/36chp8DnzC",
  },
  {
    name: "Privacy policy",
    href: "/privacy-policy",
  },
  // {
  //   name: "Terms of service",
  //   href: "#",
  // },
  // {
  //   name: "© 2023 V3RPG",
  //   href: "#",
  // },
];

const Footer = () => {
  return (
    <div className="mt-12 md:mt-80 w-full flex flex-col md:flex-row justify-center items-center bottom-0 md:h-[85px] border-t z-10 border-white/70 gap-4 md:gap-12 py-4">
      {footerLinks.map((link, index) => (
        <Fragment key={link.name}>
          <Link
            href={link.href}
            className="uppercase text-sm tracking-[0.07em] hover:underline underline-offset-4 transition-all duration-300"
            target="_blank"
          >
            {link.name}
          </Link>
          {index !== footerLinks.length - 1 && (
            <div className="hidden md:block h-2 w-2 rotate-45 bg-gray-700 flex-shrink-0" />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Footer;
