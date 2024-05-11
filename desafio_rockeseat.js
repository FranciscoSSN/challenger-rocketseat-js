/*
    Você irá solicitar do usuário que ele insira dois números
    e, a partir daí, calcular:
    
    * A soma dos dois números
    * A subtração dos dois números
    * A multiplicação dos dois números
    * O resto da divisão dos dois números
    * Verificar se a soma dos dois números é par ou ímpar
    * Verificar se os dois números inseridos são iguais ou diferentes
*/

let numberOne = Number(prompt("Digite um número: "));
let numberTwo = Number(prompt("Digite o segundo número: "));

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const mult = numberOne * numberTwo;
const restDiv = numberOne % numberTwo;


alert("A soma dos dois números é: " + sum);
alert("A subtração dos dois números é: " + sub);
alert("A multiplicação dos dois números é: " + mult);
alert("O resto da divisão dos dois números é: " + restDiv);
if(sum % 2 === 0) {
    alert("A soma dos dois números é par: " + sum);
}else {
    alert("A soma dos dois números é ímpar: " + sum);
}