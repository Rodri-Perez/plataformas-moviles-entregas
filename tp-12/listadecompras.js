const lista_productos = document.querySelector('#lista-productos');

/**
         * agregarProducto()
         * esta función se va a llamar cuando el usuario envía el formulario con el nombre del producto para agregar.
         */
function agregarProducto(nombreProducto) {

    const li = document.createElement("li");
    li.innerText = nombreProducto;
    lista_productos.appendChild(li)

}

function handlerFormulario(e) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const nombreProducto = input.value;
    input.value = "";
    agregarProducto(nombreProducto);
}

document.querySelector('form').addEventListener('submit', handlerFormulario);