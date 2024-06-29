
let diccionario = ["Apple", "House","mouse","white"]
let random = Math.floor(Math.random() * diccionario.length);
console.log(random)
let palabraSecreta = diccionario[random].toUpperCase();
let oportunidades = 6;
let button = document.getElementById("guess-button")
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")
button.addEventListener("click", intentar)
function intentar() {

    let intento = input.value.toUpperCase()
   
    console.log(intento)
    console.log(palabraSecreta)
    if (intento == palabraSecreta) {
        gameOver("ganaste")

    }

    let row = document.createElement("div")
    row.className = "row"
    for (let i = 0; i < palabraSecreta.length; i++) {
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerHTML = intento[i]
        

        if (palabraSecreta[i] == intento[i]) {
            letra.style.background="green"
           letra.innerHTML = intento[i]
            console.log(intento[i], "verde")

        } else if (palabraSecreta.includes(intento[i])) {
            letra.style.background="yellow"
            letra.innerHTML = intento[i]
            console.log(intento[i], "amarillo")


        } else {
           letra.innerHTML = intento[i]
           letra.style.background="gray"
           console.log(intento[i], "gris")
        }
        row.appendChild(letra);
    }
        oportunidades--

    grid.appendChild(row)
    if (oportunidades == 0) {
        gameOver("perdiste")
    }else if (intento == palabraSecreta) {
        gameOver("ganaste")

    }else {
        alert("Te quedan " + oportunidades + " oportunidades")
    }

    }


function gameOver(mensaje) {
    if (button) {
        button.disabled = true;
    }
    if (input) {
        input.disabled = true;
    }
    let contenedor = document.getElementById("guesses");
    if (contenedor) {
        contenedor.innerHTML = "<h1>" + mensaje + "</h1>";
    }
}

    
  



