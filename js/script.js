// Toogle Kelas Active
const navbarNav = document.querySelector(".navbar-nav");

// humberger menu di klik
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Navbar Scroll
document.addEventListener("scroll", function () {
  var header = document.getElementById("navbar");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 30) {
    header.style.backgroundColor = "#5a0020";
    header.style.transition =
      "background-color ease-in 0.4s, color ease-in 0.5s";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// Accordion bantuan
let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
accordions.forEach((acco) => {
  acco.onclick = () => {
    acco.classList.toggle("active");
  };
});

// Accordian layanan
let layananList = document.querySelectorAll(".layanan-box .content-item .list");
layananList.forEach((layanan) => {
  layanan.onclick = () => {
    layanan.classList.toggle("active");
  };
});

// Acordion
function toggleAccordion(accordionNumber) {
  var accordionContainer = document.getElementById(
    "accordion" + accordionNumber
  );
  var accordionBox = accordionContainer.querySelector(".accordion-box");
  var accordionContent = accordionContainer.querySelector(".content");

  // Toggle the active class on the clicked accordion
  accordionBox.classList.toggle("active");

  // Hide all other accordion content
  var allAccordionContainers = document.querySelectorAll(
    ".accordion-container"
  );
  allAccordionContainers.forEach(function (container) {
    if (container !== accordionContainer) {
      container.querySelector(".accordion-box").classList.remove("active");
      container.querySelector(".content").classList.remove("active");
    }
  });

  // Toggle the active class on the clicked accordion content
  accordionContent.classList.toggle("active");
}
