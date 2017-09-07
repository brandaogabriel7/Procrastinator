let tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    marcado: true
  }
];

let botaoEl = document.querySelector("#incluir-nova-tarefa");
botaoEl.addEventListener("click", insereTarefaNaPagina());

function insereTarefaNaPagina() {
  let tarefa = document.createElement('li'),
      inputTarefas = document.querySelector('#nova-tarefa-nome'),
      listaTarefas = document.querySelector("#lista-tarefas"),
      conteudo = document.createTextNode(inputTarefas.value);
      listaTarefas.appendChild(tarefa);
      tarefa.appendChild(conteudo);
}
