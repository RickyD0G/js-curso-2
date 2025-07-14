let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;


function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número segreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 100');

function verificarChute()
{
    let chute = document.querySelector('input').value;
    tentativas += 1;
    if (chute == numeroSecreto)
    {
        exibirTextoNaTela('h1', 'Parabens você acertou na ' + tentativas + 'ª tentativa');
        exibirTextoNaTela('p', 'Você acertou :)');
    }else if(chute > numeroSecreto){
        exibirTextoNaTela('h1', 'Poxa não foi dessa fez, o numero secreto é menor que '+ chute);
    }else{
        exibirTextoNaTela('h1', 'Poxa não foi dessa fez, o numero secreto é maior que '+ chute);
    }
}

function gerarNumeroAleatorio()
{
    return parseInt(Math.random() * 100 + 1);
}

