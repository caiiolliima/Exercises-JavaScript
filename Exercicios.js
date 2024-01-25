//Escreva um código em que, após o cliente solicitar a escolha da bebida, a opção ‘switch’ deve avaliar a opção selecionada e atribuir o valor correspondente à variável ‘valor’. Caso o cliente escolha uma opção inválida, uma mensagem informativa é exibida, indicando que a escolha deve ser feita entre café, leite ou chá. Por fim, se uma opção válida for selecionada, exibimos uma mensagem personalizada informando o nome da bebida escolhida e o valor a ser pago, formatado com duas casas decimais.

var bebida = "Guarana";

switch (bebida) {
    case bebida = "Café":
        console.log("A bebida escolhida foi", bebida, "o valor é R$ 2,50!");
        console.log("Aproveite sua bebida e tenha um ótimo dia!");
        break;
    case bebida = "Chá":
        console.log("A bebida escolhida foi", bebida, "o valor é R$ 3,00!");
        console.log("Aproveite sua bebida e tenha um ótimo dia!");
        break;
    case bebida = "Leite":
        console.log("A bebida escolhida foi", bebida, "o valor é R$ 1,50!");
        console.log("Aproveite sua bebida e tenha um ótimo dia!");
        break;
    default:
        console.log("A opção é invalida, por gentileza escolha entre café, leite ou chá!");
        break;
}

//Exercício 1 (for): Escreva um programa que imprima os números de 1 a 10 usando um loop for.
for (var i = 0; i <= 10; i++) {
    console.log(i)
}

//Exercício 2 (do-while): Escreva um programa que imprima os números de 1 a 5 usando um loop do-while.
var lista = 0;

do {
    console.log(lista);
    lista++;
}while (lista <= 10);

//Exercício 3 (while): Escreva um programa que imprima os números pares de 2 a 10 usando um loop while.
var listas = 0;

while (listas <= 10){
    console.log(listas);
    listas++;
}

/*Exercício 4 (if/else):
Escreva um programa que verifique se um número é positivo, negativo ou zero e imprima uma mensagem correspondente.*/
var numero = "Caio";

if (numero > 0){
    console.log("Você digitou o número:", numero, "Este número é positivo!");
}else if(numero < 0){
    console.log("Você digitou o número:", numero,"Este número é negativo!");
}else if(numero === 0){
    console.log("Você digitou o número:", numero);
}else{
    console.log("Por favor, digite um número! O valor", "'",numero,"'","não é um numero!");
}

/*Exercício 5 (switch):
Escreva um programa que imprima o dia da semana com base em um número (1 para segunda-feira, 2 para terça-feira, etc.).*/
var diaDaSemana = 5;

switch(diaDaSemana){
    case diaDaSemana = 1:
        console.log("Domingo");
    break;
    case diaDaSemana = 2:
        console.log("Segunda-Feira");
    break;
    case diaDaSemana = 3:
        console.log("Terça-Feira");
    break;
    case diaDaSemana = 4:
        console.log("Quarta-Feira");
    break;
    case diaDaSemana = 5:
        console.log("Quinta-Feira");
    break;
    case diaDaSemana = 6:
        console.log("Sexta-Feira");
    break;
    case diaDaSemana = 7:
        console.log("Sábado");
    break;
}

/*Exercício 6 (forEach):
Escreva um programa que imprima cada elemento de um array usando o método forEach.*/
var numeros = [1,2,3,4,5,6,7,8,9,10];

numeros.forEach(valor => console.log(valor));

/*Exercício 7 (map):
Escreva um programa que duplique cada elemento de um array usando o método map.*/
var numeros = [1,2,3,4,5,6,7,8,9,10];

var num = numeros.map(function(valor){
    return valor * 2;
})

console.log(num);

/*Exercício 8 (reduce):
Escreva um programa que calcule a soma de todos os elementos de um array usando o método reduce.*/
var numeros = [1,2,3,4,5,6,7,8,9,10];

var num2 = numeros.reduce(function(num2, numeros){
    return num2 + numeros;
},0);

console.log(num2);

/*Criar uma função que cria um objeto de uma pessoa e calcule o indice de massa corporal.
*Informe a classificação da pessoa com base na tabela abaixo*/

