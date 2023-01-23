/*
VALORES AVALIADOS EM FALSO
    * FALSY
    - false
    - 0
    - '' / "" / ``
    - null / undefined
    - NaN
*/

// operador && (and)
console.log('Luiz' && '' && 'Maria'); // ele irá retornar o primeiro valor falso ('')

// usando para desviar um fluxo ***************************
function falaOi() {
    return 'Oi';
}
const vaiExecuta = ''; // dependendo desse valor, vamos ver se irá executar
console.log(vaiExecuta && falaOi);

// operador || (or)
console.log(false || undefined || "qualquer coisa" || true); // o primeiro valor que ele achar fora dos falsy, ele irá retorna

// usando para desviar o fluxo ********************
const corUsuario = null; // caso o usuário passe uma cor, irá ser inserido na cor do sistema, graças ao short-circuit
const corPadrao = "preto";
const corSistema = corUsuario || corPadrao; // irá retornar o primeiro valor verdadeiro
console.log(corSistema);
