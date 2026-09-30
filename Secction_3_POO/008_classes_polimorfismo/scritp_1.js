/*
Polimorfismo é um conceito de programação orientada a objetos que
permite que um objeto ou método tenha várias formas.
No JavaScript, o polimorfismo é alcançado através da herança de classes
e da sobrescrita de métodos (method overriding)
*/

class Animal {
  name = "";
  species = "";

  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  identify() {
    console.log("Sou um " + this.species + " e o meu nome é " + this.name);
  }
}

// a classe Dog herda as propriedades e métodos da classe Aninal
class Dog extends Animal {
  // a classe Dog tem um novo método
  bark() {
    console.log("woof woof");
  }

  identify() {
    console.log("Sou um cão e o meu nome é " + this.name);
  }
}

let cao = new Dog("Bob", "cachorro");
cao.identify();

/*
O método identify() da classe Animal já não está acessivel na classe
foi sobrescrito pelo método identify() da classe Dog
este tipo de polimorfismo é chamado de sobrescrita de métodos

Existe polimorfismo de dois tipos:
- Polimorfismo por sobreposição (overrindig)
- Polimorfismo por sobrecarga (overloading)
*/
