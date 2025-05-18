import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-[#f9f9f9] text-black px-6 md:px-20 py-20 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
  
          <div>
      
            <div className="relative w-max mb-10">
              <div className="text-[120px] font-bold text-[#e5e5e5] leading-none select-none">
                04
              </div>
              <h2 className="absolute bottom-6 font-semibold text-sm uppercase tracking-widest text-orange-500 z-10">
                Get in Touch
              </h2>
            </div>

            <p className="text-2xl md:text-2xl font-medium leading-relaxed mb-6">
              Have an idea or an epic project in mind? Talk to us. Let's work together and make something great. Drop us a line at <br />
              <a href="mailto:igniis23aug@gmail.com" className="text-orange-500 mt-4 block">
                igniis23aug@gmail.com
              </a>
            </p>
          </div>

      
          <div className='ml-20'>
            <h4 className="uppercase font-semibold tracking-widest text-sm mb-2">Contact Infos</h4>
            <p className="text-lg">+91 8910009475</p>
          </div>
        </div>

    
        <div className="border-t mt-16 pt-6 text-center text-sm text-gray-600">
          © Copyright Mueller 2025 • Design by{' '}
          <span className="text-orange-500 font-medium">igniis</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
