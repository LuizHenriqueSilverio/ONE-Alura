import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente('Ricardo', 12345678910);

const cliente2 = new Cliente('Alice', 98765432110);

const contaCliente1 = new ContaCorrente('007', cliente1);
contaCliente1.depositar(1000);
contaCliente1.sacar(500);

const contaCliente2 = new ContaCorrente('058', cliente2);
contaCliente2.depositar(100);

console.log(contaCliente1);
console.log(contaCliente2);
console.log(`Número de contas: ${ContaCorrente.numeroDeContas}`);