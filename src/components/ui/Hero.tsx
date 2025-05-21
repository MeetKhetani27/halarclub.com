import React from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  image: string;
}

const Hero = ({ title, subtitle, buttonText, buttonLink, image }: HeroProps) => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img 
          src={image}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 h-full flex items-start pt-56">
        <div className="max-w-3xl fade-in-section pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn text-white">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 animate-fadeIn animation-delay-200">
            {subtitle}
          </p>
          {buttonText && buttonLink && (
            <Button to={buttonLink} className="animate-fadeIn animation-delay-400">
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;