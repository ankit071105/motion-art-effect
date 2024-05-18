

import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;

    const createPaintEffect = (x, y) => {
      const paint = document.createElement('div');
      paint.className = 'paint-effect';
      paint.style.left = `${x}px`;
      paint.style.top = `${y}px`;

      heroElement.appendChild(paint);

      setTimeout(() => {
        paint.remove();
      }, 2000);
    };

    const handleMouseMove = (event) => {
      createPaintEffect(event.clientX, event.clientY);
    };

    heroElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <style>
        {`
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          background-color: #121212; /* Dark theme background */
          color: #ffffff; /* Text color for dark theme */
          overflow: hidden;
        }

        .boil {
          font-size: 3rem;
          text-align: center;
          margin-top: 20%;
        }

        .boils {
          font-size: 2.5rem;
          text-align: center;
        }

   
   

        @keyframes spread {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(100);
            opacity: 0;
          }
        }
        .paint-effect {
          position: absolute;
          width: 3px; 
          height:3px;
          background: linear-gradient(to bottom right, #ff0000 0%, #ff99ff 62%);
          pointer-events: none;
          mix-blend-mode: color-dodge;
          animation: spread 2s linear forwards;
          opacity: 0; /* Initially hidden */
          clip-path: polygon(50% 90%, 20% 35%, 100% 100%, 50% 65%, 0% 100%, 10% 35%);
        }
        `}
      </style>
      <h1 className="boil">Welcome to Water Paint Effect</h1>
      <p className="boils">Create stunning animations effortlessly.</p>
    </section>
  );
};

export default HeroSection;
