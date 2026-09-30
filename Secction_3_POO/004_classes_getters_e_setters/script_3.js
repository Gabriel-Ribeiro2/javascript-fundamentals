/*
Vamos imaginar que temos uma classe que simboliza uma conta bancária.
A classe vai ter uma propriedade privada: #saldo.
Vai ter um método para sacar dinheiro: sacarDinheiro(valor).
O método vai controlar se o valor a sacar é maior que o saldo disponível

O nome das classes deve começar com letra maiúscula
*/

class ContaBancaria {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  get apresentarSaldo() {
    return this.#saldo + " moedas";
  }

  sacarDinheiro(valor) {
    if (valor > this.#saldo) {
      console.log("Saldo Insuficiente!");
    } else {
      this.#saldo -= valor;
      console.log("Foi sacado: " + valor + ". Ficou no saldo: " + this.#saldo);
    }
  }
}

let minhaConta = new ContaBancaria(1000);

minhaConta.sacarDinheiro(500);
minhaConta.sacarDinheiro(300);
minhaConta.sacarDinheiro(100);
minhaConta.sacarDinheiro(400);

console.log(minhaConta.apresentarSaldo);
