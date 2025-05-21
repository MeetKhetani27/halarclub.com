import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const images = [
  {
    src: "https://images.pexels.com/photos/5112309/pexels-photo-5112309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Horse riding training session"
  },
  {
    src: "https://images.pexels.com/photos/7232898/pexels-photo-7232898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Kathiawadi horse portrait"
  },
  {
    src: "https://images.pexels.com/photos/10845109/pexels-photo-10845109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Horse safari through scenic landscape"
  },
  {
    src: "https://images.pexels.com/photos/2123375/pexels-photo-2123375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Young rider learning horsemanship"
  },
  {
    src: "https://images.pexels.com/photos/5089176/pexels-photo-5089176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Group riding expedition"
  },
  {
    src: "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Traditional horse ceremony"
  }
];

const GalleryPreview = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionHeading 
          title="Moments Captured at Halar Club" 
          subtitle="Glimpses of our horses, riders, and adventures"
          center
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {images.map((image, index) => (
            <div key={index} className="fade-in-section overflow-hidden rounded-lg shadow-md aspect-w-4 aspect-h-3">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button to="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;