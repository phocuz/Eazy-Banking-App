import React from 'react';

import card from "../assets/icon-online.svg"
import budgeting from "../assets/icon-budgeting.svg"
import onboarding from "../assets/icon-onboarding.svg"
import openApi from "../assets/icon-api.svg"

const features = [
  {
    icon: card,
    title: "Online Banking",
    description: "Our modern web and mobile application allow you to keep track of your finances wherever you are in the world"
  },
  {
    icon: budgeting,
    title: "Simple Budgeting",
    description: "See exactly where your money goes each month. Receive notifications when you're close to hitting limits"
  },
  {
    icon: onboarding,
    title: "Fast Onboarding",
    description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away"
  },
  {
    icon: openApi,
    title: "Open API",
    description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier"
  }
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center sm:items-start mb-12">
    <img 
      src={icon} 
      alt={`${title} icon`} 
      className="w-16 h-16 mb-8"
    />
    <h3 className="text-2xl sm:text-3xl text-customDarkBlue mb-6">
      {title}
    </h3>
    <p className="text-lg text-gray-400 text-center sm:text-left leading-relaxed max-w-md">
      {description}
    </p>
  </div>
);

const BlogSection = () => {
  return (
    <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="mb-12 text-center sm:text-left">
        <h2 className="text-3xl sm:text-5xl text-customDarkBlue font-medium mb-6">
          Why choose Easybank?
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
          We leverage Open Banking to turn your bank account into your financial hub. 
          Control your finances like never before.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;