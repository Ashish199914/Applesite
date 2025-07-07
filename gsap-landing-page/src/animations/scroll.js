import { gsap } from "gsap";

export function initScrollAnimations() {
    const sections = document.querySelectorAll(".scroll-section");

    sections.forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });
    });
}

export function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll(".parallax");

    parallaxElements.forEach((element) => {
        gsap.to(element, {
            y: "50%",
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });
    });
}