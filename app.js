// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if ( nombre === '') {
        alert("Por favor ingrese un nombre");
    } else {
        nombreAmigos.push(nombre);
        limpiarCaja();
    }
    //console.log(nombre);
    mostrarLista();
}

function mostrarLista (){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < nombreAmigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = nombreAmigos[i]; 
        lista.appendChild(li);
    }
}