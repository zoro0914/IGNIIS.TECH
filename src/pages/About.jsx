import React from 'react';

function About() {
  const steps = [
    {
      number: '01.',
      title: 'Discover',
      description:
        'We begin by understanding your business challenges, analyzing data, and identifying opportunities where AI and digital transformation can drive efficiency and growth.',
    },
    {
      number: '02.',
      title: 'Strategize',
      description:
        'Our team designs AI-driven strategies and digital solutions tailored to your business needs, ensuring seamless integration with your existing processes and goals.',
    },
    {
      number: '03.',
      title: 'Develop',
      description:
        'We build and implement AI-powered applications, automation tools, and intelligent digital platforms that enhance operational efficiency, decision-making, and customer experiences.',
    },
    {
      number: '04.',
      title: 'Deploy & Optimize',
      description:
        'After deployment, we continuously monitor performance, refine AI models, and optimize digital systems to ensure long-term innovation, scalability, and business impact.',
    },
  ];

  return (
    <section id='about' className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Left: Section Number and Title */}
        <div className="flex flex-col lg:w-1/2 relative">
          <h2 className="text-[100px] font-bold text-gray-200 leading-none">01</h2>
          <span className="absolute top-6 left-2 text-orange-500 tracking-widest text-sm font-semibold">
            WHO WE ARE
          </span>

          <p className="mt-10 text-2xl md:text-3xl font-medium leading-snug text-black">
            We are a Digital & AI Solutions company, dedicated to transforming businesses with cutting-edge technology and intelligent automation.
          </p>
        </div>


        <div className="lg:w-1/2">
          <p className="text-gray-500 text-lg leading-relaxed">
            Our expertise spans AI-driven solutions, digital transformation, and data-driven decision-making. We help businesses innovate, optimize processes, and stay ahead in a rapidly evolving world.
          </p>
        </div>
      </div>

      <div className="mt-24 m-50 grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div key={index}>
            <h3 className="text-orange-500 text-xl font-semibold mb-1">{step.number}</h3>
            <h4 className="text-xl font-bold text-black mb-2">{step.title}</h4>
            <p className="text-gray-700 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
