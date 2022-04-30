const menuOpen = document.querySelector("#menuOpen");
const menu = document.querySelector(".menu");
const socialIcons = document.querySelector(".social");
const navLink = document.querySelectorAll(".navLink");

menuOpen.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuOpen.classList.toggle("open");

  if (menu.classList.contains("open")) {
    console.log("open");
    socialIcons.style.zIndex = "-1";
  } else {
    socialIcons.style.zIndex = "initial";
  }
});

function linkAction() {
  menu.classList.toggle("open");
  menuOpen.classList.toggle("open");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
