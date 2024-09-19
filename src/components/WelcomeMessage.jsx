// WelcomeMessage.js
import React, { useState, useEffect } from 'react';

const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    // You can set a flag in localStorage or global state here if you want to persist the state
    // localStorage.setItem('hasSeenWelcomeMessage', 'true');
  };

  useEffect(() => {
    // Optionally, check localStorage or a global state to see if the message should be shown
    // const hasSeenMessage = localStorage.getItem('hasSeenWelcomeMessage');
    // if (hasSeenMessage) {
    //   setIsVisible(false);
    // }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-900 bg-opacity-80 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
        <img
          src="https://via.placeholder.com/150?text=Bird+Logo"
          alt="Bird Logo"
          className="mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-4">Welcome to Feathered Freelance!</h2>
        <p className="mb-4 text-lg">
          🐦 Hi there, future freelancer! At Feathered Freelance, you can spread your wings and
          showcase your unique services to a flock of potential clients. Whether you're offering
          personal services or creative gigs, our site is your platform to shine.
        </p>
        <p className="mb-4 text-lg">
          🌟 Customers can easily book your services with our built-in calendar and booking system.
          So, why wait? Set your dates, let your talent fly high, and connect with a vibrant community!
        </p>
        <button
          onClick={handleClose}
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Enter the Nest
        </button>
      </div>
    </div>
  );
};

export default WelcomeMessage;
