"use client";

import Link from "next/link";
import React from "react";
import { DiscordLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-end text-base md:text-lg mt-12 md:mt-16">
      <div className="w-full flex flex-row items-center justify-center md:justify-end gap-4 md:gap-10 md:mr-24">
        <Link
          href="https://discord.com/invite/36chp8DnzC"
          className="hover:opacity-70"
          target="_blank"
        >
          <DiscordLogo className="w-10 h-10" />
        </Link>
        <Link
          href="https://www.instagram.com/game.v3rpg/"
          className="hover:opacity-70"
          target="_blank"
        >
          <InstagramLogo className="w-10 h-10" />
        </Link>
        <Link
          href="https://twitter.com/v3rpg"
          className="hover:opacity-70"
          target="_blank"
        >
          <TwitterLogo className="w-10 h-10" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
