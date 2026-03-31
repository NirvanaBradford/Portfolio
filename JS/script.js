// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Simple animation for the GPA highlight
window.addEventListener("scroll", () => {
  const gpaText = document.querySelector(".gpa-highlight");
  const position = gpaText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition) {
    gpaText.style.opacity = "1";
    gpaText.style.transform = "translateY(0)";
    gpaText.style.transition = "all 0.6s ease-out";
  }
});
