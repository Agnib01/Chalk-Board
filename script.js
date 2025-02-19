document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to NextGen Tutorials!");

    const sections = document.querySelectorAll(".section");
    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (position < screenHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });

    // Initial animation setup
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.6s ease-out";
    });
});
