const texto = document.querySelector('.texto')
const btn_negrita = document.querySelector('#btn-negrita')
const btn_cursiva = document.querySelector('#btn-cursiva')
const btn_subrayado = document.querySelector('#btn-subrayado')
const btn_color = document.querySelector('#btn-color')
const rango_Tamano = document.querySelector('.rangoTamaño')

/*
    funcionTamano(){
    Esta funcion permite al usuario cambiar el tamaño mediante un input type range
*/

function funcionTamano(){

    const nuevoTamano =  rango_Tamano.value + 'px';
    texto.style.fontSize = nuevoTamano;


}

/*
    funcionCambiarTexto(nuevoTexto)
    Esta funcion sera llamada cuando se envie el formulario con un nuevo texto, de no haber texto muestra una alerta
*/

function funcionCambiarTexto(nuevoTexto){

    if(nuevoTexto != ""){

        texto.innerText = nuevoTexto

    }
    else{

        alert("No hay texto")

    }

}

/*
    funcionColor()
    La funcion sera llamada cuando el usuario quiera cambiar el color del texto
    ofreciendo tres opciones de color y un reset para volver al inicio
*/

function funcionColor(){

    if(btn_color.innerText == "Blue"){

        btn_color.classList.add('btn-info')
        btn_color.classList.remove('btn-primary')
        texto.style.color = "blue"
        btn_color.innerText = "Green"

    }

    else if(btn_color.innerText == "Green"){

        btn_color.classList.add('btn-info')
        btn_color.classList.remove('btn-primary')
        texto.style.color = "green"
        btn_color.innerText = "Red"

    }

    else if(btn_color.innerText == "Red"){

        btn_color.classList.add('btn-info')
        btn_color.classList.remove('btn-primary')
        texto.style.color = "Red"
        btn_color.innerText = "Reset"

    }

    else if(btn_color.innerText == "Reset"){

        texto.style.color = "white"
        btn_color.innerText = "Blue"
        btn_color.classList.remove('btn-info')
        btn_color.classList.add('btn-primary')

    }

}
/**
         * funcionNegrita()
         * esta función se va a llamar cuando el usuario selecciona la opción Bold (negrita).
         */
function funcionNegrita() {

    texto.classList.remove('text-decoration-underline')
    texto.classList.add('fw-bold')
    texto.classList.remove('fst-italic')
    btn_negrita.classList.add('btn-info')
    btn_negrita.classList.remove('btn-primary')
    btn_subrayado.classList.remove('btn-info')
    btn_subrayado.classList.add('btn-primary')
    btn_cursiva.classList.remove('btn-info')
    btn_cursiva.classList.add('btn-primary')

}

/**
 * funcionCursiva()
 * esta función se va a llamar cuando el usuario selecciona la opción Bold (negrita).
 */
function funcionCursiva() {

    texto.classList.remove('text-decoration-underline')
    texto.classList.remove('fw-bold')
    texto.classList.add('fst-italic')
    btn_cursiva.classList.add('btn-info')
    btn_cursiva.classList.remove('btn-primary')
    btn_negrita.classList.remove('btn-info')
    btn_negrita.classList.add('btn-primary')
    btn_subrayado.classList.remove('btn-info')
    btn_subrayado.classList.add('btn-primary')

}

/**
 * funcionSubrayado()
 * esta función se va a llamar cuando el usuario selecciona la opción Bold (negrita).
 */
function funcionSubrayado() {

    texto.classList.add('text-decoration-underline')
    texto.classList.remove('fw-bold')
    texto.classList.remove('fst-italic')
    btn_subrayado.classList.add('btn-info')
    btn_subrayado.classList.remove('btn-primary')
    btn_cursiva.classList.remove('btn-info')
    btn_cursiva.classList.add('btn-primary')
    btn_negrita.classList.remove('btn-info')
    btn_negrita.classList.add('btn-primary')


}

function handlerBoton(e) {
    const funcionBoton = e.target.dataset.formato;
    switch (funcionBoton) {
        case 'negrita':
            funcionNegrita();
            break;
        case 'cursiva':
            funcionCursiva();
            break;
        case 'subrayado':
            funcionSubrayado();
            break;
        case 'color':
            funcionColor();
            break;
    }
}
function handlerFormulario(e) {

    e.preventDefault();
    const input = e.target.querySelector('input');
    const nuevoTexto = input.value;
    input.value = "";
    funcionCambiarTexto(nuevoTexto);

}
rango_Tamano.addEventListener('input', funcionTamano)
document.querySelector('form').addEventListener('submit', handlerFormulario);
document.querySelectorAll('button.btn').forEach(e => e.addEventListener('click', handlerBoton));