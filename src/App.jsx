import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, POR, Achievements } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <StarsCanvas /> {/* Moved Stars to be global background */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-10'>
          <Navbar />
          <Hero />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <About />
          <Experience />

          {/* Added POR and Achievements */}
          <POR />
          <Achievements />

          <Tech />
          <Works />

          <div className='relative z-0'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
