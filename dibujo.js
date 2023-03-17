const can = document.querySelector("#can"),
la = can.getContext("2d");

//info del canvas
let ClientRect = can.getBoundingClientRect();

//tamaño del canvas
can.setAttribute("width", document.querySelector(".container").offsetWidth)
can.setAttribute("height", document.querySelector(".container").offsetHeight)

// modificar el tamaño del canavas segun las pantasllas
window.addEventListener("resize", ()=>{
    ClientRect = can.getBoundingClientRect();

    can.setAttribute("width", document.querySelector(".container").offsetWidth)
    can.setAttribute("height", document.querySelector(".container").offsetHeight)
});

// declaracion de color del pinsel y tamaño
let iniX, iniY, color = "#000", lineWith = 5;

// saber cuando los input son modificados
document.addEventListener("change", e =>{
    if (!e.target.matches("#lineWith") && !e.target.matches("#color")) return false;

    if (e.target.matches("#lineWith")) lineWith = parseInt(e.target.value)
    if (e.target.matches("#color")) color = e.target.value
})

// dibuja la linea
const dibujar = (mouseX, mouseY) =>{
    la.beginPath();
    la.moveTo(iniX, iniY)
    la.lineWidth = lineWith;
    la.strokeStyle = color
    la.lineCap = "round"
    la.lineJoin = "round"
    la.lineTo(mouseX, mouseY)
    la.stroke()

    iniX = mouseX
    iniY = mouseY
}

// funcion cunado mueve el mosue
const mousemove = event =>{
    dibujar(event.offsetX, event.offsetY)
}
// evento cuando entra el mouse y hace click
can.addEventListener("mousedown", e =>{
    // variasblea
    iniX = e.offsetX
    iniY = e.offsetY

    dibujar(iniX, iniY)
    // evenyoco cuando se mueve
    can.addEventListener("mousemove", mousemove)
} )
// remueve el evento pintar
can.addEventListener("mouseup", e =>{
    can.removeEventListener("mousemove", mousemove)
})


// funcon pra tocar
const touchmove = event =>{
    dibujar(event.touches[0].clientX - ClientRect.left, event.touches[0].clientY - ClientRect.top)
}
// evento cuando toca el dedo
can.addEventListener("touchstart",e =>{
    iniX = e.touches[0].clientX - ClientRect.left
    iniY = e.touches[0].clientY - ClientRect.top

    dibujar(iniX, iniY)
    // cuando se mueve el dedo
    can.addEventListener("touchmove", touchmove)
} )
//cuando sale el dedo
can.addEventListener("touchend", e =>{
    can.removeEventListener("mousemove", mousemove)
})