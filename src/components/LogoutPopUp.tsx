// LogoutPopup.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import {LogoutPopupProps} from '../utils/types';


const LogoutPopup: React.FC<LogoutPopupProps> = ({ onConfirm, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm border border-gray-300 relative">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-5">Log Out</h1>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 rounded-full bg-red-700 text-white cursor-pointer transition duration-200"
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <p className="font-semibold text-center text-gray-800 mb-5">
          Are you sure you want to log out?
        </p>

        <div className="flex w-full justify-center space-x-4">
          <button
            onClick={onConfirm}
            className="w-full py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-md hover:from-red-600 hover:to-red-800 transition duration-200"
          >
            yes
          </button>
          <button
            onClick={onClose}
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default LogoutPopup;
