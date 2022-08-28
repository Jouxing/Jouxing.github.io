// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-aktiv");
  navMenu.classList.toggle("hidden");
});
// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const backtop = document.querySelector("#backtop");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");

    backtop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    backtop.classList.add("hidden");
  }
};
// diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-aktiv");
    navMenu.classList.add("hidden");
  }
});

// darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");

const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});
// pindahkan posisi togle
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
