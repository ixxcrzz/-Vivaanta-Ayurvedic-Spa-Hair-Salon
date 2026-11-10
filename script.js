
// SCROLL REVEAL
const revealElements = document.querySelectorAll(
  ".hero-content, .hero-image, .section-heading, .service-card, .about, .gallery-item, .contact"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((element) => observer.observe(element));


// FLOATING GOLD PARTICLES
const particleContainer = document.createElement("div");
particleContainer.className = "particles";
document.body.appendChild(particleContainer);

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  for (let i = 0; i < 25; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 12 + "s";
    particle.style.animationDuration = 8 + Math.random() * 10 + "s";
    particle.style.setProperty("--drift", (Math.random() * 100 - 50) + "px");

    particleContainer.appendChild(particle);
  }
}


// MOUSE GOLD TRAIL (DESKTOP)
if (window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

  document.addEventListener("mousemove", (event) => {
    const sparkle = document.createElement("span");
    sparkle.className = "cursor-sparkle";

    sparkle.style.left = event.clientX + "px";
    sparkle.style.top = event.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 650);
  });
}
