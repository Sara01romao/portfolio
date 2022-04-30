const menuOpen = document.querySelector("#menuOpen");
const menu = document.querySelector(".menu");
const socialIcons = document.querySelector('.social');

menuOpen.addEventListener("click", () => {
    menu.classList.toggle("open");
    
    if(menu.classList.contains('open')){
        console.log("open")
        socialIcons.style.zIndex="-1"
    }else{
        socialIcons.style.zIndex="initial"
    }

});
