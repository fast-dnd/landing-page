"use client";

import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    name: "Community",
    href: "https://discord.com/invite/36chp8DnzC",
    label: "Join v3RPG Discord Community",
    category: "social",
  },
  {
    name: "Privacy",
    href: "/privacy-policy",
    label: "Privacy Policy",
    category: "legal",
  },
  {
    name: "Terms",
    href: "/terms",
    label: "Terms of Service",
    category: "legal",
  },
  {
    name: "Contact",
    href: "/contact",
    label: "Contact Support",
    category: "support",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t border-white/70 mt-16"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="py-8">
          <nav
            className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8"
            aria-label="Footer Navigation"
          >
            {footerLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm tracking-wider hover:text-tomato transition-colors duration-200"
                  target={link.category === "social" ? "_blank" : undefined}
                  rel={
                    link.category === "social"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={link.label}
                  data-category={link.category}
                >
                  {link.name}
                </Link>
                {index !== footerLinks.length - 1 && (
                  <span
                    className="hidden md:block h-1.5 w-1.5 rotate-45 bg-gray-700"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p itemProp="copyrightNotice">
              © {currentYear} v3RPG - Next-Gen Fantasy Gaming
            </p>
            <p className="mt-2" itemProp="description">
              Strategic RPG Adventures with Advanced AI
            </p>
          </div>

          <meta itemProp="name" content="v3RPG" />
          <meta itemProp="url" content="https://v3rpg.com" />
          <meta
            itemProp="keywords"
            content="RPG, Fantasy Gaming, Strategic Adventures"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
