/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */

function iniciarJuego() {

    // suludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");

    let nombre = nombre;

    do {
        // guardamos en una variable en nombre ingresado
        nombre = prompt("Ingese su nombre por favor:");

    } while (nombre == null || nombre.length < 3 || !isNaN(nombre));



    alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("El jugador es:")
    console.log(nombre);

    return nombre;
}

const nombreJugador = iniciarJuego()

// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.




