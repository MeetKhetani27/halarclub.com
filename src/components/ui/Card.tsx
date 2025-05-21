import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  link,
  children,
  className = '',
}) => {
  const cardContent = (
    <>
      {image && (
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>
    </>
  );

  if (link) {
    return (
      <a href={link} className={`card block ${className}`}>
        {cardContent}
      </a>
    );
  }

  return <div className={`card ${className}`}>{cardContent}</div>;
};

export default Card;