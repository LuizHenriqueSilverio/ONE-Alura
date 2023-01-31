import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor('Rodrigo', 10000, '12345678910');
diretor.cadastrarSenha('123456');
const gerente = new Gerente('Ricardo',  5000, '14246534785');
gerente.cadastrarSenha('123');

const diretorLogado = SistemaAutenticacao.login(diretor, '123456789');
console.log(diretorLogado);
estaLogado = SistemaAutenticacao.login(gerente, '123');
console.log(gerenteLogado);


