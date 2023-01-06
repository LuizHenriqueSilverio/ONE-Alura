class contaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }
}

class Cliente extends contaCorrente {
    nome;
    cpf;
}