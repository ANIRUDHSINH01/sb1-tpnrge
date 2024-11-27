import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { FeatureSection } from './components/features/FeatureSection';
import { PricingSection } from './components/pricing/PricingSection';
import { StatusSection } from './components/status/StatusSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <FeatureSection />
      <PricingSection />
      <StatusSection />
    </div>
  );
}

export default App;