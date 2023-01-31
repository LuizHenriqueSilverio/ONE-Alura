//Classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error('Não se deve instanciar um objeto do tipo Conta diretamente, pois é uma classe abstrata.');
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(valor){
        if(valor instanceof Cliente){
            this._cliente = valor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        throw new Error(`O método 'sacar' de Conta é abstrato.`);
    }

    _sacar(valor, taxa){
        let valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
