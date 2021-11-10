let btnOpen = document.querySelector('#open');
let btnClose = document.querySelector('#close');

btnOpen.addEventListener('click', function (){
    document.querySelector('.menu').style.display = "block";
})

btnClose.addEventListener('click', function (){
    document.querySelector('.menu').style.display = "none";
})


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    document.querySelector('.menu').style.display = "none";
}
navLink.forEach(n => n.addEventListener('click', linkAction))
