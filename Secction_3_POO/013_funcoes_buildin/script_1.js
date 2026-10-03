/*
Tal como acontece noutras linguagens de programação, o JavaScritp
Também tem funções integradas que podem ser usadas para realizar 
operações comuns.
Estas funções são parte do objeto global e podem ser usadas sem a 
necessidade de declarar ou importar nada.
*/

// Funções matemáticas
console.log(Math.PI); // exibe 3.141...
console.log(Math.round(4.7)); // exibe 5
console.log(Math.round(4.4)); // exibe 4
console.log(Math.pow(8, 2)); // exibe 64
console.log(Math.sqrt(64)); // exibe 8
// ...

// Funções de Data
const date = new Date();
console.log(date); // exibe a data atual
console.log(date.getFullYear()); // exibe a ano atual
console.log(date.getMonth()); // exibe a mês atual
console.log(date.getDay()); // exibe a dia atual

// Funções do Console
console.log("Hello World!"); // exibe uma mensagem no console
console.error("Error!"); // exibe uma mensagem de erro no console
console.warn("Warning!"); // exibe uma mensagem de aviso no console
console.info("Information!"); // exibe uma mensagem de informações no console
console.table(["John", "Mary", "Peter"]); // exibe uma tabela no console

// Nos próximos videos vamos ver alguns exemplos de funções
// integradas em ação para objetos específicos.
