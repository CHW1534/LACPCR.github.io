// Cambiar el texto del producto al pasar el ratón sobre él
const products = document.querySelectorAll('.product');

products.forEach((product) => {
    product.addEventListener('mouseover', () => {
        const title = product.querySelector('.product-title');
        const info = product.querySelector('.product-info');

        title.style.display = 'none';
        info.style.display = 'block';
    });

    product.addEventListener('mouseout', () => {
        const title = product.querySelector('.product-title');
        const info = product.querySelector('.product-info');

        title.style.display = 'block';
        info.style.display = 'none';
    });
});

// CODIGO SLIDE
let currentSlide = 0;
showSlides(currentSlide);

function changeSlide(n) {
    showSlides(currentSlide += n);
}

function showSlides(n) {
    const sliderContainer = document.querySelector('.image-slider');
    const slides = sliderContainer.querySelectorAll('img');

    // Ordena aleatoriamente las imágenes
    const shuffledSlides = Array.from(slides).sort(() => Math.random() - 0.2);

    if (n >= shuffledSlides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = shuffledSlides.length - 1;
    } else {
        currentSlide = n;
    }

    shuffledSlides.forEach((slide) => {
        slide.style.opacity = 0;
    });

    shuffledSlides[currentSlide].style.opacity = 1;
}

// Transición automática POR segundos
setInterval(() => {
    changeSlide(1); // Cambia a la siguiente imagen
}, 1000); // Cambié el intervalo a 5 segundos

//OFERTAS EN INDEX
function redireccionarAOfertas() {
    window.location.href = "ofertas.html";
}



//pie pag pagos ids//
document.addEventListener('DOMContentLoaded', function () {
  // Obtener el pie de página
  const footer = document.getElementById('page-footer');

  // Función para mostrar u ocultar el pie de página
  function toggleFooterVisibility() {
      // Mostrar el pie de página solo cuando el usuario haya llegado al final de la página
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          footer.style.display = 'block';
      } else {
          footer.style.display = 'none';
      }
  }

  // Agregar un evento de desplazamiento para llamar a la función
  window.addEventListener('scroll', toggleFooterVisibility);

  // Llamar a la función al cargar la página
  toggleFooterVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
    var productosBtn = document.getElementById("productosBtn");
    var productosMenu = document.getElementById("productosMenu");

    productosBtn.addEventListener("click", function () {
        productosMenu.style.display = (productosMenu.style.display === "block") ? "none" : "block";
    });
});
function showImage(newSrc) {
    document.getElementById('productImage').src = newSrc;
}



document.addEventListener("scroll", function() {
    var productos = document.querySelectorAll(".producto");
    
    productos.forEach(function(producto) {
      if (isElementInViewport(producto)) {
        producto.classList.add("aparecer");
      }
    });
  });
  
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  