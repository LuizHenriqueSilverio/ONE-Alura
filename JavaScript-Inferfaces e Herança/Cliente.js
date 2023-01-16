export class Cliente {
    constructor(nome, cpf, senha){
        this._nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }
}
