document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");
  const mainSections = document.querySelectorAll(".page-section");
  const collections = document.querySelectorAll(".collection-section");

  // Show About by default
  mainSections.forEach(s => s.classList.remove("active"));
  document.getElementById("about").classList.add("active");

  // Navbar click
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
    });
  });

  // Explore buttons
  document.querySelectorAll(".btn-explore").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-page");

      mainSections.forEach(s => s.classList.remove("active"));
      collections.forEach(c => c.classList.remove("active"));

      document.getElementById(targetId)?.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});

// Unified openCollection for gallery & projects
function openCollection(id) {
  // Hide all main sections and other collections
  document.querySelectorAll(".page-section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".collection-section").forEach(c => c.classList.remove("active"));

  const section = document.getElementById(id);
  if (section) {
    section.classList.add("active");
    section.style.display = "flex"; // ensures overlay style works
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Unified goBack for gallery & projects
function goBack() {
  document.querySelectorAll(".collection-section").forEach(c => {
    c.classList.remove("active");
    c.style.display = "none";
  });

  // Optionally, go back to gallery section if needed
  const gallery = document.getElementById("gallery");
  if (gallery) gallery.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Optional: close modal on clicking outside content
document.querySelectorAll('.collection-section').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) goBack();
  });
});
function goBackToProjects() {
  // Hide all project collections
  document.querySelectorAll('.collection-section').forEach(col => {
    col.classList.remove('active');
    col.style.display = "none";
  });

  // Show projects section
  const projects = document.getElementById('projects');
  if (projects) {
    projects.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.sidebar'); // sidebar as mobile menu

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active'); // make sure CSS uses .active to show sidebar
    });
  }

  // Close sidebar when a link is clicked
  document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        mobileNav.classList.remove("active");
      }
    });
  });
});



// Close menu when a link is clicked (mobile UX improvement)
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navbar.classList.remove("open");
    }
  });
});
