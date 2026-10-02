/*
    Crie uma classe simples com duas propriedades, nome e apelidao,
    e um apelido que devolva o nome completo. Instancie esta classe
    e teste o seu método .
*/

class Name {
  constructor(name, nickName) {
    this.name = name;
    this.nickName = nickName;
  }
  fullName() {
    console.log(`Nome: ${this.name} ${this.nickName}`);
  }
}

let person1 = new Name("Gabriel", "Naner");

person1.fullName();
