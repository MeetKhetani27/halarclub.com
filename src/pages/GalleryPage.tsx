import React, { useState, useCallback } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { X, ZoomIn } from 'lucide-react';

type ImageCategory = 'all' | 'horses' | 'events' | 'facilities' | 'training';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: ImageCategory;
}

const galleryImages: GalleryImage[] = [
  // Horses Category
  {
    id: 1,
    src: '/images/gallery/horse-riding-1.jpg',
    alt: 'Professional Horse Riding Training',
    category: 'horses'
  },
  {
    id: 2,
    src: '/images/gallery/horse-stable-1.jpg',
    alt: 'Modern Horse Stable Interior',
    category: 'facilities'
  },
  {
    id: 3,
    src: '/images/gallery/horse-show-1.jpg',
    alt: 'Annual Horse Show Competition',
    category: 'events'
  },
  {
    id: 4,
    src: '/images/gallery/horse-training-1.jpg',
    alt: 'Expert Horse Training Session',
    category: 'training'
  },
  {
    id: 5,
    src: '/images/gallery/horse-riding-2.jpg',
    alt: 'Advanced Horse Riding Techniques',
    category: 'horses'
  },
  {
    id: 6,
    src: '/images/gallery/horse-stable-2.jpg',
    alt: 'Spacious Outdoor Training Arena',
    category: 'facilities'
  },
  {
    id: 7,
    src: '/images/gallery/horse-show-2.jpg',
    alt: 'Horse Jumping Competition',
    category: 'events'
  },
  {
    id: 8,
    src: '/images/gallery/horse-training-2.jpg',
    alt: 'Young Rider Training Program',
    category: 'training'
  },
  {
    id: 9,
    src: '/images/gallery/horse-riding-3.jpg',
    alt: 'Sunset Trail Riding',
    category: 'horses'
  },
  {
    id: 10,
    src: '/images/gallery/horse-stable-3.jpg',
    alt: 'Premium Horse Care Facilities',
    category: 'facilities'
  },
  {
    id: 11,
    src: '/images/gallery/horse-show-3.jpg',
    alt: 'Traditional Horse Dance Performance',
    category: 'events'
  },
  {
    id: 12,
    src: '/images/gallery/horse-training-3.jpg',
    alt: 'Professional Dressage Training',
    category: 'training'
  }
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'horses', label: 'Horse Riding' },
  { id: 'events', label: 'Shows & Events' },
  { id: 'facilities', label: 'Our Facilities' },
  { id: 'training', label: 'Training Programs' },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ImageCategory>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = useCallback(() => {
    if (selectedCategory === 'all') return galleryImages;
    return galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <div className="relative h-[60vh] md:h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/4.1.png" 
            alt="Gallery Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Overlapping Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
              <p className="text-xl md:text-2xl opacity-90">
                Capturing moments of equestrian excellence
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Photo Gallery" 
            subtitle="Beautiful moments from Halar Club"
            center
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as ImageCategory)}
                className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredImages().map(image => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                    <p className="text-white/80 text-sm mt-1 capitalize">{image.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[85vh] object-contain mx-auto rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold text-xl">{selectedImage.alt}</h3>
                  <p className="text-white/80 mt-2 capitalize">{selectedImage.category}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default GalleryPage;