import React from 'react';
import { Shield, Cpu, Clock, Zap, Settings, HeartPulse } from 'lucide-react';

export function FeatureSection() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "DDoS protection and regular backups included with all plans"
    },
    {
      icon: Cpu,
      title: "High Performance",
      description: "Premium hardware with dedicated resources for optimal performance"
    },
    {
      icon: Clock,
      title: "24/7 Uptime",
      description: "99.9% uptime guarantee with constant monitoring"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "One-click installation for both Discord bots and Minecraft servers"
    },
    {
      icon: Settings,
      title: "Custom Panel",
      description: "Intuitive control panel for easy management"
    },
    {
      icon: HeartPulse,
      title: "Live Support",
      description: "24/7 technical support from our experienced team"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Premium Features for Your Hosting Needs
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Everything you need to run successful Discord bots and Minecraft servers
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-gray-800 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-white tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}