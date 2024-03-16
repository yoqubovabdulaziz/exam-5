const header = document.querySelector("header");

const menuBtn = document.querySelector(".navbar__menu");
const katalog = document.querySelector(".nav__katalog");

const menuTop = document.querySelector(".menu__top");
const menuCenter = document.querySelector(".menu__center");
const menuBottom = document.querySelector(".menu__bottom");

let isOpen = false;

menuBtn.addEventListener("click", function () {
  isOpen = !isOpen;
  if (isOpen) {
    katalog.style.top = "0";

    menuCenter.style.display = "none";
    menuTop.style = `
      transform: rotate(130deg);
      top: 14px;
    `;
    menuBottom.style = `
      transform: rotate(-130deg);
      bottom: 17px;
    `;
  } else {
    katalog.style.top = "-100%";

    menuCenter.style.display = "block";
    menuTop.style = `
      transform: rotate(0deg);
      top: 6px;
    `;
    menuBottom.style = `
      transform: rotate(0deg);
      bottom: 9px;
    `;
  }
});

window.addEventListener("scroll", function () {
  navbarShrink();
});

function navbarShrink() {
  if (scrollY > 82) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
}
