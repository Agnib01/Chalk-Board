document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling for Navigation Links
  document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 50,
                  behavior: "smooth"
              });
          }
      });
  });

  // Scroll Animation - Reveal Sections on Scroll
  const sections = document.querySelectorAll("section");
  const revealOnScroll = () => {
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (sectionTop < windowHeight - 100) {
              section.classList.add("visible");
          }
      });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on page load

  // Basic Form Validation
  const form = document.querySelector("form");
  if (form) {
      form.addEventListener("submit", function (e) {
          e.preventDefault();
          const name = document.querySelector("input[name='name']").value.trim();
          const email = document.querySelector("input[name='email']").value.trim();
          const message = document.querySelector("textarea[name='message']").value.trim();

          if (name === "" || email === "" || message === "") {
              alert("Please fill out all fields.");
          } else {
              alert("Form submitted successfully!");
              form.reset();
          }
      });
  }
});
