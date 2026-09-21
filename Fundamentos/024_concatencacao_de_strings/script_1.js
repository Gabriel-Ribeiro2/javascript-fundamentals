/*
A concatenação de strings é o processo de unir duas ou mais strings em uma única string.
Em JavaScript, você pode concatenar strings usando o operador de adição (+) ou o método concat ().
Podemos também usar interpolação de strings com template literals (crase ``) para concatenar strings e variáveis.

Vamos por enquanto ver apenas o operador de adição (+) para concatenar strings.
Veremos o método concat() e a interpolaçção de strings com template literals em aulas futuras.
*/

// duas variáveis com valores string
let myName = "John";
let mySurname = "Doe";

// concatenando duas strings
let myFullName = myName + "" + mySurname;
console.log(myFullName); // John Doe

// Operador de atribuição com concatenação
myName += "" + mySurname;
console.log(myName); // John Doe
// o meu nome mudou de "John" para "John Doe", mas o meu sobrenome permaneceu inalterado
