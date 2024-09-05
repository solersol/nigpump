

import React from 'react';
import { pimg1, pimg2, pimg3, pimg4, pimg5, pimg6 } from '../assets/images'; // Replace with your actual image paths

const Pump = () => {
  const images = [
    { link: "https://pump.fun/3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump", image: pimg1 },
    { link: "https://pump.fun/", image: pimg2 },
    { link: "https://pump.fun/7M9KJcPNC65ShLDmJmTNhVFcuY95Y1VMeYngKgt67D1t", image: pimg3 },
    { link: "https://pump.fun/A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump", image: pimg4 },
    { link: "https://pump.fun/Ep5tnKTSkLDeQ12ctS3RhQNcbcApkcyJcGPgHh4dpump", image: pimg5 },
    { link: "https://pump.fun/5mbK36SZ7J19An8jFochhQS4of8g6BwUjbeCSxBSoWdp", image: pimg6 },
  ];

  return (
    <section className="relative w-full h-screen flex flex-col justify-end items-center">
      
      {/* Top Right Corner Links */}
      <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
        <a
          href="https://x.com/niggadotpump"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold text-md hover:underline"
        >
          [TWITTER]
        </a>
        <a
          href="https://t.me/NiggaPump"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold text-md hover:underline"
        >
          [TELEGRAM]
        </a>
      </div>

      {/* 6 Images in 2 Rows at the Bottom */}
      <div className="w-full px-4 mb-6 grid grid-cols-3 gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <a
            href={image.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[550px] h-[190px] block bg-transparent transform transition-transform hover:scale-110 ${
              index === 1 ? 'animate-shake' : ''
            }`}
          >
            <img
              src={image.image}
              alt={`Link ${index + 1}`}
              className="w-[90%]"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Pump;
