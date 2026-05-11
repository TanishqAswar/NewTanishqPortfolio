import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Hero, Navbar, StarsCanvas } from './components';

// Code-split each section — React.lazy handles the chunk; Suspense handles the wait.
// We deliberately do NOT use a custom IntersectionObserver LazyLoad wrapper because
// that pattern causes layout-shift scroll jumps when sections mount and expand.
const About       = lazy(() => import('./components/About'));
const Experience  = lazy(() => import('./components/Experience'));
const POR         = lazy(() => import('./components/POR'));
const Achievements= lazy(() => import('./components/Achievements'));
const Tech        = lazy(() => import('./components/Tech'));
const Works       = lazy(() => import('./components/Works'));
const Contact     = lazy(() => import('./components/Contact'));

// Minimal inline loader — three bouncing dots
const Loader = () => (
  <div className="w-full flex items-center justify-center py-16">
    <div className="flex gap-2">
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className="w-2.5 h-2.5 rounded-full bg-[#915eff]"
          style={{ animation: `_bounce 1.1s ease-in-out ${i * 0.18}s infinite` }}
        />
      ))}
    </div>
    <style>{`
      @keyframes _bounce {
        0%,100% { transform:translateY(0);   opacity:.35; }
        50%      { transform:translateY(-10px); opacity:1;   }
      }
    `}</style>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      {/* Starfield canvas — global, always present */}
      <StarsCanvas />

      <Navbar />

      {/* Hero — eagerly loaded (above fold) */}
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-10'>
        <Hero />
      </div>

      {/* All below-fold sections wrapped in a single Suspense boundary.
          They load as one bundle after the hero paints. No layout-shift. */}
      <div className="relative z-10">
        <Suspense fallback={<Loader />}>
          <About />
          <Experience />
          <POR />
          <Achievements />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
          </div>
        </Suspense>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
