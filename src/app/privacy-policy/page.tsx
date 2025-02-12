import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <article
      className="bg-gray-[#171716] text-[#FAFAFA] mb-8"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div className="container mx-auto px-4 py-8 bg-white/10 mt-8 rounded-lg border-white/30 border-2">
        <header>
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">Last updated: March 15, 2024</p>
        </header>

        <div className="space-y-8" itemProp="mainContentOfPage">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Information Collection
            </h2>
            <p className="mb-4">
              We collect information necessary to provide our gaming services
              and enhance user experience:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (username, email)</li>
              <li>Game progress and achievements</li>
              <li>Technical data (device info, IP address)</li>
              <li>Usage statistics and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Usage</h2>
            <p className="mb-4">Your information helps us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve gaming services</li>
              <li>Maintain leaderboards and achievements</li>
              <li>Ensure fair play and security</li>
              <li>Communicate updates and support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Protection</h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect your
              data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of sensitive information</li>
              <li>Regular security audits</li>
              <li>Access controls and monitoring</li>
              <li>Secure data storage practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">User Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request data correction</li>
              <li>Delete your account</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
            <p className="mb-4">
              For privacy-related inquiries, contact us at:{" "}
              <Link
                href="mailto:privacy@v3rpg.com"
                className="text-tomato hover:opacity-80 transition-opacity"
              >
                privacy@v3rpg.com
              </Link>
            </p>
          </section>
        </div>

        <footer className="mt-8 pt-4 border-t border-white/30">
          <p className="text-sm">
            This privacy policy is subject to updates. Check back regularly for
            changes.
          </p>
        </footer>

        <meta itemProp="dateModified" content="2024-03-15" />
        <meta itemProp="author" content="v3RPG" />
      </div>
    </article>
  );
};

export default PrivacyPolicy;

export const metadata = {
  title: "Privacy Policy | v3RPG",
  description:
    "Learn how v3RPG collects, uses, and protects your personal information while using our gaming platform.",
  openGraph: {
    title: "v3RPG Privacy Policy",
    description:
      "Our commitment to protecting your privacy and personal information.",
  },
};
