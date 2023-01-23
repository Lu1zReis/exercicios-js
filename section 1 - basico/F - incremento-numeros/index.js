// ao usar o incremento ou decremento, há duas formas
// pós incremento (ele executa, depois ele soma)
let contador = 1;
console.log(contador++); // 1
console.log(contador) // 2 

// pré incremento (ele soma já na execução)
let contador2 = 1
console.log(++contador2); // 2

////////////////////////////////////////////////////

/*
    há três formas de converter um numero de string para número em JS
    * parseInt(inteiro);
    * parseFloat(flutuante);
    * Number(valor_qualquer);
*/

let num1 = parseInt('5');
let num2 = parseFloat('6');
let num3 = Number('90');

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);
