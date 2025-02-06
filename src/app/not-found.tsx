// app/not-found.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div 
      className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-16"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="v3RPG Logo - AI Text Adventure Game"
            width={200}
            height={100}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            404 - Quest Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Looks like this adventure path leads nowhere! 
            But do not worry, there are plenty of other quests to explore.
          </p>
        </div>

        {/* Helpful Links Section */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl mb-8">
          <h2 className="text-2xl text-tomato mb-6">
            Continue Your Adventure
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/"
              className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                🏰 Main Hall
              </h3>
              <p className="text-gray-300">
                Return to the homepage and start a new quest
              </p>
            </Link>

            <Link 
              href="https://play.v3rpg.com"
              className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                🎮 Play Now
              </h3>
              <p className="text-gray-300">
                Jump straight into AI-powered adventures
              </p>
            </Link>

            <Link 
              href="https://discord.com/invite/36chp8DnzC"
              className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                💬 Join Discord
              </h3>
              <p className="text-gray-300">
                Connect with other adventurers
              </p>
            </Link>

            <Link 
              href="/contact"
              className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                📫 Need Help?
              </h3>
              <p className="text-gray-300">
                Contact our support team
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
    title: 'Page Not Found - v3RPG AI Gaming Platform',
    description: 'Sorry, the page you are looking for does not exist. Explore our AI-powered text adventure game instead!',
  }