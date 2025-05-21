import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Preloader from '../ui/Preloader';

const Layout = () => {
  const location = useLocation();
  const [showPreloader, setShowPreloader] = useState(() => {
    // Don't show preloader if navigating from logo click
    if (location.state && location.state.skipPreloader) {
      return false;
    }
    // Show preloader only on first visit
    const hasLoaded = localStorage.getItem('hasLoaded');
    if (!hasLoaded) {
      localStorage.setItem('hasLoaded', 'true');
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (showPreloader) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 2500); // Total duration of preloader (1.5s delay + 1s fade)
      return () => clearTimeout(timer);
    }
  }, [showPreloader]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {showPreloader && <Preloader />}
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;