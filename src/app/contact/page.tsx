import React from "react";

const Contact = () => {
    return (
      <div 
        className="min-h-screen bg-gray-900 px-4 py-16"
        itemScope 
        itemType="https://schema.org/ContactPage"
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            Contact Our AI Gaming Team
          </h1>
          
          <div className="bg-red-200 rounded-lg p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl text-tomato mb-4">Get in Touch</h2>
                <p className="text-gray-300">
                  Have questions about our AI-powered RPG? We are here to help!
                </p>
              </div>
  
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-2">Discord Community</h3>
                  <p className="text-gray-300">
                    Join our active Discord community for quick responses and gaming discussions:
                    <a 
                      href="https://discord.com/invite/36chp8DnzC"
                      className="text-tomato hover:underline ml-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Discord
                    </a>
                  </p>
                </div>
  
                <div>
                  <h3 className="text-white font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-300">
                    For business inquiries and support:
                    <a 
                      href="mailto:dusan@v3rpg.com"
                      className="text-tomato hover:underline ml-2"
                    >
                      dusan@v3rpg.com
                    </a>
                  </p>
                </div>
  
                <div>
                  <h3 className="text-white font-semibold mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://twitter.com/v3rpg"
                      className="text-gray-300 hover:text-tomato"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                    <a 
                      href="https://www.instagram.com/game.v3rpg/"
                      className="text-gray-300 hover:text-tomato"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Hidden SEO content */}
          <meta itemProp="name" content="Contact v3RPG - AI Gaming Support" />
          <meta itemProp="description" content="Get in touch with the v3RPG team for AI gaming support, feedback, and community discussions." />
        </div>
      </div>
    );
  };
  

export default Contact;
