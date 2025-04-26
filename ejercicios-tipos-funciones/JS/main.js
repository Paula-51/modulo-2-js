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

// const boton = document.querySelector(".js_btn");
// const numero = document.querySelector(".js-valor");
// let contador = 0; 
// numero.innerHTML = contador;
// // Inicializamos el contador fuera de la función

// function incrementarContador() {
//   contador += 2; // Incrementamos el contador por 2
//   numero.innerHTML = contador; 
//   console.log ("El boton funciona");
//   // Actualizamos el contenido de 'n' con el nuevo valor del contador
// }
// boton.addEventListener("click", incrementarContador);

//ejercicio 3

const color1 = "#9150ed";
const color2 = "#fc870a";
const color3 = "#26b658";
const color4 = "#519cef";
const color5 = "#f7b2ee";
const boton =document.querySelector(".js-btn");

function handleClick (){ 
let numeroEntre1Y5 = Math.floor((Math.random() * 5) +1);
console.log (numeroEntre1Y5)
//se suma 1 para que los números de resultado sean entre 1 y 5 en lugar de entre 0 y 4
if (numeroEntre1Y5 === 1){
   document.body.style.backgroundColor =color1;

}
else if (numeroEntre1Y5 === 2){
   document.body.style.backgroundColor =color2;

}
else if (numeroEntre1Y5 === 3){
   document.body.style.backgroundColor =color3;

}
else if (numeroEntre1Y5 === 4){
   document.body.style.backgroundColor =color4;

}
else if (numeroEntre1Y5 === 5){
   document.body.style.backgroundColor =color5;

}
}
boton.addEventListener ("click", handleClick);
