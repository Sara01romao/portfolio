const menuOpen = document.querySelector(".menuOpen");
const menu = document.querySelector(".menu");
const socialIcons = document.querySelector(".social");
const navLink = document.querySelectorAll(".navLink");
const projects = document.querySelector(".projects");

const closeIcon = document.querySelector(".closeIcon");

menuOpen.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuOpen.classList.toggle("open");  
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