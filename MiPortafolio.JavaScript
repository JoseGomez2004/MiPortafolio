function filtrarProyectos() {
    const busqueda = document.getElementById('busqueda').value.toLowerCase();
    const proyectos = document.querySelectorAll('.proyecto');

    proyectos.forEach(proyecto => {
        const titulo = proyecto.querySelector('h3').textContent.toLowerCase();
        if (titulo.includes(busqueda)) {
            proyecto.style.display = 'block';
        } else {
            proyecto.style.display = 'none';
        }
    });
}
