/* 
Crie um array de alunos. Cada aluno é um objeto com os seguintes atributos:
- name
- phone number

Crie uma função ue mostre o nome e o telefone de cada aluno.
mostre todas as informções de alunos
*/

let students = [
  {
    name: "Steve Rogers",
    phoneNumber: 14123456789,
  },
  {
    name: "Pedro Rogers",
    phoneNumber: 17423456789,
  },
  {
    name: "Leandro Rogers",
    phoneNumber: 18923456789,
  },
];

console.log(students[1].name);

function showStudentsInfo() {
  for (index = 0; index < students.length; index++) {
    console.log(
      "Nome:",
      students[index].name,
      "Telefone:",
      students[index].phoneNumber,
    );
  }
}

showStudentsInfo();
