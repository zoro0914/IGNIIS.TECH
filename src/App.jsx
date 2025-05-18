import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import About  from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Work from './pages/Work.jsx';
import Slider from './pages/Slider.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Work />
      <Slider />
      <Contact />
    </>
  );
}

export default App;