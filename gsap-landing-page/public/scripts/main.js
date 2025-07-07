// Zoom-in animation for hero banner
window.addEventListener('DOMContentLoaded', () => {
  // Hero content zoom-in
  gsap.from('.iphone16 .section-top', {
    scale: 0.92,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  });
  // Hero image zoom-out
  gsap.fromTo('.iphone16 .section-top',
    { scale: 1.12, opacity: 0.7 },
    { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' }
  );
});

// On scroll, zoom out the hero image further
window.addEventListener('scroll', () => {
  const scrollY = Math.min(window.scrollY, 400);
  const scale = 1 + (0.12 * (1 - scrollY / 400));
  const opacity = 1 - (scrollY / 1200);
  gsap.to('.iphone16 .section-top', {
    scale: scale,
    opacity: opacity,
    duration: 0.3,
    overwrite: 'auto'
  });
});

  gsap.registerPlugin(ScrollToPlugin);

  document.querySelectorAll('a.scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: target,
          ease: "power1.out"
        });
      }
    });
  });

// Smooth scroll for anchor links