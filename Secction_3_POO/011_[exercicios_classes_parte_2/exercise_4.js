/*
Crie uma classe Animal apenas com duas propriedades: espécie e
nome.
Esta classe deve ter um método para mostrar ambas as propriedades:
"Este animal é um(a) [espécie] e o seu nome é [nome]".
Crie duas subclasses, Dog e Bird, que herdam da classe Animal.
Instancie um objeto de cada classe e teste-os.
*/

class Animal {
  #name;
  #species;

  constructor(name, species) {
    this.#name = name;
    this.#species = species;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get species() {
    return this.#species;
  }

  set species(species) {
    this.#species = species;
  }
}

class Dog extends Animal {
  dogDescription() {
    console.log(
      `Este animal é um(a) ${this.species} e o seu nome é ${this.name}`,
    );
  }
}

class Bird extends Animal {
  birdDescritption() {
    console.log(
      `Este animal é um(a) ${this.species} e o seu nome é ${this.name}`,
    );
  }
}

let dog1 = new Dog("Princesa", "Vira-lata");
dog1.dogDescription();

let bird1 = new Bird("Miau", "Persa");
bird1.birdDescritption();
