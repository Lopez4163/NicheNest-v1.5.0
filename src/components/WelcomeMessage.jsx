// OverlayModal.js
import React, { useState, useEffect } from 'react';

const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">Welcome to Our Site!</h2>
        <p className="mb-4">This site is designed to help you with [brief explanation of the site's purpose].</p>
        <button
          onClick={handleClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Enter Page
        </button>
      </div>
    </div>
  );
};
}

export default WelcomeMessage;
