var swiper = new Swiper('.mySwiper', {
  breakpoints: {
    // when window width is >= 480px
    350: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.forward',
        prevEl: '.back',
      },
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.forward',
        prevEl: '.back',
      },
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.forward',
        prevEl: '.back',
      },
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.forward',
        prevEl: '.back',
      },
    },
  },
})

var swiper1 = new Swiper('.mySwiper-2', {
  breakpoints: {
    // when window width is >= 480px
    350: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.forward-2',
        prevEl: '.back-2',
      },
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.forward-2',
        prevEl: '.back-2',
      },
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.forward-2',
        prevEl: '.back-2',
      },
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.forward-2',
        prevEl: '.back-2',
      },
    },
  },
})






/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}