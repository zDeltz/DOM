// La referencia del emoji del cursor

const cursor = document.querySelector(".cursor");

// Detectamos el evento del movimiento del mouse

document.addEventListener( "mousemove" , (e) => {
    // console.log(e.clientX);
    // console.log(e.clientY);

    // Guardamos los datos en unas variable
    let mouseX = e.clientX - 18;
    let mouseY = e.clientY - 18;

    cursor.style.left = `${mouseX}px` ;
    cursor.style.top = `${mouseY}px` ;
} );

// Detectar el evento de presionar una tecla

document.addEventListener("keydown", (e) => {
    // console.log(e.key);
    
    /* Usar Switch para usar asignar el emoji al mouse */
    switch (e.key) {
        case "1":
            cursor.textContent = "🐶";
            document.body.style.backgroundColor = "#e04613";
            break;
        case "2":
            cursor.textContent = "🐭";
            document.body.style.backgroundColor = "#1362e0ff";
            break;
        case "3":
            cursor.textContent = "🦝";
            document.body.style.backgroundColor = "#46d55eff";
            break;
        case "4":
            cursor.textContent = "🦊";
            document.body.style.backgroundColor = "#3c1ab9ff";
            break;
        default:
            cursor.textContent = "🐱‍🐉";
            document.body.style.backgroundColor = "#e0132b";
    }

});