const body = document.querySelector("body");
const header = document.querySelector("header");
const navbar = document.querySelector(".navbar")

let heightOffset = navbar.offsetHeight;





function fixNav() {
  if (window.scrollY > heightOffset) {
    header.style.paddingTop = `${heightOffset}px`;
    body.classList.add("fixed");
  } else {
    body.classList.remove("fixed");
    header.style.paddingTop = `0px`;
  }
};


window.addEventListener("scroll", fixNav);