/*
function escrevendoTela(msg) {
    const resultado = document.querySelector('.principal');
    const h1 = document.createElement('h1');
	
    resultado.innerHTML = "";

    h1.innerHTML = msg;
    resultado.appendChild(h1);
}

function zeroEsquerda(tempo) {
	return tempo >= 10 ? tempo : `0${tempo}`;
}

// Funcoes que irao retornar os dados
function getDay(data) {
	const day = data.getDay();
	
	switch(day) {
	case 0:
		return "Domingo";
	case 1:
		return "Segunda-Feira";
	case 2:
		return "Terça-Feira";
	case 3:
		return "Quarta-Feira";
	case 4:
		return "Quinta-Feira";
	case 5:
		return "Sexta-Feira";
	case 6:
		return "Sábado";
	};
}

function getMonth(data) {
	const mes = data.getMonth();
	switch(mes) {
		case 0:
			return "Janeiro";
		case 1:
			return "Fevereiro";
		case 2:
			return "Março";
		case 3:
			return "Abril";
		case 4:
			return "Maio";
		case 5:
			return "Junho";
		case 6:
			return "Julho";
		case 7:
			return "Agosto";
		case 8:
			return "Setembro";
		case 9:
			return "Outubro";
		case 10:
			return "Novembro";
		case 11:
			return "Dezembro";
	}
}

function getDayMonth(data) {
	return data.getDate();
}
function getYear(data) {
	return data.getFullYear();
}
function getTime(data) {
	const min = zeroEsquerda(data.getMinutes());
	const seg = zeroEsquerda(data.getSeconds());
	return `${min}:${seg}`;
}

function getData() {

    const data = new Date();

	// variaveis para pegar as datas
	const dia = getDay(data); 
	const mes = getMonth(data);
	const dMes = getDayMonth(data);
	const ano = getYear(data);
	const horario = getTime(data);

	// formatando
	const horaFormatada = `${dia}, ${dMes} de ${mes} de ${ano} ${horario}`;

    escrevendoTela(horaFormatada);
}

getData();
*/

// outra forma
const resultado = document.querySelector('.principal');
const h1 = document.createElement('h1');

resultado.innerHTML = "";

h1.innerHTML = msg;
resultado.appendChild(h1);
}
	dateStyle: 'full',
	timeStyle: 'short'
}
resultado.innerHTML = data.toLocaleDateString('pt-br', opcoes);