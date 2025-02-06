const TermsAndConditions = () => {
    return (
      <div 
        className="min-h-screen bg-gray-900 px-4 py-16"
        itemScope 
        itemType="https://schema.org/WebPage"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            Terms and Conditions
          </h1>
          
          <div className="bg-red-200 rounded-lg p-8 shadow-xl space-y-8">
            <section>
              <h2 className="text-2xl text-tomato mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300">
                By accessing and playing v3RPG, you agree to be bound by these Terms and Conditions. 
                Our AI-powered gaming platform provides text adventure experiences, and by using our services, 
                you accept all terms regarding gameplay, rewards, and community interaction.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl text-tomato mb-4">2. Account Registration</h2>
              <div className="space-y-3 text-gray-300">
                <p>Users must:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Create an account to access game features</li>
                  <li>Provide accurate registration information</li>
                  <li>Maintain account security</li>
                  <li>Be at least 13 years of age</li>
                </ul>
              </div>
            </section>
  
            <section>
              <h2 className="text-2xl text-tomato mb-4">3. AI Gaming Rules</h2>
              <div className="space-y-3 text-gray-300">
                <p>When using our AI-powered features:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Respect the AI moderation system</li>
                  <li>Do not exploit AI mechanisms</li>
                  <li>Accept AI judge decisions in competitions</li>
                  <li>Follow fair play guidelines</li>
                </ul>
              </div>
            </section>
  
            <section>
              <h2 className="text-2xl text-tomato mb-4">4. Blockchain Rewards</h2>
              <div className="space-y-3 text-gray-300">
                <p>Regarding in-game rewards:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Rewards are subject to validation</li>
                  <li>Users are responsible for wallet security</li>
                  <li>Transactions are final once confirmed</li>
                  <li>Rewards may vary by region</li>
                </ul>
              </div>
            </section>
  
            <section>
              <h2 className="text-2xl text-tomato mb-4">5. User Content</h2>
              <div className="space-y-3 text-gray-300">
                <p>When creating content:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Maintain appropriate content standards</li>
                  <li>Respect intellectual property rights</li>
                  <li>Accept content moderation decisions</li>
                  <li>Grant us license to use your content</li>
                </ul>
              </div>
            </section>
  
            <section>
              <h2 className="text-2xl text-tomato mb-4">6. Community Guidelines</h2>
              <div className="space-y-3 text-gray-300">
                <p>Players must:</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>Treat others with respect</li>
                  <li>Not engage in harmful behavior</li>
                  <li>Report violations</li>
                  <li>Follow moderator instructions</li>
                </ul>
              </div>
            </section>
  
            <section>
              <h2 className="text-2xl text-tomato mb-4">7. Termination</h2>
              <p className="text-gray-300">
                We reserve the right to suspend or terminate accounts that violate these terms, 
                with or without notice. Serious violations may result in permanent account closure.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl text-tomato mb-4">8. Changes to Terms</h2>
              <p className="text-gray-300">
                We may update these terms at any time. Continued use of v3RPG after changes 
                constitutes acceptance of new terms. Major changes will be notified via email.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl text-tomato mb-4">9. Contact</h2>
              <p className="text-gray-300">
                For questions about these terms, contact us at{' '}
                <a 
                  href="mailto:legal@v3rpg.com"
                  className="text-tomato hover:underline"
                >
                  dusan@v3rpg.com
                </a>
              </p>
            </section>
  
            <section className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
  
          {/* Hidden SEO content */}
          <meta itemProp="name" content="v3RPG Terms and Conditions - AI Gaming Platform Rules" />
          <meta itemProp="description" content="Terms and conditions for v3RPG's AI-powered gaming platform, including gameplay rules, rewards system, and community guidelines." />
          <meta itemProp="dateModified" content={new Date().toISOString()} />
        </div>
      </div>
    );
  };
  
  export default TermsAndConditions;