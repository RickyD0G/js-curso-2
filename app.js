let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número segreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 100');

function verificarChute()
{
    console.log(numeroSecreto)
}

function gerarNumeroAleatorio()
{
    return parseInt(Math.random() * 100 + 1);
}
