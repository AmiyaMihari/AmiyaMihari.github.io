// Espera a que todo el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', () => {

    // Seleccionamos el video y el botón por su ID
    const video = document.getElementById('main-video');
    const pauseButton = document.getElementById('pause-button');

    // Añadimos un "escuchador de eventos" que se activa cuando hacemos clic en el botón
    pauseButton.addEventListener('click', () => {
        // Si el video está en pausa...
        if (video.paused) {
            // ...lo reproducimos
            video.play();
            // y cambiamos el ícono del botón a "pausa"
            pauseButton.innerHTML = '❚❚';
        } else { // Si el video se está reproduciendo...
            // ...lo pausamos
            video.pause();
            // y cambiamos el ícono del botón a "reproducir"
            pauseButton.innerHTML = '▶';
        }
    });

});