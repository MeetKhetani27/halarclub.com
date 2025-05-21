import React from 'react';
import Hero from '../components/ui/Hero';
import SectionHeading from '../components/ui/SectionHeading';
import { Award, Users, Book, Compass, Mountain, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Hero
        title="Our Legacy"
        subtitle="A Journey of Passion, Heritage, and Excellence in Horse Riding"
        image="/1.png"
      />
      
      {/* Founder's Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section space-y-6">
              <SectionHeading 
                title="Mr. Shivduttsinh K Jadeja" 
                subtitle="Founder, Halar Club"
              />
              <div className="prose prose-lg max-w-none">
                <p>
                  Born into a Rajput family with a strong legacy of horsemanship, my bond with horses—especially the noble Kathiawari breed—was shaped early on by my grandfather's lineage and deepened through my father's guidance. A seasoned horseman himself, my father became both my mentor and my greatest inspiration, instilling in me not just a love for horses, but a profound respect for the art of horse breeding.
                </p>
                <p>
                  My equestrian journey began at the age of seven. This early exposure laid a solid foundation, which I later built upon with formal training in Rajasthan's renowned equestrian town, Dundlod. There, I had the honor of being mentored by distinguished experts like H.H. Raghuvendra Singh Dundlod, Col. Ashok Yadav, and Col. Sarpratap Singh—each playing a pivotal role in refining my skills.
                </p>
              </div>
            </div>
            <div className="fade-in-section">
              <img 
                src="/FOUNDER.png"
                alt="Mr. Shivduttsinh K Jadeja with horses" 
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="What Sets Us Apart" 
            subtitle="Experience the Unique Heritage of Halar"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Compass className="w-8 h-8" />,
                title: "Pure Kathiawadi & Marwari Breeds",
                description: "We exclusively train with India's most special breeds — the Kathiawadi and Marwari horses, preserving our rich equestrian heritage."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Expert Training Process",
                description: "Each horse undergoes 4-5 years of careful training, ensuring they're perfectly prepared for riders of all skill levels."
              },
              {
                icon: <Mountain className="w-8 h-8" />,
                title: "Rich Heritage",
                description: "As the only riding school in Saurashtra dedicated to these breeds, we offer an authentic Indian riding experience."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg fade-in-section">
                <div className="inline-flex items-center justify-center p-3 bg-primary-50 text-primary-500 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Halar Farm Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section order-2 lg:order-1">
              <img 
                src="/4.1.png"
                alt="Halar Stud Farm" 
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover object-top"
              />
            </div>
            <div className="fade-in-section space-y-6 order-1 lg:order-2">
              <SectionHeading 
                title="Halar Stud Farm" 
                subtitle="A Legacy of Excellence Since 2007"
              />
              <div className="prose prose-lg max-w-none">
                <p>
                  Founded in 2007 by Kishorsinhji Jadeja, Halar Stud Farm stands as a testament to our family's dedication to horse breeding. With over 25 indigenous horses in our care, we've established ourselves as one of the top breeders for Kathiawari horses in the region.
                </p>
                <p>
                  Our commitment to breeding excellence spans generations, focusing on preserving and enhancing the noble characteristics of these magnificent creatures. Each horse at Halar Farm represents our dedication to maintaining the highest standards of breeding and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Our Philosophy" 
            subtitle="Preserving tradition while embracing excellence"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in-section bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mx-auto mb-6">
                <Award size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our operations, from horse care and training methods to the experiences we offer our members. Our commitment to quality ensures that riders of all levels receive the best possible equestrian education.
              </p>
            </div>
            
            <div className="fade-in-section bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mx-auto mb-6">
                <Book size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Heritage</h3>
              <p className="text-gray-600">
                At Halar Club, we are deeply committed to preserving and celebrating India's rich equestrian heritage, particularly the tradition of Kathiawadi and Marwari horses. We see ourselves as custodians of a cultural legacy that deserves to be passed on to future generations.
              </p>
            </div>
            
            <div className="fade-in-section bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mx-auto mb-6">
                <Users size={32} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in fostering a supportive community of riders who share our passion for horses. From beginners to experienced equestrians, everyone at Halar Club is part of a family united by respect for these magnificent animals and the traditions they represent.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-lg mb-4">
              As we look ahead, Halar Club aims to be more than just a riding school. We envision a center of excellence that combines traditional Indian horsemanship with modern equestrian practices, creating a unique experience that attracts riders from across India and beyond.
            </p>
            <p className="text-lg">
              Through our training programs, safaris, and community events, we hope to inspire a new generation of riders who will carry forward the legacy of Kathiawadi horses and the noble tradition of Indian equestrianism.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;