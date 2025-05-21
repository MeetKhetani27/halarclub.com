import React, { useEffect, useState } from 'react';
import './preloader.css';

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after a delay
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
      // Remove preloader after fade animation
      const removeTimer = setTimeout(() => {
        setIsLoading(false);
        onComplete?.();
      }, 1000); // Match this with CSS transition duration

      return () => clearTimeout(removeTimer);
    }, 1500); // Show preloader for at least 1.5s

    return () => clearTimeout(fadeOutTimer);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="logo-container">
        <img 
          src="/LOGO.png" 
          alt="Halar Club Logo" 
          className="logo-animation"
        />
      </div>
    </div>
  );
};

export default Preloader;
