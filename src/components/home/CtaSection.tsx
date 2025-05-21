import React from 'react';
import Button from '../ui/Button';

const CtaSection = () => {
  return (
    <section className="section bg-primary-600 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Legacy of Kathiawadi Horse Riding?
          </h2>
          <p className="text-lg mb-8">
            Join Halar Club today and embark on a journey that connects you with India's rich equestrian heritage through training, safaris, and a community of passionate riders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Become a Member
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-primary-500">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;