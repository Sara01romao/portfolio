const menuOpen = document.querySelector("#menuOpen");
const menu = document.querySelector(".menu");
const socialIcons = document.querySelector(".social");
const navLink = document.querySelectorAll(".navLink");
const projects = document.querySelector(".projects")

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

//close menu 
function linkAction() {
  menu.classList.toggle("open");
  menuOpen.classList.toggle("open");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


//anime
/* function animeUp(){
  window.addEventListener("scroll", function () {
      if (window.scrollY > 650) {
  
  
        projects.add('animeUp');
  
      } else {
  
        projects.remove('animeUp');
  
      }
  })
}


animeUp()
 */