import React, { Suspense, lazy, useEffect, useState, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Hero, Navbar, StarsCanvas } from './components';

// Lazy loading below-the-fold components
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const POR = lazy(() => import('./components/POR'));
const Achievements = lazy(() => import('./components/Achievements'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));

// IntersectionObserver Wrapper to delay chunk fetching until scrolled near
const LazyLoad = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // Triggers load 300px before scrolling into view
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="min-h-[100px]">{isVisible && children}</div>;
};

// Fallback loader to display while chunks are downloading
const SectionLoader = () => (
  <div className="w-full h-[100px] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-t-2 border-b-2 border-[#915eff] animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <StarsCanvas /> {/* Global star background */}
        <Navbar />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-10'>
          <Hero />
        </div>

        {/* Main Content wrapped in Suspense & IntersectionObserver for true Lazy Loading */}
        <div className="relative z-10">
          <Suspense fallback={<SectionLoader />}>
            <LazyLoad><About /></LazyLoad>
            <LazyLoad><Experience /></LazyLoad>
            <LazyLoad><POR /></LazyLoad>
            <LazyLoad><Achievements /></LazyLoad>
            <LazyLoad><Tech /></LazyLoad>
            <LazyLoad><Works /></LazyLoad>
            
            <LazyLoad>
              <div className='relative z-0'>
                <Contact />
              </div>
            </LazyLoad>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
