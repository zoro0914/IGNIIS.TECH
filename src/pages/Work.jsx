import React from 'react';
import img1 from '../assets/images/zyrax.png';
import img2 from '../assets/images/zylo.png';
import img3 from '../assets/images/freakfitweb.png';
import img4 from '../assets/images/nexaid.png';
import img5 from '../assets/images/sound.png';
import img6 from '../assets/images/freakfitapp.jpg';

const projectImages = [
  { src: img1, title: 'Zyrax Dashboard' },
  { src: img2, title: 'Zylo Website' },
  { src: img3, title: 'FreakFit Web' },
  { src: img4, title: 'Nexaid AI' },
  { src: img5, title: 'Sound Studio' },
  { src: img6, title: 'FreakFit App' },
];

const Works = () => {
  const handleViewProject = (project) => {
    alert(`View project: ${project.title}`);
  };

  const renderImageCard = (img, index, height) => (
    <div
      key={index}
      className="relative group overflow-hidden shadow-lg cursor-pointer"
    >
  
      <img
        src={img.src}
        alt={img.title}
        className={`w-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out ${height}`}
      />


      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

      
      <p className="absolute top-4 left-4 text-white text-sm font-semibold z-10 opacity-0 group-hover:opacity-100 transition duration-300">
        {img.title}
      </p>


      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition duration-300">
        <button
          onClick={() => handleViewProject(img)}
          className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded hover:bg-orange-600 transition"
        >
          View Project
        </button>
      </div>
    </div>
  );

  return (
    <section id="works" className="bg-[#111111] text-white py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
  
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="lg:w-1/2 relative">
            <h2 className="text-[120px] font-bold text-gray-800 leading-none select-none">03</h2>
            <span className="absolute top-6 left-4 text-orange-500 tracking-widest text-sm font-semibold uppercase">
              Recent Works
            </span>
            <p className="mt-16 text-3xl md:text-4xl font-semibold leading-snug text-white">
              Here are some of our favorite projects we have done lately.
              <br />
              Feel free to check them out.
            </p>
          </div>

          <div className="lg:w-1/2 pt-4">
            <p className="text-gray-400 text-lg leading-relaxed">
              Our recent work includes fitness platforms, AI dashboards, and e-commerce stores —
              blending creativity with performance across different domains.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {projectImages.slice(0, 2).map((img, i) =>
              renderImageCard(img, i, "h-[500px]")
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {projectImages.slice(2).map((img, i) =>
              renderImageCard(img, i + 2, "h-[300px]")
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
