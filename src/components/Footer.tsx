import Link from "next/link";
import React, { Fragment } from "react";

const footerLinks = [
  {
    name: "Join our discord",
    href: "https://discord.gg/KSpPT6SU",
  },
  {
    name: "Privacy policy",
    href: "#",
  },
  {
    name: "Terms of service",
    href: "#",
  },
  {
    name: "© 2023 V3RPG",
    href: "#",
  },
];

const Footer = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center bottom-0 h-[85px] border-t z-10 border-white gap-12">
      {footerLinks.map((link, index) => (
        <Fragment key={link.name}>
          <Link href={link.href}>
            <p className="uppercase text-sm tracking-[0.07em] hover:underline underline-offset-4 transition-all duration-300">
              {link.name}
            </p>
          </Link>
          {index !== footerLinks.length - 1 && <div className="h-2 w-2 rotate-45 bg-gray-700 flex-shrink-0" />}
        </Fragment>
      ))}
    </div>
  );
};

export default Footer;
