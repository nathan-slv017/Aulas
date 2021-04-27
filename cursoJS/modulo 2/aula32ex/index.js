const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function crialI() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if( e.keyCode === 13){
        if(!inputTarefa.value) return
        criarTarefa(inputTarefa.value)
    }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarBotaoApagar(li) {
    li.innerHTML += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'apagar tarefa..')
    li.appendChild(botaoApagar);
}

function criarTarefa(tarefa) {
    console.log(tarefa);
    const li = crialI();
    li.innerHTML = inputTarefa.value;
    tarefas.appendChild(li);
    limpaInput();
    criarBotaoApagar(li);
    salvarTarefa();
}

btnTarefa.addEventListener('click', function () {
    if(!inputTarefa.value) return
    criarTarefa(inputTarefa.value)
})

document.addEventListener('click', function (e) {
    const el = e.target;
    console.log(el)
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
})

function salvarTarefa() {
    const litarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of litarefas){
        const tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaDeTarefas.push(tarefaTexto);
    }
    console.log(listaDeTarefas);
}