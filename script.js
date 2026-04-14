// Navigation Scroll Effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const icon = mobileToggle.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("ph-list");
    icon.classList.add("ph-x");
  } else {
    icon.classList.remove("ph-x");
    icon.classList.add("ph-list");
  }
});

// Close mobile menu on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const icon = mobileToggle.querySelector("i");
    icon.classList.remove("ph-x");
    icon.classList.add("ph-list");
  });
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll(".reveal");

const revealCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Stop observing once revealed
    }
  });
};

const revealOptions = {
  threshold: 0.15, // 15% of the element must be visible
  rootMargin: "0px 0px -50px 0px", // Trigger slightly before it fully comes into view
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// Active Link Highlighting
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(
  ".nav-links a:not(.btn-primary-outline)",
);

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").includes(current)) {
      item.classList.add("active");
    }
  });
});

// Update Glow Position on Mouse Move (Subtle interactive background effect)
const bgGlow = document.querySelector(".bg-glow");

document.addEventListener("mousemove", (e) => {
  // Only apply on non-touch devices and when scrolled near top
  if (window.innerWidth > 768 && window.scrollY < 1000) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Move the glow orb slightly based on mouse position
    bgGlow.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
  }
});
