/*
Pegue na coleção de estudantes do último exercício e:
1. Remova o último estudante da coleção e coloque numa variável
2. Remova o primeiro estudante da coleção e coloque numa variável   
*/
let nameStudents = new Array(
  "Gabriel",
  "Lito",
  "Resenha",
  "Leandro",
  "Chico",
  "Mateus",
);

// Declarar uma váriavel com o último estudante e
// removê-la da variável
let lastStudent = nameStudents.pop();

// Declarar uma váriavel com o primeiro estudante e
// removê-la da variável
let firstStudent = nameStudents.shift();

console.log(`O primeiro estudante ${firstStudent}`);
console.log(`O último estudante ${lastStudent} foi removido`);
console.table(nameStudents);
