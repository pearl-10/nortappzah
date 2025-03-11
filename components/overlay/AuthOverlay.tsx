import React, { useState } from 'react';
import OverlayComponent from './OverlayComponent';

interface AuthOverlayProps {
  initialVisible?: boolean;
}

const AuthOverlay: React.FC<AuthOverlayProps> = ({ initialVisible = false }) => {
  const [isAuthVisible, setIsAuthVisible] = useState(initialVisible);

  const handleSignIn = () => {
    console.log('Signing in...');
    setIsAuthVisible(false);
  };

  const handleCloseAuthOverlay = () => {
    setIsAuthVisible(false);
  };

  return (
    <OverlayComponent
      isVisible={isAuthVisible}
      title="Sign In"
      description="Please sign in to continue."
      buttonText="Sign In"
      onButtonPress={handleSignIn}
      onClose={handleCloseAuthOverlay}
    />
  );
};

export default AuthOverlay;
