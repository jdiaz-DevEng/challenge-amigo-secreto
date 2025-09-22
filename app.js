let amigos = [];

let maxAmigos = 10;

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre =input.ariaValueMax.trim();
    let regex = /^[a-zA-Z-áéíóúÁÉÍÓÚñÑ\s]+$/;

    if (nombre ==="" || !isNaN(nombre)) {
        alert("Por favor, ingrese un nombre válido");
        input.value = "";
        return;
    }

    if (!regex.test(nombre)) {
        alert("Por favor, ingrese un nombre válido");
        input.value = "";
        return;
    }

    if (amigos.includes(nombre)) {
        alert("El nombre ya existe en la lista");
        input.value = "";
        return;
    }

    if (amigos.length >= maxAmigos) {
        alert("Solo se pueden agregar" + maxAmigos + "amigos");
        input.value = "";
        return;
    }
    
}
