alert("Pesquisa de Opinião Sobre a Palestra");

var idade = [], sexo, opinao;


var somaidade = 0;
var contSexoM = 0;
var contSexoF = 0;
var contOpOt = 0;
var contOpBom = 0;
var contOpPes = 0;
var i;
var decisao;

for (i = 1; i <= 45; i++) {
    idade[i] = parseInt(prompt("Qual a sua Idade?"));
    somaidade = somaidade + idade[i];
    sexo = prompt("Qual o seu Sexo? Insira M-Masculino ou F-Feminino");

    if (sexo === 'M' || sexo === 'm') {
        contSexoM++;
    }
    else if (sexo === 'F' || sexo === 'f') {
        contSexoF++;
    }
    opinao = parseInt(prompt("Qual a sua opinião sobre a Palestra? Insira 4 para Ótimo, 3 para Bom e 1 para Péssimo"));
    if (opinao === 4) {
        contOpOt++;
    }
    else if (opinao === 3) {
        contOpBom++;
    }
    else if (opinao === 1) {
        contOpPes++;
    }
    
    decisao = confirm("Deseja preencher formulário?");
    if(decisao){

    }
    else{
        break;
    }
}

var maxV = idade.reduce(function(a, b) {
    return Math.max(a, b)});

var maxJ = idade.reduce(function(a, b) {
        return Math.min(a, b)});

decisao = confirm("Exibir resultado da pesquisa?");

if (decisao) {

    alert(
        "A média da idade das pessoas é: " + (somaidade/i).toFixed(2) + "\n" +
        "A pessoa mais velha tem " + maxV + " anos\n" +
        "A pessoa mais nova tem " + maxJ + " anos\n" +
        "A quantidade de pessoas que responderam péssimo é: " + contOpPes + "\n" +
        "A porcentagem de pessoas que responderam ótimo ou bom é: " + (((contOpOt + contOpBom)/i)*100).toFixed(2) + "%\n" +
        "A quantidade de pessoas que são mulheres é: " + contSexoF + "\n" +
        "A quantidade de pessoas que são homens é: " + contSexoM + "\n")
}