let num1 = 9.49

// arrendondamento
console.log(Math.floor(num1)); // arredonda para baixo
console.log(Math.ceil(num1)); // arredonda para cima
console.log(Math.round(num1)); // arredonda para o mais próximo

// maximo e minimo
console.log(Math.max(2,5,7,-1,100,90)); // pega o maior valor
console.log(Math.min(2,5,7,-1,100,90)); // pega o menor valor

// aleatório
let aleatorio = Math.random() * 10 // indo até o 10
console.log(Math.round(aleatorio)); // tirando as casas decimais 

// infinity
let val = 100 / 0
console.log(val) // retorna infinity (mas é um number)
