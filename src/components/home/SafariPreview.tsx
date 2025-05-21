import { Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

const SafariPreview = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Embark on Unforgettable Horse Safaris
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Explore Gujarat's natural beauty and cultural heritage on horseback. Our expertly guided safaris take you through diverse landscapes, from flowing rivers to majestic mountains, while connecting you with the rich history and culture of the region.
            </p>
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-3">
                <Mountain className="w-6 h-6 text-primary-500" />
                <span className="text-gray-700">Scenic Routes</span>
              </div>
            </div>
            <Link
              to="/packages"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Explore Safari Packages
            </Link>
          </div>
          <div className="relative">
            <img
              src="/safari-preview.png"
              alt="Horse Safari"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariPreview;
