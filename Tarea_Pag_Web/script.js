// El script se activa cuando el HTML está completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

    // Referencias a los elementos del DOM que vamos a usar.
    const video = document.getElementById('main-video');
    const pauseButton = document.getElementById('pause-button');

    // Asignar la función al evento 'click' del botón.
    pauseButton.addEventListener('click', () => {
        // Revisa si el video está pausado y actúa en consecuencia.
        if (video.paused) {
            video.play();
            pauseButton.innerHTML = '❚❚'; // Cambia el ícono a 'pausa'
        } else {
            video.pause();
            pauseButton.innerHTML = '▶'; // Cambia el ícono a 'reproducir'
        }
    });

});