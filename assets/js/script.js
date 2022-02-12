var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next-my",
        prevEl: ".swiper-button-prev-my",
    },
});



$(document).ready(function() {
    $('.gallery__inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});


// burger-menu

let burgerMenu = document.getElementById("burger__menu");

function toggleBurgerMenu() {
let burgerIcon = document.querySelector(".burger__icon");
let burgerClose = document.getElementById("burger__close");

burgerIcon.addEventListener("click", toggleMenu)
burgerClose.addEventListener("click", toggleMenu)
}

function toggleMenu() {
burgerMenu.classList.toggle("burger__menu-active")
}

toggleBurgerMenu()




// плавный скролл
let anchors = document.querySelectorAll("a[href*='#']")
console.log(anchors);
for(let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault()
    
    let blockID  = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
