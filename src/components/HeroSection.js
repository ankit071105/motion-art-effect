import React, { useEffect, useRef } from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;

    const handleMouseMove = (event) => {
      createPaintEffect(event.clientX, event.clientY);
    };

    heroElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const createPaintEffect = (x, y) => {
    const paint = document.createElement('div');
    paint.className = 'paint-effect';
    paint.style.left = `${x}px`;
    paint.style.top = `${y}px`;

    heroRef.current.appendChild(paint);

    setTimeout(() => {
      paint.remove();
    }, 2000); // Remove paint after 2 seconds
  };

  return (
    <section className="hero" ref={heroRef}>
      <h1 className="boil">Welcome to Motion Art Effect</h1>
      <p className="boils">Create stunning animations effortlessly.</p>
    </section>
  );
};

export default HeroSection;
