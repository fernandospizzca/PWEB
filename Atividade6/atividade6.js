var userChoice = prompt("Faça sua escolha 1 - para Pedra, 2 - para Papel e 3 - para Tesoura");

function getComputerChoice() {
    var choices = ['1', '2', '3'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
var computer = getComputerChoice();

if (computer === userChoice) {
    alert("Emapate - Sua Jogada - " + userChoice + " Jogada PC - " + computer +
        '\n' + "1 - Pedra, 2 - Papel e 3 - Tesoura");
}
else if (computer === '1' && userChoice === '3') {
    alert("Pedra quebra Tesoura - Sua Jogada - " + userChoice + " Jogada PC - " + computer +
        '\n' + "1 - Pedra, 2 - Papel e 3 - Tesoura");
}
else if (computer === '1' && userChoice === '2') {
    alert("Papel cobre Pedra - Sua Jogada - " + userChoice + " Jogada PC - " + computer +
        '\n' + "1 - Pedra, 2 - Papel e 3 - Tesoura");
}
else if (computer === '2' && userChoice === '3') {
    alert("Tesoura corta Papel - Sua Jogada - " + userChoice + " Jogada PC - " + computer +
        '\n' + "1 - Pedra, 2 - Papel e 3 - Tesoura");
}
else if (computer === '3' && userChoice === '1') {
    alert("Pedra quebra Tesoura - Sua Jogada - " + userChoice + " Jogada PC - " + computer +
        '\n' + "1 - Pedra, 2 - Papel e 3 - Tesoura");
}
else if (computer === '2' && userChoice === '1') {
    alert("Papel cobre Pedra - Sua Jogada - " + userChoice + " Jogada PC - " + computer +
        '\n' + "1 - Pedra, 2 - Papel e 3 - Tesoura");
}
else if (computer === '3' && userChoice === '2') {
    alert("Tesoura corta Papel - Sua Jogada - " + userChoice + " Jogada PC - " + computer +
        '\n' + "1 - Pedra, 2 - Papel e 3 - Tesoura");
}
