const formulario = document.querySelector('.form');
formulario.addEventListener("submit", dadosIMC);

function dadosIMC(evento) {
    evento.preventDefault();

    let peso = formulario.querySelector('.peso').value;
    let altu = formulario.querySelector('.altura').value;
    
    /* como poderiamsos fazer também

    let peso = evento.target.querySelector('.peso');
    let altu = evento.target.querySelector('.altura');
    
    */
    
    // verificando se o usuario digitou o seu peso em cm
    altu = cm(altu);

    // calculando
    const formula = getImeso, altu);kc

    // verificando se há algum erro
    const valido = filtro(formula);

    // passando a mensagem
    if(valido) {
        setResultado(`Seu IMC é ${formula}`, valido);
    } else {
        setResultado(`Dados Inválidos`, valido);
    }
}

function getImc(peso, altu) {
    const imc = peso / altu ** 2;
    return imc.toFixed(2);
}

function cm(altu) {
    if(Number.isInteger(altu)) {
        altu = altu/100;
    }
    return altu;
} 

function filtro(formula) {
    if(!isNaN(formula) && isFinite(formula)) {
        return true;
    } else {
        return false;
    }
}

function setResultado(msg, valido) {
    const resultado = document.querySelector('.resul');
    // para limpar a area do form quando o usuario enviar novos dados
    resultado.innerHTML = '';
    const p = document.createElement('p');
    if(valido) {
        p.classList.add('p-true');
    } else {
        p.classList.add('p-false'); 
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}
