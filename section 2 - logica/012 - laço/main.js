const elementos = [
	{tag: 'div', texto: 'primeiro texto'},
	{tag: 'h1', texto: 'segundo texto'}
];

const area = document.querySelector('.container');

// caso existisse um elemento div no html, nao precisariamos criar uma div aqui
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
	
	/* podemos pegar os valores de cada objeto da seguinte forma:
	let tag = elementos[i].tag;
	let tex = elementos[i].texto;
	*/

	// ou também podemos pegar assim:
	let {tag, texto} = elementos[i];
	
	// aqui ele cria a tag que capturamos do objeto, seja <div>, <p>, <h1> etc
	let criaTag = document.createElement(tag);

	// aqui ele joga o valor que capturamos no objeto texto, na tag criada
	criaTag.innerText = texto;

	// finalmente ele vai fazendo um append() em uma div qualquer criada antes
	// poderiamos tambem estar passando direto para a variavel 'area', em vez de depois
	div.appendChild(criaTag);
}

area.appendChild(div);

