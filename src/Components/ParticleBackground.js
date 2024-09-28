import React, { useRef, useEffect } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    const particles = [];
    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
      });
    }

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.closePath();
      });

      // Draw lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    // Update particles
    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
        if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1;
      });
    };

    // Animation loop
    const animate = () => {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Handle user click to add new particle
    const handleClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Create new particle at the click position
      const newParticle = {
        x,
        y,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 5 - 0.5,
        speedY: Math.random() * 5 - 0.5,
      };

      // Add the new particle to the particles array
      particles.push(newParticle);

      // Find the nearest particle to connect
      let nearestParticle = null;
      let minDistance = Infinity;

      particles.forEach((particle) => {
        if (particle === newParticle) return; // Skip the new particle itself

        const dx = particle.x - newParticle.x;
        const dy = particle.y - newParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < minDistance) {
          minDistance = distance;
          nearestParticle = particle;
        }
      });

      // Draw line to the nearest particle
      if (nearestParticle) {
        ctx.beginPath();
        ctx.moveTo(newParticle.x, newParticle.y);
        ctx.lineTo(nearestParticle.x, nearestParticle.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - minDistance / 100})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.closePath();
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute w-screen h-screen overflow-y-auto " />;
};

export default ParticleBackground;
