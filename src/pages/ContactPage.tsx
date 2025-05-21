import { useState } from 'react';
import Hero from '../components/ui/Hero';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const faqs = [
  {
    question: "What experience level do I need to join?",
    answer: "We welcome riders of all experience levels, from complete beginners to advanced equestrians. Our expert instructors will ensure you receive appropriate guidance."
  },
  {
    question: "What is the best time to visit?",
    answer: "The best time for riding is during early morning (6:00 AM - 9:00 AM) or late afternoon (4:00 PM - 7:00 PM) when the weather is cooler. However, we're open throughout the day for visits and inquiries."
  },
  {
    question: "Do you provide riding gear?",
    answer: "Yes, we provide basic riding gear including helmets. However, we recommend bringing comfortable clothes and closed-toe shoes. For regular riders, we suggest investing in personal riding gear."
  },
  {
    question: "How do I schedule a trial session?",
    answer: "You can schedule a trial session by filling out our contact form, calling us directly, or visiting us during operating hours. We'll arrange a suitable time slot based on your preference."
  }
];

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries or to schedule a visit"
        image="/contact-hero.png"
      />
      
      <section className="section bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-6 h-6 mr-3 text-primary-500" />
                    <span>Halar Stud Farm, Rajkot-Jamnagar Highway, Gujarat, India</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-6 h-6 mr-3 text-primary-500" />
                    <a 
                      href="tel:+919876543210" 
                      className="hover:text-primary-500 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-6 h-6 mr-3 text-primary-500" />
                    <a 
                      href="mailto:info@halarclub.com" 
                      className="hover:text-primary-500 transition-colors"
                    >
                      info@halarclub.com
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-6 h-6 mr-3 text-primary-500" />
                    <span>Mon-Sun: 6:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.939148773246!2d72.5538444!3d23.0275438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84faa5a36071%3A0x9af325a448f09478!2sHalar%20Club!5e0!3m2!1sen!2sin!4v1651901234567!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Social Media Links
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center p-4 text-gray-600 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all">
                <Facebook className="w-6 h-6 mr-2" />
                <span>Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center p-4 text-gray-600 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all">
                <Instagram className="w-6 h-6 mr-2" />
                <span>Instagram</span>
              </a>
            </div>
            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <p className="text-center text-gray-600">Follow us on social media for updates, events, and beautiful moments from Halar Club!</p>
            </div>
          </div> */}
          {/* FAQ Section */}
          <div className="mt-16 bg-gray-50 py-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-2 text-center">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-center mb-8">Find quick answers to common questions about Halar Club</p>
            <div className="max-w-3xl mx-auto space-y-4 px-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary-500" />
                    )}
                  </button>
                  <div 
                    className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaq === index ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;