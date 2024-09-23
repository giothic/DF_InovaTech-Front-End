const modal =  document.getElementById('modal');
const btnAbrirModal = document.getElementById('abrir-modal');
const btnFecharModal = document.querySelector('.close');
const  inputTarefa =  document.getElementById('nova-tarefa');
const btnAdicionarTarefa = document.getElementById('adicionar-tarefa');

const listaPendentes = document.getElementById('tarefas-pendentes');
const listaAndamento = document.getElementById('tarefas-andamento');
const listaProgresso = document.getElementById('tarefas-progresso');
const listaConcluidas = document.getElementById('tarefas-concluidas');

btnAbrirModal.addEventListener('click', function (){
    modal.style.display = 'flex';
});

btnFecharModal.addEventListener('click', function(){
    modal.style.display = 'none';
});

btnAdicionarTarefa.addEventListener('click', function(){
    const tarefaTexto = inputTarefa.value;

    if (tarefaTexto === ''){
        alert('Digite uma tarefa!');
        return;
    }

    btnAdicionarTarefa(listaPendentes, tarefaTexto);
    inputTarefa.value = '';
    modal.style.display = 'none';
});

function adicionarTarefa(lista, texto){
    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = texto;

    const btnMover = document.createElement('button');
    btnMover.innerText = 'Mover';

    btnMover.addEventListener('click', function(){
        novaTarefa.appendChild(btnMover);
        lista.appendChild(novaTarefa);
    })
}