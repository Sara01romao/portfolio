
const openMenu = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const closeLine1=document.querySelector('.close-icon1');
const closeLine2=document.querySelector('.close-icon2');
const lineMenu = document.querySelector('.line-menu');




openMenu.addEventListener('click', function(){
   
    menu.classList.toggle('open')
    closeLine1.classList.toggle('close-x')
    closeLine2.classList.toggle('close-x')
    lineMenu.classList.toggle('lines')

   
})






// const btnOpen = document.querySelector('#open');
// const btnClose = document.querySelector('#close');
// const menu = document.querySelector('.menu');

// btnOpen.addEventListener('click', function (){
//    menu.classList.remove('close')
//    menu.style.display = "block";
// })

// btnClose.addEventListener('click', function (){
//     menu.classList.add('close')
   

// })


const navLink = document.querySelectorAll('.navLink')

function linkAction(){
   
    menu.classList.toggle('open')
    closeLine1.classList.toggle('close-x')
    closeLine2.classList.toggle('close-x')
    lineMenu.classList.toggle('lines')

   
}
navLink.forEach(n => n.addEventListener('click', linkAction))