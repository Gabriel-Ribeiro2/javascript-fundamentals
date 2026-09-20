/*
    Pegue a coleção de alunos do último ee
    1. Adicione um novo aluno ao final da coleção
    2. Adicione um novo aluno ao iníciio da coleção
    3. Adicione tres novos alunos ao final da coleção
    4. Mostre a coleção no console
*/
let nameStudents = new Array(
  "Gabriel",
  "Lito",
  "Resenha",
  "Leandro",
  "Chico",
  "Mateus",
);

// 1
nameStudents.push("Mario");

// 2
nameStudents.unshift("Pedro");

// 3
nameStudents.push("Naner", "Miguel", "Pingu");

// 4
console.table(nameStudents);
