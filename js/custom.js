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
$(function () {
	var headerHight = $("header").height() + 50;

	$('a[href^="#"]').click(function(e) {
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - headerHight;

		$.when(
			$("html, body").animate({
				scrollTop: position
			}, 400, "swing"),
			e.preventDefault(),
		).done(function() {
 			var diff = target.offset().top - headerHight;
 			if (diff === position) {
			} else {
				$("html, body").animate({
				scrollTop: diff
				}, 10, "swing");
			}
		});
	});
});


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