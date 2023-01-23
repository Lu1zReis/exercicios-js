const alunos = ['Luiz', 'Maria', 'Ana'];

// ADICIONANDO VALORES NO ARRAY
alunos.push('Vi'); // adicionando no final
alunos.unshift('Kaká'); // adicionando no inicio
alunos[alunos.length] = 'Victor'; // adicionando também na última posição (mesmo que aquela posição não exista)

// REMOVENDO VALORES NO ARRAY
delete alunos[0]; // podemos deletar um valor, mas a posição ainda existirá (Kaká) 
alunos.pop(); // deletando o final (Victor) 
alunos.shift(); // deletando o inicio (empty)

// FATIANDO O ARRAY
console.log(alunos.slice(0, -1)) // indo de uma posição até outra



console.log(alunos);
