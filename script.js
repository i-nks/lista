function adicionarTarefa() {
    let tarefa = document.getElementById("tarefaInput").value;
    let li = document.createElement("li");
    li.innerHTML = tarefa;


    //CONCLUIR
    let btnConcluir = document.createElement("button");
    btnConcluir.innerHTML = "Concluir";
    btnConcluir.onclick = function () {
        this.parentElement.remove();
        console.log(this);
        let itemConcluido = this.parentElement;
        itemConcluido.removeChild(this)
        document.getElementById("listaConcluidos").appendChild(itemConcluido);

        //EXCLUIR
        let btnExcluir = document.createElement("button");
        btnExcluir.innerHTML = "Excluir";
        btnExcluir.onclick = function () {
            this.parentElement.remove();
        };
        itemConcluido.appendChild(btnExcluir);
    };
    li.appendChild(btnConcluir);

    document.getElementById("listaTarefas").appendChild(li);
}


document.getElementById("tarefaInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        adicionarTarefa();
    }
})