/*
Crie a mesma função do exercício 1 e 2, mas com 2 argumentos: firstName e LastName.
Dessa vez, a função irá retornar o nome completo e armazená-lo
Exiba o nome completo no console.
*/

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let myFullName = fullName("Gabriel", "Ribeiro");

console.log(myFullName);
