const slider = document.getElementById('slider');
const slides = slider.children;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');
        
let currentSlide = 0;
const totalSlides = slides.length;
        
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
}
        
const dots = document.querySelectorAll('.dot');

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}
 
function goToSlide(n) {
  currentSlide = n;
  updateSlider();
}
        
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}
        
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}
        
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});
