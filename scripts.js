const paginas = document.querySelectorAll('.pagina');
let paginaActual = 0;




function mostrarPagina() {
  paginas[paginaActual].style.display = 'block';
  setTimeout(() => {
    paginas[paginaActual].style.opacity = '1';
  }, 80); /*retraso*/
  setTimeout(() => {
    aplicarDesenfoque();
    ocultarPagina();
  }, 3500);/* tiempo mostrar pagina */
}

function aplicarDesenfoque() {
  const paginaAnterior = paginaActual === 0 ? paginas[paginas.length - 1] : paginas[paginaActual - 1];
  paginaAnterior.style.filter = 'blur(10px)';
}

function ocultarPagina() {
  paginas[paginaActual].style.opacity = '0';
  setTimeout(() => {
    paginas[paginaActual].style.display = 'none';
    const paginaAnterior = paginaActual === 0 ? paginas[paginas.length - 1] : paginas[paginaActual - 1];
    paginaAnterior.style.filter = 'none';
    paginaActual = (paginaActual + 1) % paginas.length;
    mostrarPagina();
  }, 200); /* retraso suavidad */
}

mostrarPagina();

/* fondo dinamico */
const backgrounds = [
  'img/fondo1.jpg',
  'img/fondo2.jpg',
  'img/fondo3.jpg',
];

let currentBackgroundIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

// Cambiar el fondo cada x segundos
setInterval(changeBackground, 9200);

// Cambiar el fondo inicial
changeBackground();



