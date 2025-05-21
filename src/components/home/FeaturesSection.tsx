import React from 'react';
import { Users as Horse, Mountain, Award, Users, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Authentic Kathiawadi Horses',
    description: 'Experience the majesty of purebred Kathiawadi horses, a breed renowned for their strength, grace, and noble heritage.',
    icon: <Horse size={32} />,
  },
  {
    title: 'Expert Training',
    description: 'Learn from certified instructors who blend international techniques with traditional Indian horsemanship.',
    icon: <Award size={32} />,
  },
  {
    title: 'Rich Heritage',
    description: 'Immerse yourself in the centuries-old traditions of Rajput horse riding and equestrian excellence.',
    icon: <Mountain size={32} />,
  },
  {
    title: 'Welcoming Community',
    description: 'Join our inclusive community of horse enthusiasts, where riders of all levels come together to share their passion.',
    icon: <Users size={32} />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading 
          title="Why Choose Halar Club"
          subtitle="Discover what makes our riding experience truly special"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="fade-in-section p-6 text-center rounded-lg border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-md"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 text-primary-500 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors text-sm font-medium"
              >
                View More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;