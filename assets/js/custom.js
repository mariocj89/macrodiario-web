
// navbar js
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
        nav.removeAttribute("style");
    }
} 




// Auto,HandSwipe,dotted,next_preview icon reviews slider
var slideIndex = 1;
showSlides(slideIndex);

var slideshowContainer = document.querySelector('.slideshow-container');
var hammer = new Hammer(slideshowContainer);

hammer.on('swipeleft swiperight', function (event) {
  if (event.type === 'swipeleft') {
    plusSlides(1);
  } else if (event.type === 'swiperight') {
    plusSlides(-1);
  }
});

var autoSlideInterval = setInterval(function() {
  plusSlides(1);
}, 80000);

slideshowContainer.addEventListener('click', function() {
  clearInterval(autoSlideInterval);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
