// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Image Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slideshow-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Dynamic Navigation Menu
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let navLinks = document.querySelectorAll(".menu li a");
  
  if (window.pageYOffset > 100) {
    header.classList.add("scroll");
    navLinks.forEach(link => {
      link.classList.add("scroll");
    });
  } else {
    header.classList.remove("scroll");
    navLinks.forEach(link => {
      link.classList.remove("scroll");
    });
  }
});
