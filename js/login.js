// Obtenemos el formulario.
var formulario = document.querySelector(".formulario");
// Obtenemos los campos del formulario.
var correo = document.getElementById("correo");
var contrasena = document.getElementById("contrasena");
var edad = document.getElementById("edad");
// Obtenemos el mensaje de error.
var mensajeError = document.getElementById("mensajeError");
// Botón para mostrar u ocultar la contraseña.
var btnVerContra = document.getElementById("btnVerContra");
// Validamos los datos cuando se envía el formulario.
formulario.addEventListener("submit", function(event) {
event.preventDefault();

    var correoValido = validarCorreo(correo.value);
    var contrasenaValida = validarContra(contrasena.value);
    var mayorDeEdad = esMayorDeEdad(edad.value);

    mensajeError.textContent = "";
    if (correoValido && contrasenaValida && mayorDeEdad) {
        window.location.href = "bienvenida.html";
    } else {
        if (!correoValido) {
    mensajeError.textContent = "El correo no tiene un formato válido.";
        } else if (!contrasenaValida) {
            mensajeError.textContent = "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
        } else if (!mayorDeEdad) {
 mensajeError.textContent = "Debes ser mayor de 18 años para ingresar.";

}

}

});

// Mostrar u ocultar la contraseña.
btnVerContra.addEventListener("click", function() {
    if (contrasena.type === "password") {
        contrasena.type = "text";
        btnVerContra.textContent = "Ocultar";
} else {
contrasena.type = "password";
btnVerContra.textContent = "Ver";
}
});