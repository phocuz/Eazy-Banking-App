import React from 'react';
import { FaLock, FaMoneyBillAlt, FaUserShield } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">About Our Banking App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <FaLock className="h-12 w-12 text-customDarkBlue mb-4" />
          <h2 className="text-xl font-bold mb-2">Secure Banking</h2>
          <p className="text-gray-600 text-center">
            Our app uses industry-leading security measures to protect your financial information.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaMoneyBillAlt className="h-12 w-12 text-customDarkBlue mb-4" />
          <h2 className="text-xl font-bold mb-2">Easy Transactions</h2>
          <p className="text-gray-600 text-center">
            Seamlessly manage your money with our intuitive and user-friendly interface.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaUserShield className="h-12 w-12 text-customDarkBlue mb-4" />
          <h2 className="text-xl font-bold mb-2">Trusted by Millions</h2>
          <p className="text-gray-600 text-center">
            Our banking app is trusted by millions of customers worldwide for its reliability and security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;