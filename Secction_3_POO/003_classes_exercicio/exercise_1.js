/*
Você tem 3 animais de estimação: um gato, um cochorro e papagaio
Crie uma classe chamada Animal com as seguintes propriedades e método
- Propriedades: nome, peso e especie.
- Métodos: comer(), dormir() e brincar
- O método comer() deve receber um parâmetro que representa o tipo de alimento
que o animal come
- O método brincar() deve receber um parâmetro que representa o tipo de
brinquedo com o qual o animal brinca
- O método dormir() deve imprimir uma mensagem indicando que o animal está dormindo
- Crie três instâncias da classe Animal, uma para cada animal de estimação
*/

class Animal {
  constructor(name, weight, species) {
    this.name = name;
    this.weight = weight;
    this.species = species;
  }

  eat(food) {
    console.log("O animal", this.name, "come", food);
  }

  play(game) {
    console.log("O animal", this.name, "está brincando de", game);
  }

  sleep() {
    console.log(`O animal ${this.name} está dormindo`);
  }
}

let cat = new Animal("Gato", 10, "Gatitus");
cat.eat("ração");
cat.play("pega-pega");
cat.sleep();

let dog = new Animal("Cachorro", 17, "Cachorritus");
dog.eat("ração");
dog.play("pega-pega");
dog.sleep();

let parrot = new Animal("Papagaio", 3, "Papagaiatus");
parrot.eat("ração");
parrot.play("pega-pega");
parrot.sleep();
