/*

    Acceder al primer elemento de la lista.

*/

const botanas = document .getElementsByTagName("li");

console.log(botanas[0]);


/*

    Propiedad classList 

    Devuelve un DOM token list o listado de Clases en el DOM 
    La lista de clases de un elemento html.

    sintaxis:

    elemento.classList

*/

console.log( botanas[0].classList);// DOM Token List

console.log(botanas[0].classList[0]);// botana

/*

    Podemos agregar clases usando el metodo add()

    Sintaxis:

        elemento.classList.add("nombre-clase");

*/



botanas[2].classList.add("picante");
console.log( botanas[2].classList);


/* 

    Podemos verificar si existe una clase en un elemento con el método de contains()

    Sintaxis:  

    elemento.classsList.contains("nombre-clase");

- Devuelve true si existe la clase
- Devuelve false si no existe la clase

*/


console.log(botanas[1].classList.contains("botana"));    // TRUE
console.log(botanas[1].classList.contains("picante"));   // FALSE


/* 

    Podemos eliminar una clase el método remove()

    Sintaxis:

        elemento.classList.remove("Nombre-Clase");

*/


botanas[3].classList.remove("botana");
botanas[2].classList.add("picante");
console.log( botanas[2].classList);