// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main
      className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-16"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <article className="max-w-2xl mx-auto text-center">
        <header className="mb-8">
          <Image
            src="/images/logo.png"
            alt="v3RPG Logo"
            width={200}
            height={100}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            The quest you seek lies elsewhere. Choose a new path below to
            continue your adventure.
          </p>
        </header>

        <nav
          className="bg-gray-800 rounded-lg p-8 shadow-xl"
          aria-label="Navigation options"
        >
          <h2 className="text-2xl text-tomato mb-6">Available Quests</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/"
              className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              aria-label="Return to homepage"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                <span aria-hidden="true">🏰</span> Main Hall
              </h3>
              <p className="text-gray-300">Begin your journey anew</p>
            </Link>

            <Link
              href="https://play.v3rpg.com"
              className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              aria-label="Start playing v3RPG"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                <span aria-hidden="true">🎮</span> Play Now
              </h3>
              <p className="text-gray-300">Start your AI adventure</p>
            </Link>

            <Link
              href="https://discord.com/invite/36chp8DnzC"
              className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord community"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                <span aria-hidden="true">💬</span> Community
              </h3>
              <p className="text-gray-300">Join fellow adventurers</p>
            </Link>

            <Link
              href="/contact"
              className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              aria-label="Contact support"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                <span aria-hidden="true">📫</span> Support
              </h3>
              <p className="text-gray-300">Get assistance</p>
            </Link>
          </div>
        </nav>
      </article>
    </main>
  );
}

export const metadata = {
  title: "Page Not Found",
  description:
    "Choose a new path to continue your adventure in our AI-powered fantasy world.",
  robots: {
    index: false,
    follow: true,
  },
};
