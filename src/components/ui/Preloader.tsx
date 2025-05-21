import React, { useEffect, useState } from 'react';
import './preloader.css';

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const img = new Image();
        img.src = '/LOGO.png';
        await img.decode();
        
        // Start fade out after image loads
        const timer = setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setIsLoading(false);
            onComplete?.();
          }, 1000); // Match this with CSS transition duration
        }, 1500); // Show preloader for at least 1.5s

        return () => clearTimeout(timer);
      } catch (error) {
        console.error('Failed to load logo:', error);
        setIsLoading(false);
      }
    };

    loadImage();
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
