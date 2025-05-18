import { useEffect, useState } from 'react';
import logo from '../assets/logo/Ingniis.png';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setIsAtTop(currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out
        ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
        ${isAtTop ? 'bg-transparent w-[60%]' : 'bg-gray-300 w-full'}
         h-[10vh]`
        }
    >
      <div className="flex items-center justify-between px-20 h-full">
        <div className="flex items-center h-full">
          <a href="#home"><img
            src={logo}
            alt="Logo"
            className="h-90px max-h-[110px] w-auto object-contain"
          />
          </a>
        </div>
        <ul className="flex gap-8 mr-20 text-base text-blue-700">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#works">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
