// constantes
const nome = 'Luiz Eduardo';
const idade = 20;
const pesoKg = 53;
const alturaMetros = 1.7;

// variaveis
let anoNasc = 2023 - 20;
let imc = pesoKg / (alturaMetros * alturaMetros);

// exibindo resultados (de maneiras diferentes)
console.log(nome + ' tem ' + idade + ' anos, pesa ' + pesoKg + ' kg');
console.log(`tem ${alturaMetros} de altura. Seu IMC é de ${imc}`);
console.log('Você nasceu em', anoNasc);
