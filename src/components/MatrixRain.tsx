import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const createChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = characters[Math.floor(Math.random() * characters.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDuration = (Math.random() * 3 + 2) + 's';
      char.style.animationDelay = Math.random() * 2 + 's';
      char.style.opacity = (Math.random() * 0.5 + 0.1).toString();
      
      container.appendChild(char);
      
      setTimeout(() => {
        if (container.contains(char)) {
          container.removeChild(char);
        }
      }, 5000);
    };

    const interval = setInterval(createChar, 150);
    
    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="matrix-rain" />;
};

export default MatrixRain;