/*
    você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

    * Crie uma função que irá calcular a média das notas de cada aluno;
    * Supondo que a média, para esse concurso é 7, verifique se cada aluno 
    * obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. 
*/

const students = [
  { name: "Francisco", noteFirst: 9, noteSecond: 10 },
  { name: "Eduardo", notaFirst: 5, noteSecond: 8 },
];

function calcMedia(notaFirst, notaSecond) {
  return (notaFirst + notaSecond) / 2;
}

students.forEach(function (student) {
  let media = calcMedia(student.notaFirst, student.noteSecond);
  let status = media >= 7 ? "aprovado" : "reprovado";
  alert(`${student.name} | Média: ${media.toFixed(1)} | ${status}`);
});
