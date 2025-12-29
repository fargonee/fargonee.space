// Scroll Animations
class ScrollAnimations {
  constructor() {
    this.fadeElements = document.querySelectorAll(".fade-in");
    this.init();
  }

  init() {
    this.checkVisibility();
    window.addEventListener("scroll", () => this.checkVisibility());
    window.addEventListener("resize", () => this.checkVisibility());
  }

  checkVisibility() {
    this.fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        element.classList.add("visible");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ScrollAnimations();

  // Add smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
});
