const formulario = document.querySelector('.form');
formulario.addEventListener("submit", dadosIMC);

const resultado = document.querySelector('.resul');

function dadosIMC(evento) {
    evento.preventDefault();

    let peso = (formulario.querySelector('.peso').value);
    let altu = (formulario.querySelector('.altura').value);
    
    // verificando se o usuario digitou o seu peso em cm
    if(Number.isInteger(altu)) {
        altu = altu/100;
        console.log(altu);
    }

    const formula = peso / altu ** 2

    // testando os pesos e verificando aonde eles se encaixam


    // verificando se há algum erro
    if(!isNaN(formula) && isFinite(formula)) {
        resultado.innerHTML = `<font style='background-color: blue; color: white;'>${formula}</font>`;
    } else {
        resultado.innerHTML = "<font style='background-color: red;'color='white'>Os dados são inválidos</font>";
    }
}
