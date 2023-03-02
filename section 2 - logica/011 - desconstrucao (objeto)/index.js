// estrutura de um objeto

const pessoa = {
    cpf: 1211231,
    nome: 'Luiz',
    idade: 20,
    endereco: {
        cep: 78160805,
        rua: 5
    }
};

// descontrução básica ( além de deixar um valor padrão para nome caso não exista essa var (se quisermos))
// podemos mudar o nome também de tal var dentro do obj, como no caso em idade

const { 
    nome = 'Não existe', // aqui é o valor padrão dessa destruturaçãp
    idade: anos, // aqui estamos passando outro nome como variavel 
    endereco,  // essa var endereco serve para puxarmos o obj todo
    endereco: { // desestruturação de um obj dentro de outro
        cep, 
        rua
    } } = pessoa; // aqui definimos da onde vamos puxar esses valores               

// também podemos passar um valor que a partir dele, irá pegar todo o resto graças a '...'
const {cpf, ... resto} = pessoa;                                    

// exibindo valores (exibindo o enderecço separado, já que podemos entender melhor)
console.log(nome, anos, cep, rua);
console.log(endereco);
console.log(resto);
