// a desestruturação serve para passarmos valores de maneira mais fácil para outras variaveis
const [um, dois] = [1, 2];
console.log(um, dois);

// podemos passar com um resto também usando '...'
// se não passarmos, só os dois primeiros valores da lista irão ser retirados
const [val1, val2, ... vals] = [300, 25, 4, 430, 8, 0];
console.log(val1, val2);
console.log(vals);

// podemos pular os indices com ', ,'
const [marca1, , marca2, , marca3] = ['Ford', 'Tesla', 'Gol', 'Chevrolet', 'Nissan', 'Mais...'];
console.log(marca1, marca2, marca3); 
