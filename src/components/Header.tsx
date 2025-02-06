"use client";

import Link from "next/link";
import React from "react";
import { DiscordLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";

const Header = () => {
  const socialLinks = [
    {
      href: "https://discord.com/invite/36chp8DnzC",
      label: "Join our AI gaming community on Discord",
      icon: DiscordLogo,
      name: "Discord"
    },
    {
      href: "https://www.instagram.com/game.v3rpg/",
      label: "Follow our AI RPG adventures on Instagram",
      icon: InstagramLogo,
      name: "Instagram"
    },
    {
      href: "https://twitter.com/v3rpg",
      label: "Get latest AI game updates on Twitter",
      icon: TwitterLogo,
      name: "Twitter"
    }
  ];

  return (
    <header
      className="hidden md:flex w-full flex-col items-center justify-end text-base md:text-lg mt-12 md:mt-16"
      role="navigation"
      aria-label="Main navigation and social media links"
    >
      <nav className="w-full flex flex-row items-center justify-center md:justify-end gap-4 md:gap-10 md:mr-24">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:opacity-70 social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            data-platform={link.name.toLowerCase()}
          >
            <link.icon 
              className="w-10 h-10" 
              aria-hidden="true"
              role="img"
            />
            <span className="sr-only">
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
