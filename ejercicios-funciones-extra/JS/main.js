
function getEl(clase) {
    let selector = document.querySelector(clase);
    
    if (!selector)  {
        console.log(`No existe ningún elemento con clase, id o tag llamado selector`);
        return null 
    } else {
        return selector 
    }
    
}

function parOimpar (x) {
    let numero = parseInt(x); 
    
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    }
    else {
        console.log(`El número ${numero} es impar.`);
    }
}

let num = getEl('.js_numero').innerHTML;
//num = num.innerHTML; 
console.log(num);

parOimpar(num);




//let h1 = getEl('.js_h1');
//console.log(h1.innerText);





