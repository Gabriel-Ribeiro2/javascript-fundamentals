/*
Crie uma classe Human com as propriedades nome e idade
A classe deve conter um método que devolva a frase:
"Olá, o meu nome é [nome] e tenho [idade] anos".
Crie dois objetos desta classe e teste o método criado.
*/

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  humanDescription() {
    console.log(`Olá, o meu nome é ${this.name} e tenho ${this.age} anos`);
  }
}

let human1 = new Human("Gabriel", 19);
let human2 = new Human("Pedro", 20);
human1.humanDescription();
human2.humanDescription();
