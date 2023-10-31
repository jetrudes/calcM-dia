let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("qual a note da segunda prova?")
let n3 = prompt("qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) /3

let result = average > 7

average = average.toFixed(2)

if (result) {
    alert("Parabéns, " + student + "!sua média foi de: " + average)
}else if (average < 3) {
    alert("Reprovado")
}
