/*
1. Crie uma variável "myName" e atribua o nome "John" a ela
2, Crie uma estrutura de switch que avalie a variável "myName"
    - se o valor da variável for "ann", "bob" ou "Steve", exiba a mensagem "Olá amigos"
    - se o valor da variável for "John" ou "Bill", exiba a mensagem "Olá família"
    - se nenhum dos acima, exiba a mensagem "Ups!"
*/

let myName = "Peter";

switch (myName) {
  case "Anna":
  case "Bob":
  case "Steve":
    console.log("Olá amigos");
    break;
  case "John":
  case "Bill":
    console.log("Olá família");
    break;
  default:
    console.log("Ups!");
}
