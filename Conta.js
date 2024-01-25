//Exercicio - Conta (Aula "Praticando uso de classes"
class ContaCliente{
    constructor(numeroConta, saldo, debito, credito){
        this.numeroConta = numeroConta,
        this.saldo = saldo,
        this.debito = debito,
        this.credito = credito
    }

    calcularSaldoAtual(){
        return this.saldo - this.debito + this.credito
    }

    verificarSaldo(){
        const saldoAtual = this.calcularSaldoAtual();
        if(saldoAtual >= 0){
            alert("Saldo positivo de: R$" + saldoAtual)
        }else{
            alert("Saldo negativo de: R$" + saldoAtual);
        }
    }
}

let numeroConta = prompt("Digite o número da sua conta: ");
let saldo = parseFloat(prompt("Digite o saldo do cliente: "));
let debito = parseFloat(prompt("Digite o débito do cliente: "));
let credito = parseFloat(prompt("Digite o crédito do cliente: "));

let conta = new ContaCliente(numeroConta, saldo, debito, credito);
conta.verificarSaldo();