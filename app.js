// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 

let amigos = [];

// 2. Funcition agregar  amigo
function agregarAmigo() {
   
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar  nombre
    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    // Actualizar 
    amigos.push(nombre);

    // Limpiar el campo
    input.value = "";

   
    mostrarLista();
}


function mostrarLista() {
    // elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// 4. funtion  para sortear un amigo al azar
function sortearAmigo() {
    // Validar que haya al menos un nombre 
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    // Calcular  aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo secreto: <strong>${amigoSecreto}</strong></li>`;
}