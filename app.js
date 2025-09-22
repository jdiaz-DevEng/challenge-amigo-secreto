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

    amigos.push(nombre);

    mostrarAmigos();

    input.value = "";
}

function mostrarAmigos(indiceActual = 0) {
    let lista = document.getElementById("listaAmigos");

    if (indiceActual === 0) {
        lista.innerHTML = "";
    }

    if (indiceActual>=amigos.length) {
        return;
    }

    lista.innerHTML += `<li>${amigos[indiceActual]}</li>`;

    mostrarAmigos(indiceActual + 1);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear");
        return;
    }

    let indice = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    amigos =[];
    document.getElementById("resultado").innerText = `El amigo secreto es: ${amigoSorteado}`;
}
