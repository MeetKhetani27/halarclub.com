import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    quote: "My family's safari experience with Halar Club was nothing short of magical. The Kathiawadi horses were gentle yet spirited, and the guides showed us parts of Gujarat we never knew existed. It was a perfect blend of adventure and cultural immersion.",
    name: "Aditya Sharma",
    title: "Family Safari Participant",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "As someone who's ridden horses across the world, I can confidently say that the training at Halar Club is world-class. The focus on developing a genuine bond with these magnificent Kathiawadi horses sets them apart from any other riding school I've experienced.",
    name: "Priya Patel",
    title: "Professional Equestrian",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "Watching my daughter grow in confidence through Halar Club's young rider program has been incredible. The instructors' patience and expertise have transformed her from a nervous beginner to a skilled young equestrian who deeply respects these beautiful animals.",
    name: "Rajesh Mehta",
    title: "Parent of Young Rider",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="section bg-primary-50">
      <div className="container">
        <SectionHeading 
          title="What Our Riders Say" 
          subtitle="Experiences shared by members of our community"
          center
        />
        
        <div className="relative max-w-4xl mx-auto fade-in-section">
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="mb-6 text-primary-500">
              <Quote size={48} />
            </div>
            <blockquote className="text-xl italic mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex items-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <p className="font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 -left-4 -translate-y-1/2">
            <button 
              onClick={goToPrevious}
              className="bg-white rounded-full p-2 shadow-md hover:bg-primary-50 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-primary-500" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2">
            <button 
              onClick={goToNext}
              className="bg-white rounded-full p-2 shadow-md hover:bg-primary-50 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-primary-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;