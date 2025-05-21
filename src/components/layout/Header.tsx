import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 h-28 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link 
          to="/" 
          className="flex-shrink-0 flex items-center h-full py-2" 
          state={{ skipPreloader: true }}
          replace
        >
          <img src="/LOGO.png" alt="Halar Club Logo" className="h-90 w-auto max-h-full" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 ml-auto">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors duration-300 hover:text-primary-500 font-serif tracking-wider uppercase ${
                  isActive 
                    ? 'text-primary-500' 
                    : scrolled ? 'text-gray-700' : 'text-white'
                }`
              }
              end
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-primary-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} className="text-primary-500" />
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-6 p-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `text-lg font-medium font-serif tracking-wider uppercase ${isActive ? 'text-primary-500' : 'text-gray-700'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                  end
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;