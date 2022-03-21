//mobile drop-down menu function
const mobileMenu = document.querySelector(".mobileMenu");
const navBar = document.querySelector(".hidden");

mobileMenu.addEventListener("click", function () {
  navBar.classList.toggle("hidden");
});
