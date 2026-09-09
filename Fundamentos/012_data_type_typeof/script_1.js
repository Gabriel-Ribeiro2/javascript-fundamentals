/*
Typeof é um operador do JavaScript que retorna o tipo de dado de uma variável ou expressão.
se quisermos no nosso código saber o tipo de dado que uma variável armazena, podemos usar o operador typeof
*/

let myString = "Hello World!";
let myNumber = 125;
let myBoolean = true;
let myObject = {
  name: "John",
  age: 31,
  isMarried: false,
};

console.log(typeof myString); // string
console.log(typeof myNumber); // number
console.log(typeof myBoolean); // boolean
console.log(typeof myObject); // object
console.log(typeof myObject.age); // number
