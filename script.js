document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");
  const mainSections = document.querySelectorAll(".page-section");
  const collections = document.querySelectorAll(".collection-section");
  const exploreBtns = document.querySelectorAll(".btn-explore");
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.navbar');

  // Show About by default
  mainSections.forEach(s => s.classList.remove("active"));
  document.getElementById("about")?.classList.add("active");

  // NAVBAR CLICK
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("data-page");

      mainSections.forEach(s => s.classList.remove("active"));
      collections.forEach(c => c.classList.remove("active"));
      document.getElementById(targetId)?.classList.add("active");

      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      window.scrollTo({ top: 0, behavior: "smooth" });

      if (window.innerWidth <= 768) {
        mobileNav.classList.remove("active"); // close mobile menu
      }
    });
  });

  // EXPLORE BUTTONS
  exploreBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-page");

      mainSections.forEach(s => s.classList.remove("active"));
      collections.forEach(c => c.classList.remove("active"));
      document.getElementById(targetId)?.classList.add("active");

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // COLLECTIONS
  function openCollection(id) {
    mainSections.forEach(s => s.classList.remove("active"));
    collections.forEach(c => c.classList.remove("active"));

    const section = document.getElementById(id);
    if (section) {
      section.classList.add("active");
      section.style.display = "flex";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.openCollection = openCollection;

  function goBack() {
    collections.forEach(c => {
      c.classList.remove("active");
      c.style.display = "none";
    });

    const gallery = document.getElementById("gallery");
    if (gallery) gallery.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.goBack = goBack;

  function goBackToProjects() {
    collections.forEach(c => {
      c.classList.remove("active");
      c.style.display = "none";
    });

    const projects = document.getElementById("projects");
    if (projects) projects.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.goBackToProjects = goBackToProjects;

  // Close modal on clicking outside content
  collections.forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) goBack();
    });
  });

  // MOBILE MENU TOGGLE
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  }
});
