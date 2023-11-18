const botao = document.querySelector('.btn-add-task');
const input = document.querySelector('.input-task');
let listaCompleta = document.querySelector('.list-task');


let minhaListaDeItens = [];

function adicionarTarefa() {
    if(input.value == ''){
        alert('Não é possível adicionar tarefas em branco');
        return;
    }
    else{
         minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false,
    })

    input.value = '';

    mostarTarefa();
    }
   

}



function mostarTarefa() {
    let novaLi = '';
    minhaListaDeItens.forEach((item, index) => {
        novaLi = novaLi + `<li class="task ${item.concluida && "done"}">
        <img src="./assets/img/check.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
        <p>${item.tarefa}</p>
        <img src="./assets/img/trash.png" alt="check-na-lixeira" onclick="deletarTarefa(${index})">
    </li>
        `
    })

    listaCompleta.innerHTML = novaLi;
    //Salvar os itens da tarefa no LocalStorage
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens));
}

function deletarTarefa(index) {
    minhaListaDeItens.splice(index, 1);
    mostarTarefa();
}

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida;
    mostarTarefa();
}





// Recarregar itens do localstorage

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista');
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage);

    mostarTarefa();

}

recarregarTarefas();
botao.addEventListener('click', adicionarTarefa);

