// Navbar responsive
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// Année dynamique dans le footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Faux envoi de formulaire (à remplacer par un backend ou un service externe)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "Envoi en cours...";
    setTimeout(() => {
      formStatus.textContent =
        "Message envoyé. Nous vous répondrons dans les meilleurs délais.";
      contactForm.reset();
    }, 800);
  });
}
