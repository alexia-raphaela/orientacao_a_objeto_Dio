class ContaBancaria {
    constructor(agencia, numero) {
        this._agencia = agencia
        this._numero = numero
        this._tipo = 'conta bancaria'
        this._saldo = 0
    }

    get saldo() {
        return this._saldo;
    }

    set saldo (valor) {
        this._saldo = valor;
        //console.log(this._saldo)
    } 

    sacar(valor) {
        if(valor > this._saldo) {
            return 'Não é possivel fazer saque'
        }
        this._saldo = this._saldo - valor
        
        //let restaSaldo = this._saldo
        return `Você sacou R$ ${valor}, resta R$ ${this._saldo}`
    }

    depositar(deposito) {
        this._saldo = this._saldo + deposito
        //let saldoAtual = this._saldo
        return `Você depositou R$ ${deposito}, saldo atual R$ ${this._saldo}`
    }
}

let minhaConta = new ContaBancaria(12, 3, 'itau', 600)
console.log(minhaConta.saldo)
console.log(minhaConta.sacar(700))
/*console.log(minhaConta.depositar(20))
minhaConta.saldo = 10
console.log(minhaConta.saldo) */




class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito, tipo = 'conta corrente') {
        super(agencia, numero, tipo)
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(limiteCartaoCredito) {
        this._cartaoCredito = limiteCartaoCredito;
    }
}
/*let conta1 = new ContaCorrente(22, 1, 600, 300)
console.log(conta1.cartaoCredito)
console.log(conta1.cartaoCredito = 500)
*/

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, tipo = 'conta poupança') {
        super(agencia, numero, tipo)
    }

}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, tipo) {
        super(agencia, numero, tipo)
        this.tipo = 'conta universitaria'
    }

    sacar(valor) {
    if (valor >= 500 || this._saldo < valor) {
        console.log(this._saldo)
        return 'Saque negado'
    }
    this._saldo = this._saldo - valor
    
    return `Você sacou R$ ${valor}, resta R$ ${this._saldo}` 
    }
}
let conta = new ContaUniversitaria(25, 2, 'e', 700)
//console.log(conta.sacar(498)) 