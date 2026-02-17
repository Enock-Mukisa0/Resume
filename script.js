// script.js - Simple fade with working navigation  **DONE BY CHATGPT**

const homeIcon = document.getElementById('home-icon');
const experienceIcon = document.getElementById('experience-icon');
const contactIcon = document.getElementById('contact-icon');

const homeSection = document.getElementById('home');
const experienceSection = document.getElementById('experience');
const contactSection = document.getElementById('contact');

const navLinks = [homeIcon, experienceIcon, contactIcon];
const sections = [homeSection, experienceSection, contactSection];

function showSection(targetSection, clickedIcon) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('fade-in');
    });

    // Remove active from all nav icons
    navLinks.forEach(icon => {
        icon.classList.remove('active');
    });

    // Show target section with fade
    targetSection.classList.remove('hidden');
    targetSection.classList.add('fade-in');

    // Add active to clicked icon
    clickedIcon.classList.add('active');
}

// Event listeners
homeIcon.addEventListener('click', () => {
    showSection(homeSection, homeIcon);
});

experienceIcon.addEventListener('click', () => {
    showSection(experienceSection, experienceIcon);
});

contactIcon.addEventListener('click', () => {
    showSection(contactSection, contactIcon);
});