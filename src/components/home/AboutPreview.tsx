import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const AboutPreview = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <SectionHeading 
              title="The Halar Legacy" 
              subtitle="A story of passion, tradition, and excellence in horse riding"
            />
            <p className="mb-6">
              Founded by Mr. Shivduttsinh K Jadeja, Halar Club represents the culmination of a lifelong passion for horses, especially the magnificent Kathiawadi breed. Born into a noble Rajput family with deep equestrian traditions, Mr. Jadeja has dedicated his life to preserving and promoting India's rich horse riding heritage.
            </p>
            <p className="mb-8">
              After receiving professional training in Dundlod and earning certification in equine judging, he established Halar Club to share his expertise and love for these majestic animals with riders of all levels.
            </p>
            <Button to="/about" variant="outline" className="flex items-center">
              Read Our Story <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          <div className="relative fade-in-section">
            <div className="aspect-w-16 aspect-h-12 md:aspect-h-9">
              <img 
                src="/2.png"
                alt="Halar Club founder with horses" 
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-6 md:-left-6 bg-primary-500 text-white p-4 md:p-6 rounded-lg shadow-lg max-w-[280px] md:max-w-xs">
              <p className="italic text-sm md:text-base">
                "Our horses are not just animals, they are our heritage, our pride, and our companions in this beautiful journey."
              </p>
              <p className="mt-2 font-semibold text-sm md:text-base">- Shivduttsinh K Jadeja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;