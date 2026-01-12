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

// HERO background 3D slider
const heroSlides = document.querySelectorAll(".hero-bg-slide");

if (heroSlides.length > 0) {
  let currentIndex = 0;
  const slideInterval = 6000; // 6s

  // Init
  heroSlides[currentIndex].classList.add("is-active");

  const goToSlide = (nextIndex) => {
    const currentSlide = heroSlides[currentIndex];
    const nextSlide = heroSlides[nextIndex];

    // retire anciens états
    heroSlides.forEach((slide) => {
      slide.classList.remove("is-leaving-left", "is-leaving-right");
    });

    // animation de sortie
    currentSlide.classList.remove("is-active");
    currentSlide.classList.add("is-leaving-left");

    // petit délai pour permettre la transition (optionnel)
    requestAnimationFrame(() => {
      nextSlide.classList.add("is-active");
    });

    currentIndex = nextIndex;
  };

  setInterval(() => {
    const nextIndex = (currentIndex + 1) % heroSlides.length;
    goToSlide(nextIndex);
  }, slideInterval);
}
