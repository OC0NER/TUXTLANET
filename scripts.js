// JavaScript para el menú desplegable
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open"); // Agregar o quitar la clase "open" para mostrar/ocultar el menú
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slides.length;

// Función para mostrar el slide correspondiente
function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Función para pasar al siguiente slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Ciclo infinito
    showSlide(currentIndex);
}

// Función para volver al slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Ciclo infinito
    showSlide(currentIndex);
}

// Agregar eventos a los botones
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Cambio automático cada 5 segundos
setInterval(nextSlide, 5000);