import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Mukul',
    company: 'Zyrax',
    feedback:
      'The team delivered an exceptional product, blending creativity with functionality. The UI/UX design exceeded our expectations, making user interaction seamless and engaging.',
  },
  {
    name: 'Chetan',
    company: 'Zylo',
    feedback:
      'Our experience with the frontend development was outstanding. The project was completed on time, and the end result was a clean, responsive, and visually appealing interface.',
  },
  {
    name: 'Aarav',
    company: 'Nexaid',
    feedback:
      'A fantastic team to work with! They listened to our requirements carefully and delivered a well-structured, scalable web app that exceeded expectations.',
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  return (
    <div className="bg-white text-black py-16 px-6 relative">
      <div className="max-w-5xl mx-auto text-center">

        <div className="transition-all duration-300 ease-in-out">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            {testimonials[current].feedback}
          </p>
          <h4 className="text-lg font-semibold">{testimonials[current].name}</h4>
          <p className="text-gray-500">{testimonials[current].company}</p>
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute top-1/2 left-6 transform -translate-y-1/2 text-3xl text-gray-400 hover:text-black"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 text-3xl text-gray-400 hover:text-black"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Slider;
