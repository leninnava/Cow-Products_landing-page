let navRight = document.querySelector("#navbar__right");
let navRightButton = document.querySelector(".navbar__logo");

navRightButton.addEventListener("click", function () {
    navRight.classList.toggle("navbar__section-toggle");
});