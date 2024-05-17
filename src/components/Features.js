import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/Features.css';

const Features = () => {
  useEffect(() => {
    const createStarAnimation = () => {
      const star = document.createElement('div');
      star.className = 'star-animation';
      const size = Math.random() * 30 + 10;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      document.querySelector('.features').appendChild(star);

      gsap.fromTo(
        star,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }
      );

      gsap.to(star, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: 'power2.in',
        delay: 0.5,
        onComplete: () => {
          star.remove();
        }
      });
    };

    const intervalId = setInterval(createStarAnimation, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <section className="features" id="features">
      <h2>Features</h2>
      <div className="feature-list">
        <div className="feature-item">Feature 1</div>
        <div className="feature-item">Feature 2</div>
        <div className="feature-item">Feature 3</div>
      </div>
    </section>
  );
};

export default Features;
