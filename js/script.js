
const openMenu = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const closeLine1 = document.querySelector('.close-icon1');
const closeLine2 = document.querySelector('.close-icon2');
const lineMenu = document.querySelector('.line-menu');
const cards1 = document.querySelector('.cards-list1');
const cards2 = document.querySelector('.cards-list2');

openMenu.addEventListener('click', function () {

    menu.classList.toggle('open')
    closeLine1.classList.toggle('close-x')
    closeLine2.classList.toggle('close-x')
    lineMenu.classList.toggle('lines')


})


const navLink = document.querySelectorAll('.navLink')

function linkAction() {

    menu.classList.toggle('open')
    closeLine1.classList.toggle('close-x')
    closeLine2.classList.toggle('close-x')
    lineMenu.classList.toggle('lines')


}
navLink.forEach(n => n.addEventListener('click', linkAction))


const btnScroll = document.querySelector('.btnAncora');




function animeLeft(){
    window.addEventListener("scroll", function () {
        if (window.scrollY > 150) {
    
    
            cards1.classList.add('animeLeft');
    
        } else {
    
            cards1.classList.remove('animeLeft');
    
        }
    })
}


animeLeft()


function animeUp(){
    window.addEventListener("scroll", function () {
        if (window.scrollY > 700) {
    
    
            cards2.classList.add('animeUp');
    
        } else {
    
            cards2.classList.remove('animeUp');
    
        }
    })
    
}
animeUp()





window.addEventListener("scroll", function () {
    if (window.scrollY > 525) {
        btnScroll.classList.add('active')


    } else {
        btnScroll.classList.remove('active')

    }
})
