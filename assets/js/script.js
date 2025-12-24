const btnMobile = document.querySelector(".btn-mobile");
const navLinks = document.querySelector(".link-mobile");
const icon = document.querySelector(".btn-mobile i");

btnMobile.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  icon.classList.toggle("fa-times");
  icon.classList.toggle("fa-bars");
});
