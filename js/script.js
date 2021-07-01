

const burgerMenu = document.querySelector('.menu-btn'),
      openMenu = document.querySelector('.nav-menu');

let menuOpen = false;

burgerMenu.addEventListener('click', () => {
   if(!menuOpen){
    burgerMenu.classList.add('open');
    openMenu.classList.add('active');
    menuOpen = true;
   } else {
    burgerMenu.classList.remove('open');
    openMenu.classList.remove('active');
    menuOpen = false
   }
});



function ibg(){
  let ibg = document.querySelectorAll('.ibg');
  for(let i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
  }
}
ibg();
