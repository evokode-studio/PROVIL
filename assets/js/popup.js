// ---------------------
// 1️⃣ SELECCIONAMOS ELEMENTOS
// ---------------------
const popup = document.getElementById("popup");
const openButtons = document.querySelectorAll(".open-popup-btn");
const closeButton = document.querySelector(".popup-close");
const appointmentForm = document.getElementById("appointment-form");

// Se eliminó la variable "emergencyBtn" porque el botón ya no existe

// ---------------------
// 2️⃣ FUNCIONES ABRIR / CERRAR
// ---------------------
openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        popup.classList.add("show");
    });
});

closeButton.addEventListener("click", () => {
    popup.classList.remove("show");
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("show");
    }
});

// ---------------------
// 3️⃣ BOTÓN EMERGENCIA (ELIMINADO)
// ---------------------
// Se eliminó el listener para "emergencyBtn" porque ya no existe

// ---------------------
// 4️⃣ FORMULARIO WHATSAPP (CORREGIDO)
// ---------------------
appointmentForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Previene que el formulario se envíe de la forma tradicional

    // CORRECCIÓN: Cambiamos "service" por "specialty" para que coincida con el HTML
    const service = document.getElementById("specialty").value;
    const time = document.getElementById("time").value;

    // Verificamos que el usuario haya seleccionado algo
    if (service === "" || time === "") {
        alert("Por favor, selecciona un servicio y un horario.");
        return; // Detiene la ejecución si algo falta
    }

    const message = `Hola PROVIL, me gustaría solicitar una cotización.\n\nServicio de interés: ${service}\nHorario de preferencia: ${time}`;
    const whatsappNumber = "528713558980"; // Tu número de WhatsApp

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre el enlace de WhatsApp en una nueva pestaña
    window.open(whatsappURL, "_blank");
});