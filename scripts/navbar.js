const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll(".nav-item");
const body = document.body;

//Toggle menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
});

//Close menu after clicking on the nav-item
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("overflow-hidden");
    activePage(item);
  });

  function activePage(item) {
    const activeLinks = document.querySelectorAll(".nav-item.active");

    if (activeLinks.length > 0) {
      activeLinks[0].classList.remove("active");
    }

    item.classList.add("active");
  }
});
