import React from 'react';
import { Check } from 'lucide-react';

export function PricingSection() {
  const discordPlans = [
    {
      name: "Starter Bot",
      price: "9.99",
      features: [
        "24/7 Uptime",
        "Basic Commands",
        "Moderation Tools",
        "1GB RAM",
        "Community Support"
      ]
    },
    {
      name: "Pro Bot",
      price: "24.99",
      features: [
        "Everything in Starter",
        "Music Commands",
        "Custom Commands",
        "2GB RAM",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise Bot",
      price: "49.99",
      features: [
        "Everything in Pro",
        "Unlimited Commands",
        "Voice Features",
        "4GB RAM",
        "24/7 Premium Support"
      ]
    }
  ];

  const minecraftPlans = [
    {
      name: "Basic Server",
      price: "14.99",
      features: [
        "2GB RAM",
        "Basic Plugins",
        "10 Player Slots",
        "Daily Backups",
        "Community Support"
      ]
    },
    {
      name: "Premium Server",
      price: "29.99",
      features: [
        "4GB RAM",
        "Premium Plugins",
        "25 Player Slots",
        "Hourly Backups",
        "Priority Support"
      ]
    },
    {
      name: "Ultimate Server",
      price: "59.99",
      features: [
        "8GB RAM",
        "All Plugins",
        "Unlimited Players",
        "Real-time Backups",
        "24/7 Premium Support"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Discord Bot Hosting</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {discordPlans.map((plan, index) => (
              <div key={index} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-4">
                    <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-indigo-500" />
                        <span className="ml-3 text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-150">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Minecraft Server Hosting</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {minecraftPlans.map((plan, index) => (
              <div key={index} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-4">
                    <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-indigo-500" />
                        <span className="ml-3 text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-150">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gray-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white text-center">Bundle & Save</h3>
          <p className="text-center text-gray-400 mt-4">
            Get 20% off when you bundle Discord bot and Minecraft server hosting together!
          </p>
          <div className="text-center mt-8">
            <button className="bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 transition duration-150">
              View Bundle Deals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}