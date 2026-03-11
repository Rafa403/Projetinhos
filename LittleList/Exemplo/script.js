const inputTarefa = document.getElementById('input-tarefa');
const botaoAdicionar = document.getElementById('botao-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');
const avisoTarefa = document.getElementById('aviso-tarefa');
const popup = document.getElementById('popup');

botaoAdicionar.addEventListener('click', () => {
    const textoTarefa = inputTarefa.value.trim();
    if (textoTarefa === "") return;

    const tarefasExistentes = Array.from(listaTarefas.children);
    const tarefaRepetida = tarefasExistentes.some(liExistente => {
        return liExistente.querySelector('span').textContent === textoTarefa;
    });

    if (tarefaRepetida) {
        avisoTarefa.textContent = "Essa tarefa já existe!";
        avisoTarefa.style.display = "block";

        setTimeout(() => {
            avisoTarefa.style.display = "none";
        }, 3000);

        return;
    }

    const li = document.createElement('li');

    const spanTarefa = document.createElement('span');
    spanTarefa.textContent = textoTarefa;
    li.appendChild(spanTarefa);

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'X';
    botaoExcluir.classList.add('botao-excluir');
    li.appendChild(botaoExcluir);

    li.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            li.classList.toggle('completed');
        }
    });

    botaoExcluir.addEventListener('click', () => {
        li.remove();
    });

    listaTarefas.appendChild(li);

    // POPUP
    popup.textContent = `Tarefa "${textoTarefa}" foi adicionada!`;
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 5000);

    inputTarefa.value = "";
});

inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        botaoAdicionar.click();
    }
});

////////////////////////////////////////////////////////////////////////
function abrirTela(){
  document.getElementById("fundo").style.display = "flex";
}

function fecharTela(){
  document.getElementById("fundo").style.display = "none";
}