let texto  = "olá, \"mundo\"!"; // se quisermos escapar "" dentro de outros "", usamos o  \
console.log(texto);
console.log(texto[0]); // também podemos usar a interação em texto, passando a sua posição referente

console.log(texto.concat(' okay?')); // o concat serve exatamente só para concatenar

console.log(texto.indexOf('mundo', 0)); // indexOf busca uma palavra e retorna a sua posiçõa, também podemos passar em qual posição ele pode começar

console.log(texto.lastIndexOf('Olá')) // ele começa de trás para frente, buscando a palavra, podemos também passar uma posição como 2o parametro

console.log(texto.match(/[a-z]/g)) // expressões regulares, podemos colocar o g ou não. Ele retorna todas as letras do alfabeto minusculas

// Temos: match(/[a-z]/), match(/[A-Z]/g), match(/[0-9]/g), etc...

console.log(texto.search(/x/)) // ele busca uma letra e também podemos usar expressão regular

// o replacae substitui uma palavra, ou em expressão regular, ele substitui todas  
console.log(texto.replace('mundo', 'terra'))
console.log(texto.replace(/o/g, '*'))

console.log(texto.length) // retorna o tamanho

console.log(texto.slice(0,3)) // fatiamento do texto

console.log(texto.split(' ',2)) // dividindo o texto e colocando o em um array (podemos passar um parametro, falando quantas vezes queremos dividir)

console.log(texto.toUpperCase()) // LETRAS MAIUSCULAS
console.log(texto.toLowerCase()) // LETRAS MINUSCULAS
