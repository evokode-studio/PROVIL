// Este código se ejecuta cuando la página ha cargado completamente
document.addEventListener('DOMContentLoaded', function() {

    // 1. Seleccionamos el botón y el campo de texto por sus IDs
    const submitButton = document.getElementById('footer-submit-btn');
    const inputField = document.getElementById('footer-input');

    // 2. Creamos una función que se ejecutará al hacer clic en el botón
    submitButton.addEventListener('click', function() {
        
        // 3. Obtenemos el texto que el usuario escribió en el campo
        const message = inputField.value;

        // 4. Definimos el correo destinatario y el asunto
        const recipientEmail = 'grupovilz.11@gmail.com';
        const subject = 'Consulta desde la Página Web';

        // 5. Codificamos el asunto y el cuerpo para que sean seguros en una URL
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(message);

        // 6. Construimos el enlace mailto completo
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

        // 7. Le decimos al navegador que abra este enlace (lo que abrirá el cliente de correo)
        window.location.href = mailtoLink;
    });
});