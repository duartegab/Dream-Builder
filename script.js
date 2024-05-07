var textos = [
    "- Oie, eu sou o Bob, seu Dream Builder (Construtor de Sonhos)!",
    "- Nesse site, realizarei o seu sonho de ser Fatec!",
    "- Lembre-se que, nesse processo, funciona como uma via de mão dupla.",
    "- Te dou os recursos, e você os torna realidade!",
    "- Vai ser uma jornada incrível. Vamos nessa?!."
];

// Intervalo em milissegundos entre cada caractere
var intervalo = 100;

// Função para exibir o texto aos poucos
function mostrarTextoAosPoucos(paragrafo, texto) {
    var i = 0;
    var timer = setInterval(function() {
        document.getElementById(paragrafo).innerHTML += texto[i];
        i++;
        if (i === texto.length) clearInterval(timer);
    }, intervalo);
}

// Chamando a função para cada parágrafo
window.onload = function() {
    mostrarTextoAosPoucos("- Oie, eu sou o Bob, seu Dream Builder (Construtor de Sonhos)!", textos[0]);
    setTimeout(function() {
        mostrarTextoAosPoucos("- Nesse site, realizarei o seu sonho de ser Fatec!", textos[1]);
    }, intervalo * textos[0].length);
    setTimeout(function() {
        mostrarTextoAosPoucos("- Lembre-se que, nesse processo, funciona como uma via de mão dupla.", textos[2]);
    }, intervalo * (textos[0].length + textos[1].length));
    setTimeout(function() {
        mostrarTextoAosPoucos("- Te dou os recursos, e você os torna realidade!", textos[3]);
    }, intervalo * (textos[0].length + textos[1].length + textos[2].length));
    setTimeout(function() {
        mostrarTextoAosPoucos("- Vai ser uma jornada incrível. Vamos nessa?!", textos[4]);
    }, intervalo * (textos[0].length + textos[1].length + textos[2].length + textos[3].length));
};