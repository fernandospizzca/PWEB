class Retangulo{
    constructor(x,y){
        this.base = x;
        this.altura = y;
    }

    calcArea(){
        return this.base * this.altura;
    }
} 

var x = parseFloat(prompt("Informe a Base: "));
var y = parseFloat(prompt("Informe a Altura: "));

var r = new Retangulo(x, y);

alert("Area = " + r.calcArea());

function Conta(nome, banco, contaNum, saldo){
    this.nome = nome;
    this.banco = banco;
    this.contaNum = contaNum;
    this.saldo = saldo;
    
    this.getNome = function(){
        return this.nome;
    }

    this.getBanco = function(){
        return this.banco;
    }

    this.getNumConta = function(){
        return this.contaNum;
    }

    this.getSaldo = function(){
        return this.saldo;
    }
}

function Corrente(nome, banco, contaNum, saldo, saldoEspecial){
    Conta.call(this, nome, banco, contaNum, saldo);

    this.saldoEspecial = saldoEspecial;

    this.getSaldoEspecial = function(){
        return this.saldoEspecial;
    }
}


function Poupanca(nome, banco, contaNum, saldo, saldoJuros){
    Conta.call(this, nome, banco, contaNum, saldo);

    this.saldoJuros = this.saldo * 1.05;
    
    this.getSaldoJuros = function(){
        return this.saldoJuros;
    } 
}

conta = new Conta('Fernando', '033', '1234-5', 1000.50);
contaEspecial = new Corrente( conta.getNome(), conta.getBanco(), conta.getNumConta(), conta.getSaldo(), 2000);
contaPoupanca = new Poupanca(conta.getNome(), conta.getBanco(), conta.getNumConta(), conta.getSaldo());

console.log(conta);
console.log(contaEspecial);
console.log(contaPoupanca);