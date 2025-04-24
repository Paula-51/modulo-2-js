'use strict';

//Ejercicio Extra 

// const boton = document.querySelector(".js_button");

// const Input = document.querySelector(".js_input");

// console.log(Input);
// console.dir(Input);


// boton.addEventListener("click", (ev) => {
//     console.log(ev);
// })


//Ejercicio 5
// const job = "developer";

// const user = {
//     firstName: "Paula",
//     lastName: "San José",
//     age: 35,
//     job: job
// }

// console.log(user.age);


// Ejercicio 4
// const peras = {
//     max: 8,
//     min: 1,
//     actual: 6,
//     inicial: 1,
//     add: function() {
//         this.actual += 1;
//         console.log(this.actual);
//     },
//     rest: function() {
//         this.actual -= 1; 
//         console.log(this.actual); 
//     },
//     reset: function() {
//         this.actual = this.inicial;
//         console.log(this.actual);
//     }
// }

// peras.add();
// peras.rest();
// peras.reset();


//Ejercicio 1, 2, 3
// const lista = document.querySelector(".js_p1");
// const lista2 = document.querySelector(".js_p2");


// const adalaber1 = {
//     Nombre: "Susana",
//     Edad: 34,
//     Profesion: "Periodista",
//     run: function() {
//         console.log("Estoy corriendo");
//     },
//     runAMarathon: function(distancia) {
//         console.log(`Estoy corriendo una maratón de ${distancia} kilómetros.`)
//     },
//     showBio: function() {
//         console.log(`Mi nombre es ${this.Nombre}, tengo ${this.Edad} años y soy ${this.Profesion.toLowerCase()}.`)
//     }
// }

// const adalaber2 = {
//     Nombre: "Rocío",
//     Edad: 25,
//     Profesion: "Actriz",
//     run: function() {
//         console.log("Estoy corriendo");
//     },
//     runAMarathon: function(distancia) {
//         console.log(`Estoy corriendo una maratón de ${distancia} kilómetros.`)
//     },
//     showBio: function() {
//         console.log(`Mi nombre es ${this.Nombre}, tengo ${this.Edad} años y soy ${this.Profesion.toLowerCase()}.`)
//     }
// }

// function show(objeto, constante, distancia) {
//     constante.innerHTML = `Mi nombre es ${objeto.Nombre}, tengo ${objeto.Edad} años y soy ${objeto.Profesion.toLowerCase()}.`
//     objeto.run();
//     objeto.runAMarathon(distancia); 
//     objeto.showBio(); 
//     return constante
// }


// show(adalaber1, lista, 50); 
// show(adalaber2, lista2, 25); 