//Correção do professor Marcelo Struc.
function calculoImc(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        altura: a,
        peso: p,
        calculoImc(){
            const indice = this.peso/(this.altura ** 2).toFixed(1);
            if (indice < 18.5){
                console.log("Seu IMC resultou em", indice, "Você esta abaixo do peso!");
            }else if (indice >= 18.5 && indice <= 24.9){
                console.log("Seu IMC resultou em", indice, "Você esta no peso normal!");
            }else if (indice >= 25 && indice <= 29.9){
                console.log("Seu IMC resultou em", indice, "Você esta acima do peso!");
            }else if (indice >= 30 && indice <= 34.9){
                console.log("Seu IMC resultou em", indice, "Você esta com obesidade grau 1!");
            }else if (indice >= 35 && indice <= 39.9){
                console.log("Seu IMC resultou em", indice, "Você esta com obesidade grau 2!");
            }else{
                console.log("Seu IMC resultou em", indice, "Você esta com obesidade grau 3!");
            }

        }
    }
}
const pessoa1 = calculoImc("Caio","Lima",1.71,72);
pessoa1.calculoImc();

//Minha versão do exercício
function calculoImc(peso, altura){
    return peso / (altura ** 2);
}

const calculo = calculoImc(72,1.71);

if (calculo < 18.5){
    console.log("Seu IMC resultou em", calculo, "Você esta abaixo do peso!");
}else if (calculo >= 18.5 && calculo <= 24.9){
    console.log("Seu IMC resultou em", calculo, "Você esta no peso normal!");
}else if (calculo >= 25 && calculo <= 29.9){
    console.log("Seu IMC resultou em", calculo, "Você esta acima do peso!");
}else if (calculo >= 30 && calculo <= 34.9){
    console.log("Seu IMC resultou em", calculo, "Você esta com obesidade grau 1!");
}else if (calculo >= 35 && calculo <= 39.9){
    console.log("Seu IMC resultou em", calculo, "Você esta com obesidade grau 2!");
}else{
    console.log("Seu IMC resultou em", calculo, "Você esta com obesidade grau 3!");
}

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
            alert("Saldo posito de: R$", saldoAtual)
        }else{
            alert("Saldo negativo de: R$", saldoAtual);
        }
    }
}

let numeroConta = prompt("Digite o número da sua conta: ");
let saldo = parseFloat(prompt("Digite o saldo do cliente: "));
let debito = parseFloat(prompt("Digite o débito do cliente: "));
let credito = parseFloat(prompt("Digite o crédito do cliente: "));

let conta = new ContaCliente(numeroConta, saldo, debito, credito);
conta.verificarSaldo();

/*Imagine que você está desenvolvendo um sistema para uma empresa que possui diferentes tipos de funcionários, como gerentes e desenvolvedores. Seu objetivo é implementar o código em JavaScript que modele essa situação utilizando classes e herança.
Você precisa criar as classes Funcionario, Gerente e Desenvolvedor. A classe Funcionario deve ter os atributos nome, idade e cargo, além dos métodos seApresentar() e trabalhar(). A classe Gerente deve herdar da classe Funcionario e ter um atributo adicional departamento, além do método gerenciar(). Já a classe Desenvolvedor deve herdar da classe Funcionario e ter um atributo adicional linguagem, além do método programar().
Depois de implementar as classes, crie instâncias de um gerente e de um desenvolvedor, definindo valores para seus atributos. Em seguida, chame os métodos apropriados para cada um dos funcionários, exibindo as saídas corretas no console.
Boa sorte!*/
// Definindo a classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }
}

// Definindo a classe Gerente que herda de Funcionario
    class Gerente extends Funcionario {
        constructor(nome, idade, departamento) {
        super(nome, idade, 'Gerente');
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

// Definindo a classe Desenvolvedor que herda de Funcionario
    class Desenvolvedor extends Funcionario {
        constructor(nome, idade, linguagem) {
        super(nome, idade, 'Desenvolvedor(a)');
        this.linguagem = linguagem;
    }

    programar() {
    console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

// Criando instâncias de Gerente e Desenvolvedor
    const gerente1 = new Gerente('João', 35, 'TI');
    const desenvolvedor1 = new Desenvolvedor('Maria', 28, 'JavaScript');

// Chamando métodos apropriados
    gerente1.seApresentar();
    gerente1.trabalhar();
    gerente1.gerenciar();

    console.log('---------------------');

    desenvolvedor1.seApresentar();
    desenvolvedor1.trabalhar();
    desenvolvedor1.programar();