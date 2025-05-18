import React from 'react';
import { Star, Box, LayoutDashboard, Monitor } from 'lucide-react';
import { FaServer, FaPlug } from 'react-icons/fa';

const services = [
  {
    icon: <Star className="text-orange-500 w-6 h-6" />,
    title: 'Frontend Development',
    desc: 'We craft high-performance web applications using modern frameworks like React and Vite.',
  },
  {
    icon: <Box className="text-orange-500 w-6 h-6" />,
    title: 'Backend Development',
    desc: 'With Django and REST APIs, we create robust and scalable backend systems.',
  },
  {
    icon: <LayoutDashboard className="text-orange-500 w-6 h-6" />,
    title: 'UI/UX Design',
    desc: 'We design intuitive and visually appealing interfaces.',
  },
  {
    icon: <Monitor className="text-orange-500 w-6 h-6" />,
    title: 'Tech Consulting',
    desc: 'We offer expert consulting to optimize your workflow and scale your application.',
  },
  {
    icon: <FaServer className="text-orange-500 text-3xl" />,
    title: 'DevOps & Deployment',
    desc:
      'We ensure smooth deployment with CI/CD pipelines, Docker, and cloud platforms. Whether it’s AWS, Vercel, or DigitalOcean, we set up efficient hosting and monitoring.',
  },
  {
    icon: <FaPlug className="text-orange-500 text-3xl" />,
    title: 'API Development & Integration',
    desc:
      'We build and integrate powerful APIs to connect your applications seamlessly. Whether it’s third-party services or custom API solutions, we ensure secure and scalable connections.',
  },
  
];

function Services() {
  return (
    <section id="services" className="bg-[#f9f9f9] py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 relative">
        <div className="lg:w-1/2 relative">
          <h2 className="text-[120px] font-bold text-gray-200 leading-none select-none">02</h2>
          <span className="absolute top-6 left-4 text-orange-500 tracking-widest text-sm font-semibold uppercase">
            What we do
          </span>
          <p className="mt-16 text-3xl md:text-4xl font-semibold text-black leading-snug">
            We build scalable and modern web applications tailored to your business needs.
          </p>
        </div>
        <div className="lg:w-1/2 pt-4">
          <p className="text-gray-600 text-lg leading-relaxed">
            Specializing in <span className="font-medium">React, Vite, Tailwind</span>, and <span className="font-medium">Django</span>,
            we provide end-to-end solutions for startups and enterprises looking to enhance their digital presence.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mt-20">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          >
          
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-gray-100 p-3 rounded-full">{service.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-black">{service.title}</h3>
                <p className="text-gray-600 mt-1">{service.desc}</p>
              </div>
            </div>

      
            <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 p-4 text-center">
              <p className="text-base font-medium">{service.title} - Hover to explore more!</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
