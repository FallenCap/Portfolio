import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, ProfessionalWorks, Hero, Navbar, Tech, Works, StarsCanvas, GithubCalander } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <ProfessionalWorks/>
        <GithubCalander/>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
