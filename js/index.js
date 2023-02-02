// import {sumar, restar, multiplicar, dividir} from './operaciones.js'
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
const menos = document.getElementById("menos")
const por = document.getElementById("por")
const entre = document.getElementById("entre")
const igual = document.getElementById("igual")
const total = document.getElementById("total")
const borra = document.getElementById("borra")
const borraT = document.getElementById("borraT")

borraT.addEventListener("click", () => {
    operacion.innerHTML = ""
    total.innerHTML = ""
})

borra.addEventListener("click", () => {
    let actual = operacion.innerHTML
    let nuevo = actual.slice(0, -1)
    operacion.innerHTML = nuevo
})

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

menos.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "-"
    operacion.innerHTML = actual
})

por.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "*"
    operacion.innerHTML = actual
})

entre.addEventListener("click", () => {
    let actual = operacion.innerHTML
    actual += "/"
    operacion.innerHTML = actual
})

igual.addEventListener("click", () => {
    let oper = operacion.innerHTML
    let operA = [...oper]
    let num1 = 0
    let num2 = 0
    let operador = ""
    let resultado = 0
    operA.forEach(valor => {
        if(valor === "+" || valor === "-" || valor === "*" || valor === "/"){
            indiceV = operA.indexOf(valor)
            operador = valor
        }
    })
    let numeros = oper.split(operador)
    num1 = parseInt(numeros[0])
    num2 = parseInt(numeros[1])

    switch(operador) {
        case "+":
            resultado = num1 + num2
            break
        case "-":
            resultado = num1 - num2
            break
        case "*":
            resultado = num1 * num2
            break
        case "/":
            resultado = num1 / num2
            break
        default:
            alert("algo malo paso :v")
    }

    total.innerHTML = resultado
})