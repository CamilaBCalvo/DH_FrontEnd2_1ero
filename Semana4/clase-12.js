/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: renderizar errores                      */
/* -------------------------------------------------------------------------- */
// Desarrollamos esta funcion para llamarla en el submit
function renderizarErrores(listado) {
    // caputarmos si existe una caja de errores y la eliminamos
    const caja = document.querySelector('#cajaErrores');
    if(caja){
        caja.remove()
    }


    if (listado.length > 0) {
        const cajaErrores = document.createElement('div');
        cajaErrores.setAttribute('id', 'cajaErrores');

        cajaErrores.style = "background-color: #ff000026;color: red; padding: 15px;margin-top: 15px;";

        // por cada error sumamos el texto en un parrafo a la caja
        listado.forEach(error => {
            cajaErrores.innerHTML += `<p>${error}</p>`
        });

        formulario.appendChild(cajaErrores);

    }
}

// probamos escuchar los cambios del input constantemente
const nombre =  document.querySelector('#nom');

nombre.addEventListener('input', ()=>{
    console.log("hubo un cambio");

    // mostramos un borde verde cuando cumple la validacion
    if(nombre.value.trim().length > 3){
        nombre.style = "color:  green;font-weight: bold;"
    }else{
        nombre.style = "color:  black;font-weight: regular;"
    }

})


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Recibe el listado de errores, y solo si no hay ninguno debe:
// 2 - mostrar al final del formulario un caja con la misma estructura que la caja de errores, pero con la tonalidad verde
// 3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
// 4 - a su vez se debe deshabilitar el boton del formulario
// 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario

function mostrarMensajeExito(listado) {
    //   desarrollar la funcion aqui
    const caja = document.querySelector('#cajaSinErrores');
    if(caja){
        caja.remove()
    }

    if (listado.length < 1) {
        const cajaSinErrores = document.createElement('div');
        cajaSinErrores.setAttribute('id', 'cajaSinErrores');

        cajaSinErrores.style = "background-color: greenyellow;color: green; padding: 15px;margin-top: 15px;";
        cajaSinErrores.innerHTML = "¡Formulario completado con éxito!"
        formulario.appendChild(cajaSinErrores)

         // deshabilitamos el boton
         let boton = document.querySelector('button')
         boton.setAttribute('disabled', true)

         //despues de 4 segundos limpiamos el formulario, habilitamos boton y borramos la caja de exito
        setTimeout(() => {
            boton.removeAttribute('disabled')
            formulario.reset()

            let cajaSinErrores = document.querySelector('#cajaSinErrores')
            if (cajaSinErrores) {
                cajaSinErrores.remove()
            }
        }, 4000)

    }
}
// 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario
