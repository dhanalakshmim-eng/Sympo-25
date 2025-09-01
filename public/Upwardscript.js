// Select canvas and context
const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 15;

// Particle Class
class Particle {
  constructor(x, y, size, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedY = speedY;
  }

  // Draw each particle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(211, 3, 252, 0.5)'; // Particle color
    ctx.shadowBlur = 29; // Increase blur intensity for a more pronounced glow
    ctx.shadowColor = 'rgba(255, 255, 255, 0.9)'; // Lighten the glow color for a softer effect
    ctx.globalCompositeOperation = 'lighter'; // Makes the glow effect more vivid and bright
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over'; // Reset to default after drawing
  }

  // Update particle position
  update() {
    this.y -= this.speedY; // Move upward
    if (this.y + this.size < 0) { // If particle goes above the canvas
      this.y = canvas.height + this.size; // Reappear at the bottom
      this.x = Math.random() * canvas.width; // Random x position
    }
  }
}

// Check if particles overlap
function isOverlapping(particle, particles) {
  for (const existing of particles) {
    const dx = particle.x - existing.x;
    const dy = particle.y - existing.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < particle.size + existing.size) {
      return true; // Overlapping detected
    }
  }
  return false;
}

// Initialize particles with spacing logic
function initParticles() {
  let attempts = 0; // To prevent infinite loops
  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 15 + 10; // Particle size
    let x, y, speedY = 0.7; // Fixed upward speed
    let particle;

    do {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
      particle = new Particle(x, y, size, speedY);
      attempts++;
      if (attempts > 1000) break; // Break if too many attempts
    } while (isOverlapping(particle, particlesArray));

    particlesArray.push(particle);
  }
}

// Animate particles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

// Adjust canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particlesArray.length = 0; // Reset particles
  initParticles();
});

// Initialize and animate
initParticles();
animate();
