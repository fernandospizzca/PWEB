alert("Operações");

var nome;

var num = [];
var soma, subt, prod, div, resto; 

for(i = 0; i < 2; i++){
    num[i] = parseFloat(prompt("Insira dois números"));
}

soma = num[0] + num[1];
subt = num[0] - num[1];
prod = num[0] * num[1];
div = num[0] / num[1];
resto = num[0] % num[1];

alert("Soma = " + soma + "\n" + "Subtração  = " + subt + "\n" + "Produto = " + prod + "\n" + 
"Divisão = " + div + "\n" + "Resto = " + resto);
