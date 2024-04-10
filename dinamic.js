const container = document.querySelector('.container');
const mas = document.querySelector('.mas');
const menos = document.querySelector('.menos');
let i = 1;

mas.addEventListener("click", ()=>{

   const titulo = document.createElement('h1');

   titulo.setAttribute('class','title_section');

   titulo.innerText = "Prueba 1";

   container.appendChild(titulo);

});

menos.addEventListener("click", ()=>{

    i = i++;

    const titulo = document.querySelectorAll('.title_section');
 
    titulo[i].remove();
 
 });