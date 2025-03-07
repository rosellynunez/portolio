// MODO CLARO-OSCURO
const cambiarTema = () => {
  const body = document.documentElement;
  const icono = document.querySelector(".icon-vibe");
  const label = document.querySelector(".btn-vibe .label");

  const esModoClaro = body.getAttribute("data-bs-theme") === "light";

  // Cambia el tema en el body
  body.setAttribute("data-bs-theme", esModoClaro ? "dark" : "light");

  // Cambia el icono del botón
  icono.outerHTML = esModoClaro ? iconoOscuro : iconoClaro;

  // Cambia el texto del botón
  label.textContent = esModoClaro ? "Switch to Sunshine Mode" : "Switch to Cosmic Mode";
};

const iconoOscuro = `
  <svg xmlns="http://www.w3.org/2000/svg"
    width="16" 
    height="16" 
    fill="#fab04e" 
    class="icon-vibe" 
    viewBox="0 0 16 16">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.2 4.2 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A3 3 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515zM4.969 9.75A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z"/>
  </svg>`;
  
const iconoClaro = `
  <svg xmlns="http://www.w3.org/2000/svg"
    width="16" 
    height="16" 
    fill="#23005C" 
    class="icon-vibe" 
    viewBox="0 0 16 16">
      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278">
  </svg>`;

// TYPED-OUTPUT
document.addEventListener('DOMContentLoaded', function() {
    var options = {
      strings: [
        "design interfaces that delight 🎨",
        "craft experiences that captivate 🚀",
        "build design systems that scale 🛠️"
      ],
      typeSpeed: 50,  // Velocidad de escritura un poco más rápida
      backSpeed: 40,  // Borra más rápido
      backDelay: 1200, // Menos pausa antes de borrar
      startDelay: 300,  // Menos espera inicial
      loop: true,
      showCursor: true
    };
  
    new Typed("#typed-output", options);
  });

// MENU MOBILE OVERLAY
const toggleButton = document.querySelector('.navbar-toggler');
const toggleText = document.querySelector('#menu-style');
const overlay = document.getElementById('menu-overlay');

// Muestra/oculta el overlay y cambia el texto del botón
toggleButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  // Verifica si el overlay está activo
  const isOverlayActive = overlay.classList.contains('active');
  
  // Muestra/oculta el overlay y cambia el texto del botón
  if (isOverlayActive) {
    overlay.classList.remove('active');
    toggleText.textContent = 'MENU';
  } else {
    overlay.classList.add('active');
    toggleText.textContent = 'CLOSE';
  }
});

// Cierra el overlay al hacer clic en un enlace
document.querySelectorAll('.overlay-menu a').forEach(link => {
  link.addEventListener('click', function() {
    overlay.classList.remove('active');
    toggleText.textContent = 'MENU';
  });
});

// Cierra el menú cuando se cambia a modo escritorio
window.addEventListener('resize', function() {
  if (window.innerWidth >= 992) {
    overlay.classList.remove('active');
    toggleText.textContent = 'MENU';
  }
});

// NAVBAR SCROLL
document.addEventListener('DOMContentLoaded', function() {
  // Solo ejecuta si existe la navbar en la página
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
});

// for home
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 200); // Retrasa cada línea 200ms para un efecto escalonado
      }
    });
  }, { threshold: 0.3 }); // Se activa cuando el 30% del elemento es visible

  elements.forEach((el) => observer.observe(el));
});


// for about me page
document.addEventListener("DOMContentLoaded", function () {
  const highlights = document.querySelectorAll(".spotlight");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Agrega la clase cuando entra en la vista
        }
      });
    },
    { threshold: 0.9 } // Se activa cuando el 90% del elemento está visible
  );

  highlights.forEach((el) => observer.observe(el));
});

