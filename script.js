let temaActual = 'claro';
const botonTema = document.querySelector('#botonTema');
const saludoElemento =  document.querySelector('#saludo');

function cambiarTema() {
    console.log('Cambiando tema...');
    document.body.classList.toggle('modo-oscuro');
    temaActual = temaActual === 'claro' ? 'oscuro' : 'claro';
    botonTema.textContent = temaActual === 'claro' ? '🌙 Modo oscuro' : '☀ Modo claro';
}

function saludar() {
    const horaActual = new Date().getHours();
    console.log('Obteniendo hora actual:', horaActual);
    if (horaActual >= 6 && horaActual < 12) {
        saludoElemento.textContent = 'Buenos días';
    } else if (horaActual >= 12 && horaActual < 18) {
        saludoElemento.textContent = 'Buenas tardes'; 
    } else {
        saludoElemento.textContent = 'Buenas noches';
    }
    

}


botonTema.addEventListener('click', cambiarTema);
saludar();