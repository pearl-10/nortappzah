import React, { ReactNode } from 'react';

interface OverlayProps {
  isVisible?: boolean;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonPress?: () => void;
  children?: ReactNode;
  onClose?: () => void;
}

const OverlayComponent: React.FC<OverlayProps> = ({
  isVisible = false,
  title = "",
  description = "Please sign in to continue.",
  buttonText = "Sign In",
  onButtonPress = () => {},
  children,
  onClose
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        {children}
        <button
          onClick={onButtonPress}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default OverlayComponent;
