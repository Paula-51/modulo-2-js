//ejercicio 1
/* const texto= document.querySelector(".js-texto");

/* let ancho = (Boolean,width, padding,bordersize) => let resultado = `El ancho del contenido es ` */

/*function calcularCaja(borderbox, width, padding, bordersize) {
 if (borderbox !== true) {
    let contenido = width;
    return `El ancho del contenido es: ${contenido}`;

 }
 // Si bordebox es false, entonces se coge el widh
 // Si borderbox es true, entonces se calcula width + padding + bordersize

 else {
    let total = width + padding + bordersize;
    let contenido = width;
    return `El ancho del contenido es: ${contenido} y el ancho total de la caja es: ${total}`;
 }
}

texto.innerHTML = calcularCaja(true,750,25,2); */

//ejercicio 2

/* const boton = document.querySelector(".js-btn");
let n = document.querySelector(".js-valor");
n = 0;

function incrementarContador () {
    let n = document.querySelector(".js-valor");
    n = 0;
    return n.innerHTML += 2;
   
} */

// boton.addEventListener ("click", incrementarContador);

const boton = document.querySelector(".js_btn");
const numero = document.querySelector(".js-valor");
let contador = 0; 
numero.innerHTML = contador;
// Inicializamos el contador fuera de la función

function incrementarContador() {
  contador += 2; // Incrementamos el contador por 2
  numero.innerHTML = contador; 
  console.log ("El boton funciona");
  // Actualizamos el contenido de 'n' con el nuevo valor del contador
}
boton.addEventListener("click", incrementarContador);