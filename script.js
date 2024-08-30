// Arreglos de nombres y comentarios
const nombres = ["Santos", "Ana", 
                "Carlos", "Carmen",
                 "Gustavo",  "Irene", 
                  "Luis", "Ester", 
                  "Jose", "Diana"];

const comentarios = [
    "Excelente servicio, muy recomendable.",
    "El contenido del curso es muy completo y fácil de seguir.",
    "Me ha gustado mucho la metodología de enseñanza.",
    "Los profesores son muy atentos y resuelven dudas rápidamente.",
    "Buena relación calidad-precio.",
    "Recomendaría este sitio a mis amigos.",
    "El diseño del curso es intuitivo y fácil de usar.",
    "El soporte técnico fue muy útil.",
    "Estoy muy satisfecho con lo aprendido.",
    "La plataforma es muy estable y segura."
];

// Función para obtener elementos aleatorios del arreglo
function getRandomElements(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Seleccionar 3 nombres y 3 comentarios al azar
const randomNames = getRandomElements(nombres, 3);
const randomComments = getRandomElements(comentarios, 3);

// Mostrar los comentarios en el área de comentarios

const seccionComentarios = document.getElementById('seccionComentarios');
randomNames.forEach((nombre, index) => {
    const comentario = document.createElement('div');
    comentario.classList.add('comentario', 'mb-3');
    comentario.innerHTML = `<strong>${nombre}:</strong> <p>${randomComments[index]}</p>`;
    seccionComentarios.appendChild(comentario);
});

// Manejo del envio formulario de contacto
const formularioContacto = document.getElementById('formularioContacto');
formularioContacto.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const nac = document.getElementById('nac').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validamos los campos del formulario 
    if (nombre && nac && email && mensaje) {

        // Mostrar los datos en la consola
        console.log(`Nombre: ${nombre}`);
        console.log(`Fecha de Nacimiento: ${nac}`);
        console.log(`Correo Electrónico: ${email}`);
        console.log(`Mensaje: ${mensaje}`);
        
        // Mostrar modal de confirmación
        const confirmationModal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
        confirmationModal.show();
    }
});
