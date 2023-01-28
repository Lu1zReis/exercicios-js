formulario = document.querySelector('.form');
resultado = document.querySelector('.resul');
function dadosIMC(evento) {
    evento.preventDefault();
    const peso = formulario.querySelector('.peso');
    console.log(peso);
}
