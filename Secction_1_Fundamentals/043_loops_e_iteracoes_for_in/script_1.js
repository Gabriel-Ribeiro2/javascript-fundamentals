// A iteração for in é utilizada para iterar sobre as propriedades
// de um objeto. o loop for in percorre todas as propriedades enumeráveis

const human = {
  name: "john",
  age: 23,
  weight: 60.5,
};

// displays the properties of the human object
// apresenta as propriedades do objeto human

for (let property in human) {
  console.log(property);
}
console.log("");

// apresenta os valores das propriedades do objeto human
for (let property in human) {
  console.log(human[property]);
}
console.log("");

// apresenta as propriedades e valores do objeto human
for (let property in human) {
  console.log(property + " -> " + human[property]);
}
