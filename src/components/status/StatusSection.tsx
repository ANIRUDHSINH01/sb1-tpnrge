import React from 'react';
import { Activity, Server, Users } from 'lucide-react';

export function StatusSection() {
  const stats = [
    {
      icon: Server,
      value: "99.9%",
      label: "Uptime",
      description: "30-day average"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Active Users",
      description: "Trusted by thousands"
    },
    {
      icon: Activity,
      value: "<20ms",
      label: "Average Latency",
      description: "Lightning fast response"
    }
  ];

  return (
    <section id="status" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Real-time System Status
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Monitor our system performance and reliability
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-gray-800 rounded-lg p-8 text-center">
                  <div className="flex justify-center">
                    <Icon className="h-12 w-12 text-indigo-500" />
                  </div>
                  <p className="mt-4 text-4xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xl font-medium text-indigo-400">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-gray-400">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Service Status</h3>
            <div className="space-y-4">
              {[
                { name: "Discord Bot API", status: "Operational" },
                { name: "Minecraft Servers", status: "Operational" },
                { name: "Control Panel", status: "Operational" },
                { name: "Customer Dashboard", status: "Operational" }
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-300">{service.name}</span>
                  <span className="flex items-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></span>
                    <span className="text-green-400">{service.status}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}