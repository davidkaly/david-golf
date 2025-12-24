

const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
let autoPlayInterval;

// function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// show the first slide
showSlide(currentIndex);

// next & prev
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// auto-play every 3 seconds
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 3000);
}

// stop auto-play
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// start autoplay on load
startAutoPlay();

// pause on hover
document.querySelector(".slider-container").addEventListener("mouseenter", stopAutoPlay);
document.querySelector(".slider-container").addEventListener("mouseleave", startAutoPlay);
