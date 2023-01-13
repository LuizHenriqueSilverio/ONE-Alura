import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente('Ricardo', 12345678910);

const cliente2 = new Cliente('Alice', 98765432110);

const contaCliente1 = new ContaCorrente(cliente1, '1001');
contaCliente1.depositar(1000);
contaCliente1.sacar(500);

const contaCliente2 = new ContaPoupanca(100, cliente2,'0728');
contaCliente2.depositar(100);


console.log(contaCliente1);
console.log(contaCliente2);
console.log(`Número de contas corrente: ${ContaCorrente.numeroDeContas}`);
