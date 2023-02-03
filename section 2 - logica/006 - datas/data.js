// adicionando um zero na frente do valor
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1); // os meses tem o intervalo de 0 - 11
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    const ms = zeroEsquerda(data.getMilliseconds());
    const diaSema = zeroEsquerda(data.getDay());
    // retornando a data formatada gracas ao objeto get da data
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} | ${diaSema} | ${ms}`;
}

const data = new Date(); // a, m, d, h, M, S, MS
// poderiamos passar: date('2020-04-20 20:20:59');
// se passarmos como está acima, podemos depois ver as caracteristicas dessa data, como em qual dia da semana caiu e etc.

console.log(data); // data normal
console.log(data.toString()) // data em formato americano
const dataFormatada = formataData(data);
console.log(dataFormatada);
