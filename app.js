let amigo = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNome = amigoInput.value.trim();

    if (!amigoNome) {
        alert('Por favor, insira um nome.');
        return;
    }

    if (!amigo.includes(amigoNome)) {
        amigo.push(amigoNome);
        updateamigoList();
        amigoInput.value = '';
    } else {
        alert('Nome já adicionado');
    }
}

function updateamigoList() {
    const amigoList = document.getElementById('listaamigo');
    amigoList.innerHTML = amigo.map(name => `<li>${name}</li>`).join('');
}

function sortearAmigo() {
    if (amigo.length < 2) {
        alert('Adicione pelo menos 2 participantes.');
        return;
    }

    let shuffled = ShuffleArray([...amigo]);
    let result = [];

    for (let i = 0; i < amigo.length; i++) {
        let receiver = shuffled[i];
        let giver = amigo[i];
        result.push(`${giver} -> ${receiver}`);
    }

    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = result.map(pair => `<li>${pair}</li>`).join('');
}

function ShuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}