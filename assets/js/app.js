document.addEventListener("DOMContentLoaded", () => {
  const navItems = ["Home", "About", "Tutors", "Location", "Register"];
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section");

  // Dynamically build the navigation
  navItems.forEach((item, index) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = item;
    a.href = `#section${index + 1}`;
    li.appendChild(a);
    navbar.appendChild(li);
  });

  // Add active class to section and highlight nav link when near top of viewport
  function setActiveSection() {
    sections.forEach(function (section, index) {
      const rect = section.getBoundingClientRect();
      const link = navbar.querySelectorAll("a")[index];

      if (rect.top >= -50 && rect.top < 250) {
        section.classList.add("active");
        link.classList.add("active-link");
      } else {
        section.classList.remove("active");
        link.classList.remove("active-link");
      }
    });
  }

  // Scroll to section on link click
  navbar.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName === "A") {
      const targetSection = document.querySelector(
        event.target.getAttribute("href")
      );
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Set active section on scroll
  document.addEventListener("scroll", setActiveSection);
  // Initial call to set active section
  setActiveSection();
});
