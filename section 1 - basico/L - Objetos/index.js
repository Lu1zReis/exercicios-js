// Podemos criar um objeto de pessoa (como um dicionário)
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Eduardo',
    idade: 20,

    // podemos também criar um método se quisermos
    fala() {
        console.log(`Seu nome é ${this.nome}`);
        console.log(`Seu sobrenome é ${this.sobrenome}`);
        console.log(`Você tem ${this.idade}`);
    }
};

console.log(pessoa1.idade); // podemos acessar os dados dessa pessoa
pessoa1.fala(); // podemos chamar o método dentro do objeto


///////////////////////////////////////////////////////////////////////////////////////////
// Podemos também criar uma função que cria obejtos
function criaPessoa(n, s, i) {
    return {
        nome: n,
        sobrenome: s,
        idade: i
    };
}

// A função criaPessoa agora criará objetos para nós
const pessoa2 = criaPessoa('Dérecka', 'Antunes', 20);
console.log(pessoa2); // também podemos acessar o objeto pessoa2, por exe: pessoa2.nome
