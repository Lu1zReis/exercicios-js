// todas essas funções, são métodos do objeto window (front-end)
alert('Olá, tudo bem?'); // alert é uma função que retorna undefined!

confirm('Deseja realmente apagar?'); // confirm só há dois valores, true ou false!

prompt('Qual seu nome?'); // essa função retorna o valor da entrada do usuário!

// trabalhando com os dados
let num1 = prompt('Digite 1º número');
let num2 = prompt('Digite 2º número');

resul = Number(num1) + Number(num2);

alert(`o resultado da soma é: ${resul}`);

console.log(resul) // para mostrar no console
