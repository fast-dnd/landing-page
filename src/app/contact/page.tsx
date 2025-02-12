import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      className="bg-gray-[#171716] text-[#FAFAFA] mb-8"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="container mx-auto px-4 py-8 bg-white/10 mt-8 rounded-lg border-white/30 border-2">
        <h1 className="text-3xl font-bold mb-6">Contact Support</h1>

        <div
          className="space-y-6"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-3">Primary Contact</h2>
            <p className="mb-2">
              For general inquiries and support, please email:{" "}
              <Link
                href="mailto:support@v3rpg.com"
                className="text-tomato hover:opacity-80 transition-opacity"
                itemProp="email"
              >
                support@v3rpg.com
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Community Support</h2>
            <p className="mb-2">
              Join our Discord community for real-time assistance:{" "}
              <Link
                href="https://discord.com/invite/36chp8DnzC"
                className="text-tomato hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
                itemProp="sameAs"
              >
                v3RPG Discord
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Business Inquiries</h2>
            <p className="mb-2">
              For partnerships and business matters:{" "}
              <Link
                href="mailto:business@v3rpg.com"
                className="text-tomato hover:opacity-80 transition-opacity"
                itemProp="email"
              >
                business@v3rpg.com
              </Link>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Office Address</h2>
            <address
              className="not-italic"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">Žorža Klemansoa 39</span>
              <br />
              <span itemProp="addressLocality">Belgrade</span>,{" "}
              <span itemProp="addressCountry">Serbia</span>
              <br />
              <span itemProp="postalCode">11000</span>
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Response Time</h2>
            <p className="mb-2">
              We aim to respond to all inquiries within 24 hours during business
              days.
            </p>
          </div>
        </div>

        <meta itemProp="name" content="v3RPG Support" />
        <meta
          itemProp="description"
          content="Contact v3RPG support team for assistance, business inquiries, or community engagement."
        />
      </div>
    </section>
  );
};

export default Contact;

export const metadata = {
  title: "Contact Support | v3RPG",
  description:
    "Get in touch with v3RPG support team for assistance with gameplay, technical issues, or business inquiries.",
  openGraph: {
    title: "Contact v3RPG Support",
    description: "Reach out to our support team for assistance and inquiries.",
  },
};
