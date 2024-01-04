const menu = document.querySelector('#menu');
const background = document.querySelector('#page1');
const sidenav = document.querySelector('#sidenav');
const close = document.querySelector('#close');

menu.addEventListener('click', function(){
    background.style.transform = 'translateX(200px) scale(.8)';
    sidenav.style.left = '2%';

})

close.addEventListener('click', function(){
    background.style.transform = 'translateX(0px) scale(1)';
    sidenav.style.left = '-10%';
})