// Add interactivity here if needed

// Example: Scroll to top when 'Get Started' button is clicked
document.querySelector(".primary")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle navbar on small screens (if mobile menu is added in future)
// const menuToggle = document.querySelector(".menu-toggle");
// const navLinks = document.querySelector(".nav-links");
// menuToggle?.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });
