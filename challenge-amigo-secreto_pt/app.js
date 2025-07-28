//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function atualizarLista() {
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para adicionar o nome do amigo na lista   
function adicionarAmigo() {
    let amigo = inputAmigo.value.trim();
    if (amigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (amigos.includes(amigo)) {
        alert('Este amigo já foi adicionado.');
        return;
    }
    
    amigos.push(amigo);
    inputAmigo.value = '';
    atualizarLista();
}     

// Função para sortear os amigos
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
    }

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }
  
    let sorteados = [];
    let amigosRestantes = [...amigos];

    while (amigosRestantes.length > 0) {
        let indexSorteado = Math.floor(Math.random() * amigosRestantes.length);
        let amigoSorteado = amigosRestantes[indexSorteado];

        // Verifica se o amigo sorteado não é o próprio
        if (sorteados.length < amigos.length - 1 || !sorteados.includes(amigoSorteado)) {
            sorteados.push(amigoSorteado);
            amigosRestantes.splice(indexSorteado, 1);
        }
    }

    resultado.innerHTML = '';
    sorteados.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = `${amigos[index]} -> ${amigo}`;
        resultado.appendChild(li);
    });

}

function limparLista() {
    amigos = [];
    inputAmigo.value = '';
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
}

let sorteado = false;

function sortearOuLimpar() {
    if (!sorteado) {
        sortearAmigo();
        sorteado = true;
        document.getElementById('textoBotao').textContent = 'Limpar sorteio';
    } else {
        limparResultado();
        sorteado = false;
        document.getElementById('textoBotao').textContent = 'Sortear amigo';
    }
}

function limparResultado() {
    resultado.innerHTML = '';
}

function limparLista() {
    amigos = [];
    inputAmigo.value = '';
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
    sorteado = false;
    document.getElementById('textoBotao').textContent = 'Sortear amigo';
}

