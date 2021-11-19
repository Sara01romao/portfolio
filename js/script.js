const btnOpen = document.querySelector('#open');
const btnClose = document.querySelector('#close');
const menu = document.querySelector('.menu');

btnOpen.addEventListener('click', function (){
   menu.classList.remove('close')
   menu.style.display = "block";
})

btnClose.addEventListener('click', function (){
    menu.classList.add('close')
   

})


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
   menu.style.display = "none";
}
navLink.forEach(n => n.addEventListener('click', linkAction))
