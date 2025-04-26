//Ejercicio 2
'use strict'
// let numbers = [2, 5, 7, 10, 9 ,8, 7, 7];
// let suma = 0;


// function average (numbers){
//     for (let i=0; i < numbers.length; i++){
//         suma += numbers[i];
//     }
//     console.log (suma / numbers.length);
// }

// average (numbers)

//Ejercicio 3

const libro1 = document.querySelector (".js-libro1");
const libro2 = document.querySelector (".js-libro2");
const submit = document.querySelector (".js-enviar");



function handleClick (event){
    event.preventDefault () //a todos los formularios para que funcionen
    let valueLibro1 = libro1.value;
    let valueLibro2 = libro2.value;
    let libros = [libro1.value, libro2.value];
console.log (libros);
}


submit.addEventListener('click', handleClick) 