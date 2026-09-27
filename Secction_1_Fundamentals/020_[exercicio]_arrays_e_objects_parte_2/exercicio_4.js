/*
Objetos.
1. Crie um array students, cada um representando um aluno
2. Cada objeto aluno deve conter as seguintes propriedades:
    name: string
    surname: string
3. exiba o nome completo de todos os alunos no console
*/

let students = [
  {
    name: "Mario",
    surname: "Pereira",
  },
  {
    name: "Pedro",
    surname: "Paulo",
  },
  {
    name: "Luan",
    surname: "Scola",
  },
];

console.log(
  "/Aluno:",
  students[0].name,
  students[0].surname,
  "/Aluno:",
  students[1].name,
  students[1].surname,
  "/Aluno:",
  students[2].name,
  students[2].surname,
);
