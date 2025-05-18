import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero-bg/herobackground.gif'; 
import mainImg from '../assets/hero-bg/intro-bg.jpg';

function Home() {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='home'>
      <div className="relative w-full h-full bg-white overflow-hidden">

        <div className="absolute top-0 right-0 w-[30px] lg:w-[450px] h-screen z-0 pointer-events-none">
          <img
            src={heroImage}
            alt="Gradient Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-30 max-w-screen mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-6 md:px-16">

          <motion.div
            className="w-full lg:w-1/2 mt-24 lg:mt-0"
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="w-14 h-[2px] bg-orange-400 mb-6" />
            <h1 className="text-3xl ml-20 sm:text-5xl lg:text-[60px] font-semibold leading-tight text-[#6fc4ee]">
              We provide creative solutions to turn your
              ideas into digital<br />
              reality.
            </h1>
          </motion.div>

         <div className="relative w-full lg:w-1/2 h-full mt-[180px] flex items-center justify-center">
  <motion.img
    src={mainImg}
    alt="Macbook"
    className="w-[80%] lg:w-[550px] drop-shadow-xl"
    initial={{ y: 500, opacity: 1 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.9 }}
  />
</div>
        </div>
        <div
         className="absolute bottom-12 right-4 text-white bg-black/50 text-xs tracking-widest cursor-pointer z-50 px-3 py-1 rounded-full rotate-90 hover:bg-black/80 transition"
          onClick={handleScroll}
        >
          SCROLL DOWN
        </div>
      </div>
    </section>
  );
}

export default Home;
