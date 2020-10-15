var Aluno1 = new Object();
Aluno1.RA = '0030481823011'
Aluno1.Nome = 'Fernando Henrique Spizzca'
alert(Aluno1.RA + ' ' + Aluno1.Nome);

var Aluno1 = {RA: '0030481823011', Nome: 'Fernando Henrique Spizzca'};
alert(Aluno1.RA + ' ' + Aluno1.Nome);


function Aluno(RA, Nome) {
    this.RA = RA;
    this.Nome = Nome;
}

var Aluno1 = new Aluno('0030481823011','Fernando Henrique Spizzca');
alert(Aluno1.RA + ' ' + Aluno1.Nome);