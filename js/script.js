// 1. EFECTO STICKY PARA EL HEADER
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. ANIMACIÓN DEL TEXTO (El título que se escribe solo)
// Nota: Ajusté los textos en 3 renglones como querías para el diseño final
if (document.querySelector('#texto-animado')) {
    var typed = new Typed('#texto-animado', {
        // Cada palabra separada por comas es una frase nueva que entra y sale
        strings: ['creativo', 'estratégico', 'comprometido'],
        typeSpeed: 60,       // Velocidad al escribir
        backSpeed: 40,       // Velocidad al borrar
        backDelay: 1500,     // Cuánto tiempo se queda la palabra armada antes de borrarse (en milisegundos)
        loop: true,          // Activa el bucle infinito
        showCursor: true,    // Muestra el cursor parpadeando
        cursorChar: '|'      // Forma del cursor
    });
}

// 3. ANIMACIÓN DE LOS NÚMEROS (Los contadores de años y clientes)
const contadores = document.querySelectorAll('span[data-target]');

contadores.forEach(contador => {
    const actualizarContador = () => {
        const objetivo = +contador.getAttribute('data-target');
        const actual = +contador.innerText;
        const incremento = objetivo / 50; 

        if (actual < objetivo) {
            contador.innerText = Math.ceil(actual + incremento);
            setTimeout(actualizarContador, 40);
        } else {
            contador.innerText = objetivo;
        }
    };
    actualizarContador();
});