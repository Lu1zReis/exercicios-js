const nivelUsuario = 500;

// Jeito normal de se fazer um teste
if (nivelUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
}

// Jeito mais curto de fazer o mesmo teste
// CONDICAO ? "VALOR VERDADEIRO" : "VALOR FALSO";
const resultado = nivelUsuario >= 1000 ? "Usuário VIP" : "Usuário Normal";
console.log(resultado);

// CONDICAO DO JS
const CorUsuario = 'red'; // se estiver null, será atribuido a cor do sistema
const CorSistema = CorUsuario || "black";
console.log(CorSistema);