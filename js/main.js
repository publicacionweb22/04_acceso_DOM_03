// var listItems = document.getElementsByTagName('li');
var listItems = document.querySelectorAll('li');

console.log(listItems);

listItems[1].innerHTML = 'Manzanas';

// var copyrightParagraph = document.getElementById('copyright');

var copyrightParagraph = document.querySelector('#copyright');

copyrightParagraph.innerHTML = '&copy; 2022';

// Selecciono el botón

var btn = document.getElementById('btn');

console.log(btn);

// La manera en la que tenemos acceso a la detección de eventos
// por parte del navegador es enlazando la palabra reservada del evento
// con la ejecución de una función

// 1ª Forma
// poner un atributo de evento en el elemento y asociarlo a una función

function mostrarMensaje() {
    console.log('Hola a todos!')
}

// 2ª Forma
// Usar un escuchador de eventos

var btn2 = document.getElementById('btn-2');

btn2.addEventListener('click', function() {
    mostrarMensaje();
})
