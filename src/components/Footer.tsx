"use client";

import Link from "next/link";
import React, { Fragment } from "react";

const footerLinks = [
  {
    name: "Join our Discord Community",
    href: "https://discord.com/invite/36chp8DnzC",
    label: "Join our AI Gaming community on Discord",
    icon: "discord",
    category: "social"
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
    label: "Read our Privacy Policy",
    category: "legal"
  },
  {
    name: "Terms of Service",
    href: "/terms",
    label: "View Terms of Service",
    category: "legal"
  },
  {
    name: "Contact Us",
    href: "/contact",
    label: "Get in touch with our AI Gaming team",
    category: "support"
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full border-t border-white/70 z-10"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-8 md:py-12">
          <nav 
            className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12"
            aria-label="Footer Navigation"
          >
            {footerLinks.map((link, index) => (
              <Fragment key={link.name}>
                <Link
                  href={link.href}
                  className="uppercase text-sm tracking-[0.07em] hover:underline underline-offset-4 transition-all duration-300"
                  target={link.category === 'social' ? "_blank" : undefined}
                  rel={link.category === 'social' ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  data-category={link.category}
                >
                  {link.name}
                </Link>
                {index !== footerLinks.length - 1 && (
                  <div 
                    className="hidden md:block h-2 w-2 rotate-45 bg-gray-700 flex-shrink-0" 
                    aria-hidden="true"
                  />
                )}
              </Fragment>
            ))}
          </nav>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p>
              <span itemProp="copyrightYear">{currentYear}</span> ©{" "}
              <span itemProp="copyrightHolder">v3RPG</span> - AI-Powered Text Adventure Gaming
            </p>
            <p className="mt-2">
              Experience next-gen D&D-style gameplay with AI-driven storytelling
            </p>
          </div>

          {/* Hidden SEO content */}
          <div className="hidden" aria-hidden="true" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="v3RPG" />
            <meta itemProp="description" content="AI-powered text adventure gaming platform featuring D&D-style gameplay and blockchain rewards" />
            <meta itemProp="url" content="https://v3rpg.com" />
            <link itemProp="sameAs" href="https://discord.com/invite/36chp8DnzC" />
            <meta itemProp="keywords" content="AI RPG, Text Adventure, D&D Gaming, AI Storytelling, Blockchain Gaming" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
