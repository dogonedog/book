'use strict';

  const swiper = new Swiper('.swiper', {
    loop: true,
    resizeObserver: false,
    height: 480,
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 2500,
    },
  });

$(function() {
  $('.main-nav a').on('click', function(event){
    $('#drawer-check').prop('checked', false);
    });
  });

    // scroll
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
       let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 100;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

function load_effect(){
 let element = document.getElementsByClassName('load-fade');
 if(!element) return;

 for(let i = 0; i < element.length; i++){
  element[i].classList.add('is-show');
    }
  }

setTimeout(load_effect, 600);


function scroll_effect() {
  let element = document.getElementsByClassName('scroll-up');
  if(!element) return;
                      
  let scrollY = window.pageYOffset;
  let windowH = window.innerHeight;
  let showTiming = 200; // 要素を表示するタイミング
  for(var i = 0; i < element.length; i++) { 
    let elemClientRect = element[i].getBoundingClientRect(); 
    let elemY = scrollY + elemClientRect.top; 
    if(scrollY > elemY - windowH + showTiming) {
      element[i].classList.add('is-show');
    }
  }
}
window.addEventListener('scroll', scroll_effect); // スクロール時に実行