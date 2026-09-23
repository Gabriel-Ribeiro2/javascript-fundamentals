// os operadores lógicos são usados para combinar expressões booleanas.
// eles são frequentemente usados em estruturas de controle, como if, while e  for
// que veremos mais adiante no curso.
// Mais uma vez, é muito importante entender com funcionam os operadores lógicos,
// pois eles são fundamentais para a lógica de programação e para a construção de algoritmos.

let num1 = 10,
  num2 = 20;

// And (&&)
console.log(num1 > num2 && num2 > 18);

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Or (||)
console.log(num1 > num2 || num2 > 18);

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Not (!)
console.log(!true); // false
console.log(!false); // true

// Exemplo de uso de operadores lógicos em uma condição:
let num_1 = 5;
let num_2 = 10;

if (num_1 < 0 && num_2 > 0) {
  console.log("Ambas as condições são verdadeiras.");
} else {
  console.log("Pelo menos uma das condições é falsa");
}

// altera os valores de num_1 e num_2 para ver o resultado

// em código mais avançada, podemos usar vários operadores lógicos na mesma expressão
// são práticas que se tornam mais simples de aplicar com o tempo e com a prática.
