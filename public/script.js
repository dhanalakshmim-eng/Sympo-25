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
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  // Draw each particle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = '#E8BCB9'; // Particle color
    ctx.shadowBlur = 29; // Increase blur intensity for a more pronounced glow
    ctx.shadowColor = 'rgba(255, 255, 255, 0.9)'; // Lighten the glow color for a softer effect
    ctx.globalCompositeOperation = 'lighter'; // Makes the glow effect more vivid and bright
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over'; // Reset to default after drawing
  }
  
  

  // Update particle position
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce particles off edges
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
}

// Initialize particles
function initParticles() {
  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 5 + 5; // Particle size
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = (Math.random() - 0.5) * 2; // Speed in x
    const speedY = (Math.random() - 0.5) * 2; // Speed in y
    particlesArray.push(new Particle(x, y, size, speedX, speedY));
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