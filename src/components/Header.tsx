"use client";

import Link from "next/link";
import React from "react";
import { DiscordLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";

const socialPlatforms = [
  {
    href: "https://discord.com/invite/36chp8DnzC",
    label: "Join v3RPG Community",
    icon: DiscordLogo,
    name: "Discord",
  },
  {
    href: "https://www.instagram.com/game.v3rpg/",
    label: "v3RPG on Instagram",
    icon: InstagramLogo,
    name: "Instagram",
  },
  {
    href: "https://twitter.com/v3rpg",
    label: "v3RPG Updates",
    icon: TwitterLogo,
    name: "Twitter",
  },
] as const;

const Header = () => {
  return (
    <header
      className="hidden md:flex w-full flex-col items-center justify-end text-base md:text-lg mt-12 md:mt-16"
      role="banner"
    >
      <nav
        className="w-full flex flex-row items-center justify-center md:justify-end gap-4 md:gap-10 md:mr-24"
        aria-label="Social media links"
      >
        {socialPlatforms.map(({ href, label, icon: Icon, name }) => (
          <Link
            key={name}
            href={href}
            className="hover:opacity-70 transition-opacity duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon className="w-10 h-10" aria-hidden="true" />
            <span className="sr-only">{label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
