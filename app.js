// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables
let amigos = [];
let agregoAmigo = "";

//Recibiendo una lista de nombres (arreglo).
/*function agregarAmigo(){
    let agregoAmigo = document.getElementById('amigo').value;
    return amigosAgregados.push(agregoAmigo);
}

console.log(amigosAgregados);*/

/*function agregarAmigo() {
    let agregoAmigo = document.getElementById('amigo').value.trim();
    if (agregoAmigo === "") {
        alert("Por favor, introduce un nombre válido.");
        return;
    }
    amigosAgregados.push(agregoAmigo);
    document.getElementById('amigo').value = ""; // Limpia el campo
    console.log(`${agregoAmigo} ha sido agregado. Lista actual:`, amigosAgregados);
}*/

function agregarAmigo() {
    agregoAmigo = document.getElementById('amigo').value.trim(); // Elimina espacios en blanco

    // Validaciones
    if (agregoAmigo === "") {
        alert("Por favor, introduce un nombre válido."); // Campo vacío
        return;
    }

    if (!isNaN(agregoAmigo)) { // Verifica si el valor es un número
        alert("No se permiten números, solo nombres.");
        return;
    }

    if (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(agregoAmigo)) { // Verifica caracteres no permitidos
        alert("Por favor, introduce solo letras.");
        return;
    }

    // Agregar el nombre si pasa las validaciones
    amigos.push(agregoAmigo);
    document.getElementById('amigo').value = ""; // Limpia el campo
    resultado.innerHTML = ""; //limpio si quiso sortear sin ningun amigo cargado

    // Mostrar la lista en el DOM
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de agregar los elementos nuevos
    
    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
        }
    console.log(`${agregoAmigo} ha sido agregado. Lista actual:`, amigos);
}


function sortearAmigo(){
    const resultado = document.getElementById(`resultado`);
    
    //tareas especificas
    //1. Validar que haya amigos disponibles: (en el arreglo)
    if (amigos.length === 0){
        resultado.innerHTML = "No hay amigos para sortear. Porfavor ingresa a tus amigos!";
    }else{
        //2. Generar un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        console.log("Indice aleatorio: " + indiceAleatorio);
        //
        amigoSorteado = amigos[indiceAleatorio];
        resultado.innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>`;
        console.log(`Amigo sorteado: ${amigoSorteado}`);
    }
}