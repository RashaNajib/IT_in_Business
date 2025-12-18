// Slider functionality
let currentSlideIndex = 1;
let slideTimer;

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
    autoSlide();
});

function changeSlide(n) {
    clearTimeout(slideTimer);
    showSlide(currentSlideIndex += n);
    autoSlide();
}

function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlide(currentSlideIndex = n);
    autoSlide();
}

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    
    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    if (slides[currentSlideIndex - 1]) {
        slides[currentSlideIndex - 1].style.display = 'flex';
    }
    if (dots[currentSlideIndex - 1]) {
        dots[currentSlideIndex - 1].classList.add('active');
    }
}

function autoSlide() {
    slideTimer = setTimeout(() => {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
        autoSlide();
    }, 5000); // Change slide every 5 seconds
}