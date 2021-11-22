const menu = document.getElementById('nav__menu');
const enlaces = document.getElementById('nav__links')
let contador = 0;

menu.addEventListener('click', () => {
    if(contador === 0) {
        enlaces.className = ('nav__links dos');
        contador = 1;
    }else {
        enlaces.classList.remove('dos');
        enlaces.className = ('nav__links uno');
        contador = 0;
    }
})