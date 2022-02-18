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