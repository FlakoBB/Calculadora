// import {sumar} from './operaciones'
const operacion = document.getElementById("operacion")
const cero = document.getElementById("cero")
const uno = document.getElementById("uno")
const dos = document.getElementById("dos")
const tres = document.getElementById("tres")
const cuatro = document.getElementById("cuatro")
const cinco = document.getElementById("cinco")
const seis = document.getElementById("seis")
const siete = document.getElementById("siete")
const ocho = document.getElementById("ocho")
const nueve = document.getElementById("nueve")
const mas = document.getElementById("mas")
const igual = document.getElementById("igual")

cero.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "0"
    operacion.innerHTML = actual
})

uno.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "1"
    operacion.innerHTML = actual
})

dos.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "2"
    operacion.innerHTML = actual
})

tres.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "3"
    operacion.innerHTML = actual
})

cuatro.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "4"
    operacion.innerHTML = actual
})

cinco.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "5"
    operacion.innerHTML = actual
})

seis.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "6"
    operacion.innerHTML = actual
})

siete.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "7"
    operacion.innerHTML = actual
})

ocho.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "8"
    operacion.innerHTML = actual
})

nueve.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "9"
    operacion.innerHTML = actual
})

mas.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "+"
    operacion.innerHTML = actual
})

igual.addEventListener("click", () => {
    let oper = operacion.innerHTML
    let operA = [...oper]
    let num1 = 0
    operA.forEach(valor => {
        while(valor !== "+") {
            num1 += valor
        }
        
    })
    console.log(num1)
})