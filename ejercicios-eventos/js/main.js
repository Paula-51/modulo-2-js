


const boton = document.querySelector(".js_btn");


boton.addEventListener("click", (ev) => {
    console.log("ha hecho click");
    boton.classList.toggle("btn");
})