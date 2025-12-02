/* 

    Para crear elementos, primero vamos a tener un elemento de referencia. Este será el nodo de HTML donde vamos a crear el nuevo elemento.

*/


const peliculas = document.getElementById("peliculas");


/* 

    Para crear un nuevo elemento usamos createElement()

    Sintaxis:

        document.createElement("tipoElemento")

*/


const nuevaPeli = document.createElement("li");


/* 

    Para agregar el elemento al DOM, tenemos el elemento de referencia y usamos el método append()

    Sintaxis:

        elementoDeReferencia.append(nuevoElemento);

*/


peliculas.append(nuevaPeli);

/* 

    Para agregarle contenido al nuevo elemento podemos usar innerText

*/

nuevaPeli.innerText = "Gigantes de Acero"
console.log(peliculas);

/* 

    Reto: Agregarle las clases: pelicula y fondo-dos al nuevo elemento.

*/

/* nuevaPeli.classList.add("pelicula");
nuevaPeli.classList.add("fondo-dos"); */

nuevaPeli.classList.add("pelicula" , "fondo-dos");   //  Agregamos más clases separadas por comas.