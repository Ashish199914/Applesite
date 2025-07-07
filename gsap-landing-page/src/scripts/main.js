// main.js - Main JavaScript file for the GSAP landing page

import { initScrollAnimations } from '../animations/scroll.js';

// Initialize GSAP animations on page load
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
});

// Add any additional interactive effects or event listeners here
const button = document.querySelector('.cta-button');
if (button) {
    button.addEventListener('click', () => {
        gsap.to(window, {duration: 1, scrollTo: {y: "#contact", offsetY: 50}});
    });
}