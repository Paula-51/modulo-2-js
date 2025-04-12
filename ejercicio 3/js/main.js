
const parrafo = document.querySelector(".js_parrafo");

parrafo.addEventListener("click", () => {
    console.log("ha hecho click");
    parrafo.innerHTML += "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas veniam voluptatum minima magnam praesentium. Dolor a reiciendis pariatur tempore, itaque corporis porro ea. Repudiandae ad ea, maxime dolore magni id.";
})

/* const boton = document.querySelector(".js_btn");


boton.addEventListener("click", (ev) => {
    console.log("ha hecho click");
    boton.classList.toggle("btn");
}) */