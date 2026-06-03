const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");
const header = document.querySelector("#siteHeader");

const closeMenu = () => {
  if (!menuToggle || !mobileMenu) return;

  menuToggle.classList.remove("is-open");
  mobileMenu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
};

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("is-open");

    mobileMenu.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  if (!mobileMenu?.classList.contains("is-open")) return;
  if (mobileMenu.contains(event.target) || menuToggle?.contains(event.target)) return;

  closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

window.addEventListener("scroll", () => {
  if (!header) return;

  header.classList.toggle("is-scrolled", window.scrollY > 12);
});

if (window.AOS) {
  AOS.init({
    duration: 780,
    easing: "ease-out-cubic",
    once: true,
    offset: 70,
  });
}

if (window.lucide) {
  lucide.createIcons({
    strokeWidth: 1.8,
  });
}
