// ========NAVBAR AND NAVMENU============ //
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

// =============CAROUSEL AND ITS RESPECTIVE THUMBNAIL========== //
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
   showSlider('next');
}
prevDom.onclick = function() {
   showSlider('prev');
}

let timeRunning = 3000;
let runTimeOut;
function showSlider(type){
   let itemSlider = document.querySelectorAll('.carousel .list .item');
   let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

   if(type === 'next'){
      listItemDom.appendChild(itemSlider[0]);
      thumbnailDom.appendChild(itemThumbnail[0]);
      carouselDom.classList.add('next');
   }else{
      let positionLastItem = itemSlider.length - 1;
      listItemDom.prepend(itemSlider[positionLastItem]);
      thumbnailDom.prepend(itemThumbnail[positionLastItem]);
      carouselDom.classList.add('prev');
   }

   setTimeout(() => {
      carouselDom.classList.remove('next');
      carouselDom.classList.remove('prev');
   }, 2000);

}
