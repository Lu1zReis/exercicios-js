let num1 = 10;
let num2 = 2.5;

console.log(num1.toString() + num2); // usar o toString() para converte o valor number para string

console.log(num1.toString(2)); // se passarmos um parametro, como 2, ele retorna o binário do valor

console.log(num2.toFixed(2)); // arredondar

console.log(Number.isInteger(num1)); // retorna um true ou false se for inteiro ou não

let calc = num1 * 'Ola';
console.log(Number.isNaN(calc)); // retorna um true ou false se tentarmos calcular um numero com uma string que não contem numero

// TRABALHANDO COM VALORES FLUTUANTES
let v1 = 0.7;
let v2 = 0.1;
v1 += v2

console.log(v1); // 0.7999999999...
console.log(parseFloat(v1.toFixed(2))); // para corrigirmos a imprecisão das casas decimais (0.8)
console.log(Number(v1.toFixed(2))); // também podemos usar o number
console.log(parseInt(v1.toFixed(2))); // podemos usar também o parseInt, porém ele só retorna o inteiro
