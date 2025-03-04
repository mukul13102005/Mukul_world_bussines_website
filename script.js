  // Navbar Toggle for Mobile
function toggleHeader() {
    let navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
}

// Close menu when clicking outside or on a link
document.addEventListener("click", function (event) {
    let navMenu = document.getElementById("nav-menu");
    let menuIcon = document.querySelector(".menu-icon");

    // Agar click nav menu ya menu icon par nahi hua toh band kar do
    if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        navMenu.style.display = "none";
    }
});

// Close menu when clicking a nav link
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", function () {
        document.getElementById("nav-menu").style.display = "none";
    });
});

// Sticky Header on Scroll
window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Typing Effect in Header
let headerText = "Welcome to Mukul's World 🌎";
let indexHeader = 0;
let typingHeader = document.getElementById("live-typing");

function typeHeader() {
    if (indexHeader < headerText.length) {
        typingHeader.innerHTML += headerText.charAt(indexHeader);
        indexHeader++;
        setTimeout(typeHeader, 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typingHeader.innerHTML = ""; // Clear text first
    typeHeader();
});

// Typing Effect in Hero Section
let heroText = "Let me handle all your writing work...";
let indexHero = 0;
let typingHero = document.getElementById("typing-effect");

function typeHero() {
    if (indexHero < heroText.length) {
        typingHero.innerHTML += heroText.charAt(indexHero);
        indexHero++;
        setTimeout(typeHero, 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typingHero.innerHTML = ""; // Clear text first
    typeHero();
});

// Reveal Sections on Scroll (Fade-in Effect)
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 50) {
            section.classList.add("show");
        }
    });
});
