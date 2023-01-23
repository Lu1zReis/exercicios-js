// uma boa prática de programação é criar uma função para o que queremos fazer, pois caso o código seja grande, não entrará em conflito com outras variáveis etc.

function main() {
    // irá pegar todos os campos desse formulário
    const formulario = document.querySelector('.form');
    // selecionando parte do documento para escrever
    const resultado = document.querySelector('.resultado');

    // para armazenar
    const pessoas = []

    // verificando quando o usuário vai enviar
    formulario.addEventListener("submit", dadosForm);

    // outra forma de verificar quando o usuário irá clicar
    // formulario.onsubmit = function(evento) {...}

    function dadosForm(evento) {
        // tirando a atualização por padrão do site
        evento.preventDefault();

        // pegando os dados direto do formulario especifico, em vez do document
        const nome = formulario.querySelector('.nome').value;
        const sobrenome = formulario.querySelector('.sobrenome').value;
        const idade = formulario.querySelector('.idade').value;

        // criando uma função para criar os objetos de uma pessoa
        function criaPessoa(nome, sobrenome, idade) {
            return{
                nome: nome,
                sobrenome: sobrenome,
                idade: idade
            }
        }

        // adicionando na lista
        pessoas.push(criaPessoa(nome, sobrenome, idade));
        
        // exibindo os dados
        console.log(pessoas)
        resultado.innerHTML += `<h2> ${nome} ${sobrenome}: ${idade} ano(s) <h2>`;
        resultado.innerHTML += '<hr>';

    }
}

main()
