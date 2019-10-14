const body = document.querySelector("body");
const header = document.querySelector("header");


const navbar = document.querySelector(".navbar")
let heightOffset = navbar.offsetHeight;


window.addEventListener("scroll", fixNav);


function fixNav() {
    if (window.scrollY > heightOffset) {
        header.style.paddingTop = `${heightOffset}px`;
        body.classList.add("fixed");
        console.log(heightOffset);
    } else {
      body.classList.remove("fixed");
      header.style.paddingTop = `0px`;
    }
  };
  