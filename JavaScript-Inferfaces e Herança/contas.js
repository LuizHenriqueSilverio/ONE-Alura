import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente('Ricardo', 12345678910);

const cliente2 = new Cliente('Alice', 98765432110);

const contaCliente1 = new ContaCorrente(cliente1, '1001');
contaCliente1.depositar(1000);
contaCliente1.sacar(500);

const contaCliente2 = new ContaPoupanca(100, cliente2,'0728');
contaCliente2.depositar(100);

const contaCliente3 = new ContaSalario(cliente2);
contaCliente3.depositar(1302);

console.log(contaCliente1);
console.log(contaCliente2);
console.log(contaCliente3);
