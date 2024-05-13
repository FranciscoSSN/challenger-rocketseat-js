// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
let msg = "Hello World!";
alert(msg);

// 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let myNumberOne = Number(prompt("Digite um número: "));
let myNumberTwo = Number(prompt("Digite outro número: "));
let sum = myNumberOne + myNumberTwo;
alert("A soma dos dois números é: " + sum);

// 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, 
// exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
// Para saber o tipo de dado você pode usar o operador `typeof`
let isCheckNumber = Number(prompt("Digite um número: "));
if(typeof isCheckNumber === 'number') {
    alert("É um número");
}else {
    alert("Não é um número");
}

// 4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem
// "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let checkIsString = prompt("Digite algo: ");
if(typeof checkIsString === 'string') {
    alert("É uma string");
}else {
    alert("Não é uma string");
}

// 5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for,
// exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let checkIsBoolean = true;
if(typeof checkIsBoolean === 'boolean') {
    alert('É um boolean');
}else {
    alert("Não é um boolean");
}

// 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let number1 = Number(prompt("Digite um número: "));
let number2 = Number(prompt("Digite outro número: "));
let sub = number1 - number2;
alert("A subtração dos dois números é: " + sub);

// 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let number_one = Number(prompt("Digite um número: "));
let number_two = Number(prompt("Digite mais um número: "));
let multi = number_one * number_two;
alert("A multiplicação dos dois números é: " + multi);

// 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let numberOne = Number(prompt("Digite um número: "));
let numberTwo = Number(prompt("Digite mais um número: "));
let div = numberOne / numberTwo;
alert("A divisão dos dois números é: " + div);

// 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par.
// Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let checkIsPar = Number(prompt("Digite um número: "));
if(checkIsPar % 2 === 0) {
    alert("É um número par");
}else {
    alert("Não é número par");
}

// 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, 
// exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let checkIsImpar = Number(prompt("Digite um número: "));
if(checkIsImpar % 2 !== 0) {
    alert("É um número ímpar");
}else {
    alert("Não é um número ímpar");
}