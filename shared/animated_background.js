// Particle system background
const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

// Dynamic scaling based on canvas size
const scaleFactor = Math.sqrt(canvas.width * canvas.height) / 100; // tweak divisor for density

const particleCount = Math.floor(scaleFactor * 15); // smooth scaling with area
const connectionDistance =
  Math.min(canvas.width, canvas.height) / (2 + scaleFactor / 2); // smaller screens → smaller connections
const mouse = {
  x: null,
  y: null,
  radius: canvas.width / (6 + scaleFactor / 10), // width-aware mouse radius
};

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 1.5 + 0.5;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

    // Mouse interaction
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      const forceX = dx / distance;
      const forceY = dy / distance;
      const force = (mouse.radius - distance) / mouse.radius;

      this.vx -= forceX * force * 0.6;
      this.vy -= forceY * force * 0.6;
    }

    // Damping
    this.vx *= 0.99;
    this.vy *= 0.99;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 212, 255, 1)"; // bright cyan

    ctx.fill();
  }
}

function init() {
  particles.length = 0;
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < connectionDistance) {
        const opacity = (1 - distance / connectionDistance) * 0.3;
        ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;

        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  connectParticles();
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
});

init();
animate();

// // Smooth scroll
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   });
// });
