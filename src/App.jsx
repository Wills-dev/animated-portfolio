import "./App.css";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative  z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative">
          <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full bg-black opacity-80" />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <div className="relative z-10">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
