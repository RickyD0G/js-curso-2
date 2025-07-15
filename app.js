let numerosSorteados = [];
let numeroLimite = 2;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
mensagemInicial();


function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial()
{
    exibirTextoNaTela('h1', 'Jogo do número segreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a ' + numeroLimite);
}

function verificarChute()
{
    let chute = document.querySelector('input').value;
    tentativas ++;
    if (chute == numeroSecreto)
    {
        exibirTextoNaTela('h1', 'Parabens você acertou na ' + tentativas + 'ª tentativa');
        exibirTextoNaTela('p', 'Você acertou :)');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto)
        {
        exibirTextoNaTela('h1', 'Poxa não foi dessa fez, o numero secreto é menor que '+ chute);
        }else{
        exibirTextoNaTela('h1', 'Poxa não foi dessa fez, o numero secreto é maior que '+ chute);
        }
        limparCampo();
    }
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if(numerosSorteados.length == numeroLimite)
    {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
