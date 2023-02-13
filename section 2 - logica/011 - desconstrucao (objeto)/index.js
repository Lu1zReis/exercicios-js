// estrutura de um objeto
const pessoa = {
    cpf: 1211231,
    nome: 'Luiz',
    idade: 20,
    endereco: {
        cep: 78160805,
        rua: 5
    }
}

// descontrução básica ( além de deixar um valor padrão para nome caso não exista essa var (se quisermos))
// podemos mudar o nome também de tal var dentro do obj, como no caso em idade

const { 
    nome = 'Não existe', 
    idade: anos, 
    endereco, 
    endereco: {
        cep, 
        rua
    } } = pessoa;


// também podemos passar um valor que a partir dele, irá pegar todo o resto graças a '...'
const {cpf, ... resto} = pessoa;

// exibindo valores (exibindo o enderecço separado, já que podemos entender melhor)
console.log(nome, anos, cep, rua);
console.log(endereco);
console.log(resto);
