const tarefas = document.querySelectorAll(".tarefa")
const colunas = document.querySelectorAll(".coluna")

//Variavel para armazenar a tarefa que esta sendo arrastadsa
let tarefaArrastada = null

//Adiciona os ouvintespara cada tarefa
tarefas.forEach(tarefa => {
    tarefa.addEventListener("dragstart", iniciarArrasto)
    tarefa.addEventListener("dragend", finalizarArrasto)
})

//Adiciona os ouvintes para as colunas
colunas.forEach(coluna => {
    coluna.addEventListener("dragover", permitirSoltar)
    coluna.addEventListener("drop", soltarTarefa)
})
 
//Função para iniciar o arrasto da tarefa
function iniciarArrasto(event){
    tarefaArrastada = this;
    this.classList.add("arrastando")
}

//Função para finalizar o arrasto da tarefa
function finalizarArrasto(event){
    this.classList.remove("arrastando")
}

//Função para permitir soltar a tarefa
function permitirSoltar(event) {
    event.preventDefault();
}

//Função para soltar a tarefa na nova coluna
function soltarTarefa(event) {
    event.preventDefault();
    //Verifica se tem uma tarefa sendo arrastada
    if(tarefaArrastada) {
        this.querySelector(".tarefas").appendChild (tarefaArrastada)
        tarefaArrastada = null
    }
}

//Adiciona a função para adicionar novas tarefas
const formAdicionarTarefa = document.getElementById("adicionar-tarefa")

formAdicionarTarefa.addEventListener("submit", adicionarTarefa)

function adicionarTarefa(event) {
    event.preventDefault()
    const novaTarefa = document.getElementById("nova-tarefa").value
    if (novaTarefa) {
        const novaTarefaLi = document.createElement("li")
        novaTarefaLi.innerHTML = novaTarefa
        novaTarefaLi.draggable = true
        novaTarefaLi.classList.add("tarefa")

        document.getElementById("tarefas-a-fazer").appendChild(novaTarefaLi)
        document.getElementById("nova-tarefa").value = ""

        novaTarefaLi.addEventListener("dragstart", iniciarArrasto)
        novaTarefaLi.addEventListener("dragend",finalizarArrasto)
    }
}