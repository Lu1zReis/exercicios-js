function getDayOfWeek(dia) {
    // SWITCH'S SÃO USADOS EM CASOS QUE TESTAMOS UMA UNICA VARIAVEL PARA DIFERENTES CASOS
    switch (dia) {
        case 0:
            return "Domingo";
            // break; normalmente iremos colocar um break, mas como tem um return, não precisamos
        case 1:
            return "Segunda";
            // break;
        case 2:
            return "Terça";
            // break;
        case 3:
            return "Quarta";
            // break;
        case 4:
            return "Quinta";
            // break;
        case 5:
            return "Sexta";
            // break;
        default:
            return "erro";
    }
}

const data = new Date();
const diaSemana = data.getDay();
const diaTexto = getDayOfWeek(diaSemana);

console.log(diaTexto, diaSemana);
