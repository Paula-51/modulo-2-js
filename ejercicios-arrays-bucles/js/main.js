/* function get100numbers (){
    const numbers = []
    for (let i=1; i<101;i++){
        numbers.push (i);
    }
    return numbers;
}

const numeros = get100numbers ();
numeros.forEach((element) => {console.log(element);})

function getReversed100numbers (){
    const numIvertidos = get100numbers ();
    return numIvertidos.reverse ();
}
const numerosInvertidos = getReversed100numbers ();
numerosInvertidos.forEach((element) => {console.log(element);}) */

// const lostNumbers = [4, 8, 15, 16, 23, 42];

// function bestLostNumber(lista) {

//     pares = []
//     multiplosDeTres = []

//     lista.forEach((element) => {
//         if (element % 2 === 0) {
//             pares.push(element);
//         }else if (element % 3 === 0) {
//             multiplosDeTres.push(element);
//         }
        
//     });

//     const bestnumbers = pares.concat(multiplosDeTres);
//     return bestnumbers
// }

// const supernumbers = bestLostNumber(lostNumbers);

// for (const number of supernumbers) {
//     console.log(number);
// }


function crearArbolNavidad(altura) {
    console.log(' '.repeat(altura - 1) + '★'); // Imprimimos la estrella centrada en la primera fila
  
    for (let i = 1; i <= altura; i++) {
      const espacios = ' '.repeat(altura - i); // Calculamos los espacios necesarios para centrar
      const triángulos = '▲'.repeat(2 * i - 1); // Calculamos los triángulos para formar la otra mitad
      console.log(espacios + triángulos); // Imprimimos la fila centrada
    }
  
    // Base del árbol (el tronco)
    console.log(' '.repeat(altura -1) + '|'); // Añadimos el tronco centrado
  }
  
  crearArbolNavidad(5);
  


