alert("Cálculo da Média do Aluno");

var nome;

nome = prompt("Insira o nome do Aluno");

var notas = [];
var soma = 0;
var i;

for(i = 1; i < 4; i++){
    notas[i] = prompt("Insira as notas do Aluno uma a uma");
    soma = soma + parseFloat(notas[i]);
    alert("nota"+i + " = " + notas[i]);
}

var decisao = confirm("Calcular média?");

if (decisao) {
     
    alert("Média do Aluno " + nome + " = " + soma/(i-1));
}